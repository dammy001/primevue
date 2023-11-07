export default {
    object: {
        isEmpty(value) {
            return value === null || value === undefined || value === '' || (Array.isArray(value) && value.length === 0) || (!(value instanceof Date) && typeof value === 'object' && Object.keys(value).length === 0);
        },
        isNotEmpty(value) {
            return !this.isEmpty(value);
        },
        isFunction(value) {
            return !!(value && value.constructor && value.call && value.apply);
        },
        isObject(value, empty = true) {
            return value instanceof Object && value.constructor === Object && (empty || Object.keys(value).length !== 0);
        },
        isArray(value, empty = true) {
            return Array.isArray(value) && (empty || value.length !== 0);
        },
        isString(value, empty = true) {
            return typeof value === 'string' && (empty || value !== '');
        },
        isNumber(value) {
            return !isNaN(value);
        },
        toFlatCase(str) {
            // convert snake, kebab, camel and pascal cases to flat case
            return this.isString(str) ? str.replace(/(-|_)/g, '').toLowerCase() : str;
        },
        toKebabCase(str) {
            // convert snake, camel and pascal cases to kebab case
            return this.isString(str)
                ? str
                      .replace(/(_)/g, '-')
                      .replace(/[A-Z]/g, (c, i) => (i === 0 ? c : '-' + c.toLowerCase()))
                      .toLowerCase()
                : str;
        },
        findLast(arr, callback) {
            let item;

            if (this.isNotEmpty(arr)) {
                try {
                    item = arr.findLast(callback);
                } catch {
                    item = [...arr].reverse().find(callback);
                }
            }

            return item;
        },
        merge(value1, value2) {
            if (this.isArray(value1)) {
                value1.push(...(value2 || []));
            } else if (this.isObject(value1)) {
                Object.assign(value1, value2);
            }
        },
        groupBy(objectArr = [], key) {
            return objectArr.reduce((acc, obj) => {
                (acc[obj[key]] = acc[obj[key]] || []).push(obj);

                return acc;
            }, {});
        },
        getItemValue(obj, ...params) {
            return this.isFunction(obj) ? obj(...params) : obj;
        },
        getOptionValue(options, key = '', params = {}) {
            const fKeys = this.toFlatCase(key).split('.');
            const fKey = fKeys.shift();

            return fKey
                ? this.isObject(options)
                    ? this.getOptionValue(this.getItemValue(options[Object.keys(options).find((k) => this.toFlatCase(k) === fKey) || ''], params), fKeys.join('.'), params)
                    : undefined
                : this.getItemValue(options, params);
        },
        getSelectorOptionValue(options, key = '', params = {}) {
            const fKeys = this.toFlatCase(key).split('.');
            const fKey = fKeys.shift();
            const computedOptions = !fKeys.length && this.isObject(options) ? options['selector'] || options : options;

            return fKey
                ? this.isObject(computedOptions)
                    ? this.getSelectorOptionValue(this.getItemValue(computedOptions[Object.keys(computedOptions).find((k) => this.toFlatCase(k) === fKey) || ''], params), fKeys.join('.'), params)
                    : undefined
                : this.getItemValue(computedOptions, params);
        },
        test(regex, str) {
            if (regex) {
                const match = regex.test(str);

                regex.lastIndex = 0;

                return match;
            }

            return false;
        },
        toValue(value) {
            return this.isObject(value) && value.hasOwnProperty('value') ? value.value : value;
        },
        toUnit(value, variable = '') {
            const excludedProperties = ['opacity', 'z-index', 'line-height', 'font-weight', 'flex', 'flex-grow', 'flex-shrink', 'order'];

            if (!excludedProperties.some((property) => variable.endsWith(property))) {
                const val = `${value}`.trim();
                const valArr = val.split(' ');

                return valArr.map((v) => (this.isNumber(v) ? `${v}px` : v)).join(' ');
            }

            return value;
        },
        toNormalizePrefix(prefix) {
            return prefix.replaceAll(/ /g, '').replace(/[^\w]/g, '-');
        },
        findVariableInValue(value, prefix = '', excludedKeyRegexes = []) {
            if (this.isString(value)) {
                const regex = /{([^}]*)}/g;
                const val = value?.trim() || '';

                if (this.test(regex, val)) {
                    const matches = [...val.matchAll(regex)];

                    const getVariable = (_val) => {
                        return this.toKebabCase(
                            _val
                                .split('.')
                                .filter((_v) => !excludedKeyRegexes.some((_r) => this.test(_r, _v)))
                                .join('-')
                        );
                    };

                    return matches.map((_v) => `--${prefix}-${getVariable(_v[1])}`);
                }
            }

            return [];
        },
        getVariableValue(value, variable = '', prefix = '', excludedKeyRegexes = []) {
            if (this.isString(value)) {
                const regex = /{([^}]*)}/g;
                const val = value.trim();

                if (this.test(regex, val)) {
                    const _val = val.replaceAll(regex, (v) => {
                        const path = v.replace(/{|}/g, '');
                        const keys = path.split('.').filter((_v) => !excludedKeyRegexes.some((_r) => this.test(_r, _v)));

                        return `var(--${prefix}-${this.toKebabCase(keys.join('-'))})`;
                    });

                    const calculationRegex = /(\d+\s+[\+\-\*\/]\s+\d+)/g;
                    const cleanedVarRegex = /var\([^)]+\)/g;

                    return this.test(calculationRegex, _val.replace(cleanedVarRegex, '0')) ? `calc(${_val})` : _val;
                }

                return this.toUnit(val, variable);
            } else if (this.isNumber(value)) {
                return this.toUnit(value, variable);
            }

            return undefined;
        },
        getComputedValue(obj = {}, value) {
            if (this.isString(value)) {
                const regex = /{([^}]*)}/g;
                const val = value.trim();

                return this.test(regex, val) ? val.replaceAll(regex, (v) => this.getOptionValue(obj, v.replace(/{|}/g, ''))) : val;
            } else if (this.isNumber(value)) {
                return value;
            }

            return undefined;
        },
        setProperty(properties, key, value) {
            if (this.isString(key, false)) {
                properties.push(`${key}:${value};`);
            }
        },
        getRule(selector, properties) {
            if (selector) {
                return `${selector}{${properties}}`;
            }

            return '';
        },
        getToken(px, prefix, name) {
            return px
                .replace(new RegExp(`^${prefix}(-)?(${name})?(.*)`, 'g'), `${name}-$3`)
                .replaceAll('-', '.')
                .replaceAll('..', '.')
                .replaceAll(/\.$/g, '');
        }
    },
    style: {
        getBoxShadow(value = {}, localPrefix = '', prefix = '', name = '', excludedKeyRegexes) {
            const _value = Utils.object.toValue(value);
            const _prefix = `${localPrefix}-box-shadow`;

            if (!Utils.object.isString(_value)) {
                const shadows = [_value].flat().reduce(
                    (acc, v, i) => {
                        const { x, y, spread, color, blur, type } = v;
                        const px = `${_prefix}-${i}`;
                        const variables = {
                            ...(type === 'innerShadow' && { [`${px}-type`]: 'inset' }),
                            [`${px}-x`]: x,
                            [`${px}-y`]: y,
                            [`${px}-blur`]: blur,
                            [`${px}-spread`]: spread,
                            [`${px}-color`]: color
                        };

                        let styles = [];
                        let values = [];
                        let computedValues = [];
                        let tokens = [];

                        Object.entries(variables).forEach(([_k, _v]) => {
                            const computedValue = Utils.object.getVariableValue(_v, _prefix, prefix, excludedKeyRegexes);

                            styles.push(`var(--${_k})`);
                            values.push(_v);
                            computedValues.push(computedValue);
                            tokens.push(Utils.object.getToken(_k, prefix, name));
                            Utils.object.setProperty(acc['variables'], `--${_k}`, computedValue);
                        });

                        acc['styles'].push(styles.join(' '));
                        acc['values'].push(values.join(' '));
                        acc['computedValues'].push(computedValues.join(' '));
                        acc['tokens'].push(tokens.join(' '));

                        return acc;
                    },
                    {
                        styles: [],
                        variables: [],
                        values: [],
                        computedValues: [],
                        tokens: []
                    }
                );

                return {
                    styles: [`box-shadow: ${shadows.styles.join(',')};`],
                    variables: shadows.variables,
                    values: shadows.values.join(', '),
                    computedValues: shadows.computedValues.join(', '),
                    tokens: shadows.tokens.join(', ')
                };
            }

            const computedValue = Utils.object.getVariableValue(_value, _prefix, prefix, excludedKeyRegexes);

            return {
                styles: [`box-shadow: var(--${_prefix});`],
                variables: [`--${_prefix}: ${computedValue};`],
                values: _value,
                computedValues: computedValue,
                tokens: [Utils.object.getToken(_prefix, prefix, name)]
            };
        }
    }
};
