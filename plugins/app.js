import PrimeVue from '@/components/lib/config/PrimeVue';
import CodeHighlight from '@/directives/CodeHighlight';

//import Lara from '@/themes/lara';
import LaraFigma from '@/themes/lara-figma/tokens.json';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true, theme: LaraFigma.lara });

    nuxtApp.vueApp.directive('code', CodeHighlight);
});
