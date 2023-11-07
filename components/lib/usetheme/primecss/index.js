import Utils from './utilities.js';

const VARIABLE = {
    PREFIX: 'p',
    SELECTOR: ':root',
    EXCLUDED_KEY_REGEX: /^(global|root)$/gi,
    TRANSFORM: 'strict' // strict | lenient
};

const SELECTOR = {
    PREFIX: '',
    LAYER: {
        enable: true,
        name: 'primecss'
    },
    DEFAULT_TEMPLATE: '{0}',
    SELECTORS: {
        global: 'body'
    },
    ALIAS: {
        after: ':after',
        hover: ':hover',
        focus: ':focus',
        active: ':active',
        focusVisible: ':focus-visible',
        enabled: ':enabled',
        lastChild: ':last-child'
    }
};

const EXCLUDED_KEY_REGEX = /^(selector|properties|compounds|combinators|states|css|variants|variables)$/gi;
const EXCLUDED_KEY_REGEX_FOR_FIGMA = /^(typography)$/gi;

const PrimeCSS = {
    generate(theme, options = {}) {
        const { variableOptions = {}, selectorOptions = {} } = options;
        let { prefix = VARIABLE.PREFIX, enable = true, transform = VARIABLE.TRANSFORM, selector: variableSelector = VARIABLE.SELECTOR, excludedKeyRegex = VARIABLE.EXCLUDED_KEY_REGEX } = variableOptions;
        let { prefix: selectorPrefix = SELECTOR.PREFIX, layer = SELECTOR.LAYER, selectors = {}, alias = {}, defaultTemplate = SELECTOR.DEFAULT_TEMPLATE } = selectorOptions;

        selectors = { ...SELECTOR.SELECTORS, ...selectors };
        alias = { ...SELECTOR.ALIAS, ...alias };

        const exclusiveProperties = ['box-shadow'];
        const isLenientTransform = transform === 'lenient';
        const variablesInValue = new Set();

        const _getProperties = (_properties, _prefix = '', _name = '', _property = '') => {
            return Object.entries(_properties).reduce(
                (acc, [key, value]) => {
                    const { styles, variables, values, computedValues, tokens } = acc;
                    const k = Utils.object.toKebabCase(key);
                    const px = Utils.object.toNormalizePrefix(`${_prefix}-${k}`);
                    const pr = _property ? `${_property}-${k}` : k;
                    const v = Utils.object.toValue(value);

                    if (Utils.object.isObject(v) || exclusiveProperties.some((expr) => expr === k)) {
                        const computed = k === 'box-shadow' ? Utils.style.getBoxShadow(v, _prefix, prefix, _name, [EXCLUDED_KEY_REGEX, excludedKeyRegex]) : _getProperties(v, px, _name, pr);

                        Utils.object.merge(styles, computed.styles);
                        Utils.object.merge(tokens, computed.tokens);
                        enable && Utils.object.merge(variables, computed.variables);
                        values[key] = computed.values;
                        computedValues[key] = computed.computedValues;
                    } else {
                        const computedValue = Utils.object.getVariableValue(v, px, prefix, [EXCLUDED_KEY_REGEX, excludedKeyRegex]);

                        Utils.object.setProperty(styles, pr, isLenientTransform ? computedValue : `var(--${px})`);
                        enable && Utils.object.setProperty(variables, `--${px}`, computedValue);
                        values[key] = v;
                        computedValues[key] = computedValue;
                        tokens.push(Utils.object.getToken(px, prefix, _name));
                        isLenientTransform && Utils.object.findVariableInValue(v, prefix, [EXCLUDED_KEY_REGEX, excludedKeyRegex]).forEach((vr) => variablesInValue.add(vr));
                    }

                    return acc;
                },
                {
                    styles: [],
                    variables: [],
                    values: {},
                    computedValues: {},
                    tokens: []
                }
            );
        };

        const _getSelector = (_value, _key, _path) => {
            const _getSelectorFromPath = () => {
                const p = _path.join('.');
                const k = Utils.object.findLast(Object.keys(alias), (_k) => p.endsWith(_k));

                return k ? alias[k] : Utils.object.getSelectorOptionValue(selectors, p);
            };

            return _value['selector'] ?? _getSelectorFromPath() ?? defaultTemplate.replace('{0}', _key);
        };

        const _generate = (_theme = {}, _prefix = '', _selector = '', _keys = [], _compound = false) => {
            return Object.entries(_theme).reduce(
                (acc, [key, value]) => {
                    const { styles, variables, constantVariables, properties } = acc;
                    const px = Utils.object.test(EXCLUDED_KEY_REGEX, key) || Utils.object.test(excludedKeyRegex, key) ? _prefix : `${_prefix}-${Utils.object.toKebabCase(key)}`;

                    if (Utils.object.isObject(value) && key !== 'selector') {
                        const path = [..._keys, key];
                        let s = Utils.object.test(EXCLUDED_KEY_REGEX, key) || Utils.object.test(EXCLUDED_KEY_REGEX_FOR_FIGMA, key) ? '' : _getSelector(value, key, path);
                        let computed = {};

                        s = Utils.object.getComputedValue(theme, s) || '';

                        switch (key) {
                            case 'properties':
                            case 'typography':
                                const _value = Utils.object.toValue(value);
                                const [name, ...rest] = _keys;

                                computed = _getProperties(_value, px, name);
                                computed.styles = [Utils.object.getRule(`${_selector}${s}`, computed.styles.join(''))];
                                computed.properties = [
                                    {
                                        groupBy: name,
                                        key: rest.join('.'),
                                        path: path.join('.'),
                                        token: Utils.object.getToken(px, prefix, name),
                                        prefix: px,
                                        selector: `${_selector}${s}`,
                                        properties: computed.values,
                                        computedProperties: computed.computedValues,
                                        tokens: computed.tokens
                                    }
                                ];

                                break;

                            case 'compounds':
                            case 'variants':
                            case 'states':
                                computed = _generate(value, px, _selector, path, true);
                                break;

                            case 'combinators':
                                computed = _generate(value, px, _selector, path);
                                break;

                            case 'variables':
                                computed.constantVariables = this.toVariables(value, { prefix: px }).value;
                                break;

                            default:
                                const _s = _compound || key === 'root' ? `${_selector}${s}` : `${_selector} ${s}`;

                                computed = _generate(value, px, _s.trim(), path);
                                break;
                        }

                        Utils.object.merge(styles, computed.styles);
                        Utils.object.merge(variables, computed.variables);
                        Utils.object.merge(constantVariables, computed.constantVariables);
                        Utils.object.merge(properties, computed.properties);
                    } else if (key === 'css') {
                        Utils.object.merge(styles, [`${value}`]);
                    }

                    return acc;
                },
                {
                    styles: [],
                    variables: [],
                    constantVariables: [],
                    properties: []
                }
            );
        };

        const { styles, variables, constantVariables, properties } = _generate(theme, prefix, selectorPrefix, undefined, !!selectorPrefix);
        const _variables = [...constantVariables, ...(isLenientTransform ? variables.filter((vr) => variablesInValue.has(vr.split(':')[0])) : variables)];

        return {
            styles: {
                value: styles,
                css: layer.enable ? Utils.object.getRule(`@layer ${layer.name || ''}`, styles.join('')) : styles.join('')
            },
            variables: {
                value: _variables,
                css: enable ? Utils.object.getRule(variableSelector, _variables.join('')) : ''
            },
            properties: {
                value: properties,
                group: Utils.object.groupBy(properties, 'groupBy')
            }
        };
    },
    toVariables(theme, options = {}) {
        const { prefix = VARIABLE.PREFIX, selector = VARIABLE.SELECTOR, excludedKeyRegex = VARIABLE.EXCLUDED_KEY_REGEX } = options;

        const _toVariables = (_theme, _prefix = '') => {
            return Object.entries(_theme).reduce((acc, [key, value]) => {
                const px = Utils.object.toNormalizePrefix(Utils.object.test(EXCLUDED_KEY_REGEX, key) || Utils.object.test(excludedKeyRegex, key) ? _prefix : `${_prefix}-${Utils.object.toKebabCase(key)}`);
                const v = Utils.object.toValue(value);

                if (Utils.object.isObject(v)) {
                    const variables = _toVariables(v, px);

                    Utils.object.merge(acc, variables);
                } else {
                    Utils.object.setProperty(acc, `--${px}`, Utils.object.getVariableValue(v, px, prefix, [EXCLUDED_KEY_REGEX, excludedKeyRegex]));
                }

                return acc;
            }, []);
        };

        const value = _toVariables(theme, prefix);

        return {
            value,
            css: Utils.object.getRule(selector, value.join(''))
        };
    }
};

export default PrimeCSS;
