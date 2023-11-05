<template>
    <div class="flex flex-column justify-content-center">
        <div class="flex flex-wrap justify-content-center align-items-center overflow-hidden" style="background-image: url('/_nuxt/pages/templates/assets/Hero.jpg'); background-repeat: no-repeat; background-size: cover">
            <div
                class="flex w-full gap-4 pt-3 border-round-3xl my-8 p-4 xl:ml-8"
                style="
                    border: 1px solid rgba(255, 255, 255, 0.24);
                    background: linear-gradient(180deg, rgba(170, 140, 255, 0) 0%, rgba(170, 140, 255, 0.8) 100%), rgba(255, 255, 255, 0.1);
                    box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset, 0px 48px 80px 0px rgba(0, 0, 0, 0.08), 0px -5px 13px -2px rgba(255, 255, 255, 0.55) inset;
                    backdrop-filter: blur(2px);
                    max-width: 464px;
                    min-width: 271px;
                    min-height: 285px;
                    max-height: 300px;
                    margin-right: 1rem;
                    margin-left: 1rem;
                "
            >
                <div class="flex flex-column justify-content-center align-items-start gap-4 md:gap-5" style="min-width: 251px">
                    <img src="../templates/assets/Logo.svg" alt="1" class="flex w-10rem md:w-full ml-3 h-full vertical-align-bottom" style="min-width: 170px; max-width: 225px" />
                    <span class="text-white">Vue template with mode options, menu layouts, sample apps, pre-made pages, and 24 PrimeVue themes.</span>
                    <div class="flex flex-column justify-content-center align-items-start align-self-stretch">
                        <div class="flex flex-wrap align-items-center justify-content-around gap-3 align-self-stretch">
                            <Button label="Live Demo" class="flex w-full justify-content-center align-items-center surface-900 border-900" style="padding: 10.5px 17.5px; gap: 7px; border-radius: 48px; max-width: 200px"></Button>
                            <Button label="Buy Now" severity="info" class="flex w-full justify-content-center align-items-center" style="padding: 10.5px 17.5px; gap: 7px; border-radius: 48px; max-width: 200px"></Button>
                        </div>
                    </div>
                    <div class="flex lg:justify-content-start justify-content-center w-full sm:mb-3 align-items-center gap-3">
                        <div class="flex justify-content-center align-items-center mb-2 md:mb-0 gap-2">
                            <i class="pi pi-github text-white" />
                            <a class="flex justify-content-center text-white">Get Support</a>
                        </div>
                        <div class="flex justify-content-center align-items-center mb-2 md:mb-0 gap-2">
                            <i class="pi pi-book text-white" />
                            <a class="flex justify-content-center text-white">Read Docs</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex align-items-end lg:mr-5">
                <img src="../templates/assets/Group_4.png" alt="1" class="relative w-full h-full ml-4 mt-8" style="max-height: 390px; width: 643px; min-height: 325px" />
            </div>
        </div>
    </div>
    <div class="flex flex-column align-items-center gap-6" style="padding: 80px 120px">
        <div class="flex flex-column align-items-center" style="gap: 20px">
            <span class="flex flex-column align-self-stretch text-900 text-center text-6xl font-semibold" style="line-height: 56px"> <span>Integration with </span>Existing Vite Applications </span>
            <span class="flex text-center text-base font-normal" style="line-height: 21px"
                >Only the folders that are related to the layout needs to move in to your project. We‘ve already created a short tutorial with details for Sakai Vue. The both templates have the same implementation.</span
            >
        </div>
        <div class="border-round-2xl" style="max-width: 930px; max-height: 596.25px; background-color: #e0e0f7; backdrop-filter: blur(2px)">
            <div class="relative w-22rem md:w-full h-12rem md:h-full">
                <img src="../templates/assets/Dashboard.svg" class="flex align-items-start w-full h-full" style="object-fit: cover; filter: blur(2px)" alt="" />
                <div class="flex" style="max-width: 100px">
                    <img src="../templates/assets/PLay.svg" class="absolute top-50 right-50 cursor-pointer" style="margin-right: -5rem; margin-top: -5rem; height: 10rem" alt="" />
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-column align-items-center justify-content-center gap-6 py-8">
        <p class="align-items-center text-center font-semibold line-height-3 align-items-stretch text-2xl md:text-6xl text-900" style="max-width: 718px">Features that the Apolla template gives you</p>
        <FeatureMenu :items="items" :dynamicStyle="{ height: '8rem' }" />
        <div class="flex w-full align-items-center gap-4" style="max-width: 1062px">
            <div class="flex-1" style="height: 1px; background-color: #dfe7ef"></div>

            <img src="../templates/assets/Apollo_logo.svg" alt="" class="flex justify-content-center align-items-center flex-grow-0" style="padding: 10px 11.992px 14px 12px" />
            <div class="flex-1" style="height: 1px; background-color: #dfe7ef"></div>
        </div>
    </div>
    <div class="flex w-full flex-column justify-content-center align-items-center gap-2" style="max-width: 1440px">
        <div class="flex flex-wrap md:flex-nowrap w-full align-items-center justify-content-center md:align-items-start gap-4" style="max-width: 1062px">
            <div class="flex flex-column align-items-start gap-4 flex-1 align-self-stretch border-round-lg bg-white" style="padding: 20px 20px 41px 20px; max-width: 338px; min-width: 200px">
                <img src="../templates/assets/Features/Use_applications.svg" alt="" class="w-full border-round-sm" style="max-width: 298px; max-height: 242px; background-color: #eff3f8" />
                <div class="flex flex-column w-full align-items-start gap-4" style="max-width: 298px">
                    <span class="align-self-stretch text-900 text-lg font-semibold line-height-3">Ready to Use Applications</span>
                    <span class="align-self-stretch text-sm font-normal line-height-3">Mail, File System, Tasks, Calendar, Blog and Chat are the sample applications to get started with ease.</span>
                </div>
            </div>
            <div class="flex flex-column align-items-start gap-4 flex-1 align-self-stretch border-round-lg bg-white" style="padding: 20px 20px 41px 20px; max-width: 338px; min-width: 200px">
                <img src="../templates/assets/Features/E-Commerce.svg" alt="" class="w-full border-round-sm" style="max-width: 298px; max-height: 242px; background-color: #eff3f8" />
                <div class="flex flex-column w-full align-items-start gap-4" style="max-width: 298px">
                    <span class="align-self-stretch text-900 text-lg font-semibold line-height-3">E-Commerce Pages</span>
                    <span class="align-self-stretch text-sm font-normal line-height-3">Apollo offers E-commerce pages to kickstart your e-commerce project powered by PrimeBlocks.</span>
                </div>
            </div>
            <div class="flex flex-column align-items-start gap-4 flex-1 align-self-stretch border-round-lg bg-white" style="padding: 20px 20px 41px 20px; max-width: 338px; min-width: 200px">
                <img src="../templates/assets/Features/Pages.svg" alt="" class="w-full border-round-sm" style="max-width: 298px; max-height: 242px; background-color: #eff3f8" />
                <div class="flex flex-column w-full align-items-start gap-4" style="max-width: 298px">
                    <span class="align-self-stretch text-900 text-lg font-semibold line-height-3">Ready to Use Pages</span>
                    <span class="align-self-stretch text-sm font-normal line-height-3">Landing, login, invoice, help, user management and error pages are provided as template pages to get started with building your app.</span>
                </div>
            </div>
        </div>
        <div class="flex w-full py-6 align-items-center gap-4" style="max-width: 1062px">
            <div class="flex-1" style="height: 1px; background-color: #dfe7ef"></div>

            <img src="../templates/assets/Apollo_logo.svg" alt="" class="flex justify-content-center align-items-center flex-grow-0" style="padding: 10px 11.992px 14px 12px" />
            <div class="flex-1" style="height: 1px; background-color: #dfe7ef"></div>
        </div>
    </div>
    <div class="flex w-full justify-content-center p-7 relative" style="display: inline-block">
        <img src="./assets/vuecli.svg" alt="" class="w-full h-full" style="max-width: 788px; max-height: 403px" />
        <div class="flex flex-column justify-content-center align-items-center w-full absolute" style="height: 60%">
            <div class="w-full justify-content-center flex flex-column align-items-center">
                <img src="./assets/Screen.svg" class="w-full h-full mt-8" style="max-height: 221px; max-width: 624px" />
            </div>
            <div class="flex flex-column justify-content-center align-item-start h-full w-full" style="max-height: 221px; max-width: 624px">
                <div class="flex flex-column justify-content-between gap-3">
                    <h3 class="mt-2">Vue.js App with No Configuration</h3>
                    <div class="text-xs md:text-base font-normal line-height-3">
                        Apollo is powered by Angular CLI to get started in no time following the best practices like service based component interaction modular design and strict mode support
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex w-full py-6 align-items-center gap-4" style="max-width: 1062px">
        <div class="flex-1" style="height: 1px; background-color: #dfe7ef"></div>

        <img src="../templates/assets/Apollo_logo.svg" alt="" class="flex justify-content-center align-items-center flex-grow-0" style="padding: 10px 11.992px 14px 12px" />
        <div class="flex-1" style="height: 1px; background-color: #dfe7ef"></div>
    </div>

    <div class="flex flex-column align-items-center justify-content-center gap-6 py-8">
        <FeatureMenu :items="items2" :dynamicStyle="{ height: '10.4rem' }" />
        <div class="flex w-full align-items-center gap-4" style="max-width: 1062px">
            <div class="flex-1" style="height: 1px; background-color: #dfe7ef"></div>

            <img src="../templates/assets/Apollo_logo.svg" alt="" class="flex justify-content-center align-items-center flex-grow-0" style="padding: 10px 11.992px 14px 12px" />
            <div class="flex-1" style="height: 1px; background-color: #dfe7ef"></div>
        </div>
    </div>
    <div class="flex justify-content-center px-4">
        <div class="grid p-8">
            <div class="col-12 md:col-6">
                <div class="card">
                    <div>
                        <img src="./assets/responsive.svg" alt="" />
                        <h5 class="mt-2">Vue.js App with No Configuration</h5>
                        <div class="text-xs md:text-base font-normal line-height-3">
                            Apollo is powered by Angular CLI to get started in no time following the best practices like service based component interaction modular design and strict mode support
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img src="./assets/responsive.svg" alt="" />
                    <h5 class="mt-2">Vue.js App with No Configuration</h5>
                    <div class="text-xs md:text-base font-normal line-height-3">
                        Apollo is powered by Angular CLI to get started in no time following the best practices like service based component interaction modular design and strict mode support
                    </div>
                </div>
                <div class="card">
                    <img src="./assets/responsive.svg" alt="" />
                    <h5 class="mt-2">Vue.js App with No Configuration</h5>
                    <div class="text-xs md:text-base font-normal line-height-3">
                        Apollo is powered by Angular CLI to get started in no time following the best practices like service based component interaction modular design and strict mode support
                    </div>
                </div>
            </div>
            <div class="col-12 md:col-6 md:pt-8">
                <div class="card">
                    <img src="./assets/responsive.svg" alt="" />
                    <h5 class="mt-2">Vue.js App with No Configuration</h5>
                    <div class="text-xs md:text-base font-normal line-height-3">
                        Apollo is powered by Angular CLI to get started in no time following the best practices like service based component interaction modular design and strict mode support
                    </div>
                </div>
                <div class="card">
                    <img src="./assets/responsive.svg" alt="" />
                    <h5 class="mt-2">Vue.js App with No Configuration</h5>
                    <div class="text-xs md:text-base font-normal line-height-3">
                        Apollo is powered by Angular CLI to get started in no time following the best practices like service based component interaction modular design and strict mode support
                    </div>
                </div>
                <div class="card">
                    <img src="./assets/responsive.svg" alt="" />
                    <h5 class="mt-2">Vue.js App with No Configuration</h5>
                    <div class="text-xs md:text-base font-normal line-height-3">
                        Apollo is powered by Angular CLI to get started in no time following the best practices like service based component interaction modular design and strict mode support
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FeatureMenu from '../templates/FeatureMenu.vue';
export default {
    data() {
        return {
            items: [
                {
                    id: 'one',
                    title: 'Light / Dark / Dim Modes',
                    description: 'Apollo has 3 display modes to choose from; Light, Dim and Dark.',
                    image: 'Screen_Card.svg'
                },
                {
                    id: 'two',
                    title: 'Component Themes',
                    description: 'Apollo offers 24 built-in component themes and creating your own theme is a matter of defining couple of sass variables.',
                    image: 'Colors.svg'
                },
                {
                    id: 'three',
                    title: '7 Menu Orientations',
                    description: 'Static, Overlay, Slim, Slim+, Reveal, Drawer and Horizontal are the available menu layouts depending on your preference.',
                    isGalleria: true,
                    image: [
                        '/_nuxt/pages/templates/assets/layout-menu/static.svg',
                        '/_nuxt/pages/templates/assets/layout-menu/slim.svg',
                        '/_nuxt/pages/templates/assets/layout-menu/reveal.svg',
                        '/_nuxt/pages/templates/assets/layout-menu/horizontal.svg',
                        '/_nuxt/pages/templates/assets/layout-menu/overlay.svg',
                        '/_nuxt/pages/templates/assets/layout-menu/slim+.svg',
                        '/_nuxt/pages/templates/assets/layout-menu/drawer.svg'
                    ]
                },
                {
                    id: 'four',
                    title: 'Menu Themes',
                    description: 'Stunning theming for the main menu with 3 alternatives; Color Scheme, Primary Color and Transparent.',
                    image: 'Themes.svg'
                }
            ],
            items2: [
                {
                    id: 'one',
                    title: 'PrimeFlex CSS Utilities',
                    description: 'PrimeFlex is a CSS utility library featuring various helpers such as a grid system, flexbox, spacing, elevation and more.',
                    image: 'Utilities.svg'
                },
                {
                    id: 'two',
                    title: 'PrimeBlocks',
                    description: 'Fully compatible with PrimeBlocks, choose from the wide range of blocks and customize the way you like. Note that PrimeBlocks is not included in the template and requires a separate purchase.',
                    image: 'Primeblocks.svg'
                },
                {
                    id: 'three',
                    title: 'PrimeIcons',
                    description: 'Apollo ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
                    image: 'Prime-icons.svg'
                },
                {
                    id: 'four',
                    title: 'Figma File',
                    description:
                        'Apollo uses Figma as the design tool. It will be possible to download the Figma file after your purchase. You can preview the Figma file before the purchase. Note that PrimeVue UI components are excluded from the Apollo Figma file as they are available in PrimeOne for Figma only.',
                    image: 'Figma.svg'
                }
            ]
        };
    },
    components: {
        FeatureMenu
    }
};
</script>

<style>
a {
    text-decoration: underline;
}
.icon {
    font-size: 24px;
}

.icon-container {
    display: flex;
    align-items: center;
}

/* Create the horizontal lines */
.line {
    flex-grow: 1;
    height: 1px;
    background-color: #000;
    margin: 0 10px; /* Adjust the spacing between the lines and the icon */
    border-radius: 50%; /* Round the ends of the lines */
}
</style>
