import { useStyle } from 'primevue/usestyle';
import { useTheme } from 'primevue/usetheme';

const css = `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: var(--scrollbar-width);
}
`;

const classes = {};

const inlineStyles = {};

const options = {};

export default {
    name: 'base',
    css,
    classes,
    inlineStyles,
    options,
    loadStyle(options = {}) {
        return this.css ? useStyle(this.css, { name: this.name, ...options }) : {};
    },
    loadTheme(theme, useStyleOptions = {}) {
        return theme && this.options?.theme ? useTheme(theme, { name: this.name, ...this.options?.theme }).load(undefined, useStyleOptions) : {};
    },
    getStyleSheet(extendedCSS = '', props = {}) {
        if (this.css) {
            const _props = Object.entries(props)
                .reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, [])
                .join(' ');

            return `<style type="text/css" data-primevue-style-id="${this.name}" ${_props}>${this.css}${extendedCSS}</style>`;
        }

        return '';
    },
    extend(style) {
        return { ...this, css: undefined, ...style };
    }
};
