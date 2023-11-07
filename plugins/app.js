import PrimeVue from '@/components/lib/config/PrimeVue';
import CodeHighlight from '@/directives/CodeHighlight';

import Lara from '@/themes/lara';
//import LaraFigma from '@/themes/lara-figma/tokens.json';
//Lara.config({ dark: true, palette: { primary: '#10b981', surface: {} | '#6b7280' } })
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {
        ripple: true,
        theme: {
            preset: Lara,
            options: {
                dark: false,
                fontFamily: 'myFontFamily',
                fontSize: '2rem',
                borderRadius: '8px',
                textColor: 'red',
                primaryColor: '#10b981',
                shade: {
                    '000': '#ffffff',
                    100: '#f9fafb',
                    200: '#f3f4f6',
                    300: '#e5e7eb',
                    400: '#d1d5db',
                    500: '#9ca3af',
                    600: '#6b7280',
                    700: '#4b5563',
                    800: '#374151',
                    900: '#1f2937'
                },
                css: `
                    .body {
                        background: red;
                    }
                `,
                variables: {}
            }
        }
    });

    nuxtApp.vueApp.directive('code', CodeHighlight);
});
