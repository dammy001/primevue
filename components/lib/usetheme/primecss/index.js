import Utils from './utils.js';

const VARIABLE = {
    PREFIX: 'p',
    SELECTOR: ':root',
    EXCLUDED_KEY_REGEX: /^(global|root)$/gi
};

const SELECTOR = {
    PREFIX: '',
    LAYER: {
        enable: true,
        name: 'primecss'
    },
    DEFAULT_TEMPLATE: '[data-pc-section="{0}"]',
    SELECTORS: {
        global: 'body'
    },
    ALIAS: {
        after: ':after',
        hover: ':hover',
        focus: ':focus'
    }
};

const EXCLUDED_KEY_REGEX = /^(selector|properties|compounds|children|states|css|variants|variables)$/gi;
const EXCLUDED_KEY_REGEX_FOR_FIGMA = /^(typography)$/gi;

const PrimeCSS = {
    generate(theme, options = {}) {
        const { variableOptions = {}, selectorOptions = {} } = options;
        const { prefix = VARIABLE.PREFIX, enable = true, selector: variableSelector = VARIABLE.SELECTOR, excludedKeyRegex = VARIABLE.EXCLUDED_KEY_REGEX } = variableOptions;
        const { prefix: selectorPrefix = SELECTOR.PREFIX, layer = SELECTOR.LAYER, selectors = SELECTOR.SELECTORS, alias = SELECTOR.ALIAS, defaultTemplate = SELECTOR.DEFAULT_TEMPLATE } = selectorOptions;

        const exclusiveProperties = ['box-shadow'];

        const _getProperties = (_properties, _prefix = '', _property = '') => {
            return Object.entries(_properties).reduce(
                (acc, [key, value]) => {
                    const { styles, variables, values } = acc;
                    const k = Utils.object.toKebabCase(key);
                    const px = `${_prefix}-${k}`;
                    const pr = _property ? `${_property}-${k}` : k;
                    const v = Utils.object.toValue(value);

                    if (Utils.object.isObject(v) || exclusiveProperties.some((expr) => expr === k)) {
                        const computed = k === 'box-shadow' ? Utils.style.getBoxShadow(v, _prefix, [EXCLUDED_KEY_REGEX, excludedKeyRegex]) : _getProperties(v, px, pr);

                        Utils.object.merge(styles, computed.styles);
                        enable && Utils.object.merge(variables, computed.variables);
                        values[key] = computed.values;
                    } else {
                        const computedValue = Utils.object.getVariableValue(v, px, prefix, [EXCLUDED_KEY_REGEX, excludedKeyRegex]);

                        Utils.object.setProperty(styles, pr, `var(--${px})`);
                        enable && Utils.object.setProperty(variables, `--${px}`, computedValue);
                        values[key] = computedValue;
                    }

                    return acc;
                },
                {
                    styles: [],
                    variables: [],
                    values: {}
                }
            );
        };

        const _getSelector = (_value, _key, _path) => {
            const _getSelectorFromPath = () => {
                const p = _path.join('.');
                const k = Utils.object.findLast(Object.keys(alias), (_k) => p.endsWith(_k));

                return k ? alias[k] : Utils.object.getSelectorOptionValue(selectors, p);
            };

            return _value['selector'] || _getSelectorFromPath() || defaultTemplate.replace('{0}', _key);
        };

        const _generate = (_theme = {}, _prefix = '', _selector = '', _keys = [], _compound = false) => {
            return Object.entries(_theme).reduce(
                (acc, [key, value]) => {
                    const { styles, variables, properties } = acc;
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

                                computed = _getProperties(_value, px);
                                computed.styles = [Utils.object.getRule(`${_selector}${s}`, computed.styles.join(''))];
                                computed.properties = [
                                    {
                                        groupBy: name,
                                        key: rest.join('.'),
                                        prefix: px,
                                        properties: computed.values
                                    }
                                ];

                                break;

                            case 'compounds':
                            case 'variants':
                            case 'states':
                                computed = _generate(value, px, _selector, path, true);
                                break;

                            case 'children':
                                computed = _generate(value, px, _selector, path);
                                break;

                            case 'variables':
                                computed.variables = this.toVariables(value, { prefix: px }).value;
                                break;

                            default:
                                const _s = _compound || key === 'root' ? `${_selector}${s}` : `${_selector} ${s}`;

                                computed = _generate(value, px, _s.trim(), path);
                                break;
                        }

                        Utils.object.merge(styles, computed.styles);
                        Utils.object.merge(variables, computed.variables);
                        Utils.object.merge(properties, computed.properties);
                    } else if (key === 'css') {
                        Utils.object.merge(styles, [`${value}`]);
                    }

                    return acc;
                },
                {
                    styles: [],
                    variables: [],
                    properties: []
                }
            );
        };

        const { styles, variables, properties } = _generate(theme, prefix, selectorPrefix, undefined, !!selectorPrefix);

        return {
            styles: {
                value: styles,
                css: layer.enable ? Utils.object.getRule(`@layer ${layer.name || ''}`, styles.join('')) : styles.join('')
            },
            variables: {
                value: variables,
                css: enable ? Utils.object.getRule(variableSelector, variables.join('')) : ''
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
                const px = Utils.object.test(EXCLUDED_KEY_REGEX, key) || Utils.object.test(excludedKeyRegex, key) ? _prefix : `${_prefix}-${Utils.object.toKebabCase(key)}`;
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
