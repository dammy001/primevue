<template>
    <Dialog
        v-model:visible="visible"
        modal
        :pt="{
            mask: {
                style: 'backdrop-filter: blur(2px)'
            }
        }"
    >
        <template #container="{ closeCallback }">
            <div class="flex w-full justify-content-center">
                <div class="card flex flex-column align-items-center px-6" style="width: 370px; height: 590px">
                    <div class="flex align-items-center align-self-stretch gap-4">
                        <div class="flex flex-column align-items-start" style="gap: 2px">
                            <span class="font-semibold text-xl" style="font-size: 22px">Apollo</span>
                            <span class="font-normal text-sm" style="font-size: 14px">Layout For PrimeVue</span>
                            <a class="cursor-pointer" style="color: #2196f3; font-size: 12px; font-style: normal; font-weight: 500; line-height: normal; text-decoration-line: underline"> License Detail</a>
                        </div>
                        <img src="./assets/ProductImage.svg" class="w-10rem h-8rem" alt="" />
                    </div>

                    <div class="flex flex-column gap-3 align-items-start align-self-stretch">
                        <span class="p-1" style="color: #000; font-size: 12px; font-style: normal; font-weight: 600; line-height: normal">License</span>
                        <div class="flex flex-column align-self-stretch border-1 mb-3 p-1" style="gap: 7px; border-radius: 4px; border-color: rgba(0, 0, 0, 0.1)">
                            <div class="flex align-items-center justify-content-center align-self-stretch pb-2" style="gap: 10px; border-bottom: 1px solid rgba(0, 0, 0, 0.1)">
                                <RadioButton v-model="checked" :value="checked" />
                                <span class="flex-grow-1" style="color: #000; font-size: 12px; font-style: normal; font-weight: 500; line-height: normal">Basic License</span>
                                <span class="flex align-items-start text-center vertical-align-middle" style="color: #000; font-size: 16px; font-style: normal; font-weight: 600; line-height: normal">$59</span>
                            </div>
                            <div class="flex flex-column justify-content-center align-items-start align-self-stretch" style="padding: 6px 12px">
                                <span style="color: #000; font-size: 12px; font-style: normal; font-weight: 400; line-height: 150%"> Non commercial usage</span>
                                <span style="color: #000; font-size: 12px; font-style: normal; font-weight: 400; line-height: 150%"> Single End Product, No multi use</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-column gap-3 align-items-start align-self-stretch">
                        <div class="flex flex-column align-self-stretch border-1 p-1" style="gap: 7px; border-radius: 4px; border-color: rgba(0, 0, 0, 0.1)">
                            <div class="flex align-items-center justify-content-center align-self-stretch border-bottom-1 pb-2" style="gap: 10px">
                                <RadioButton v-model="checked1" />
                                <span class="flex-grow-1" style="color: #000; font-size: 12px; font-style: normal; font-weight: 500; line-height: normal">Extended License</span>
                                <span class="flex align-items-start text-center vertical-align-middle" style="color: #000; font-size: 16px; font-style: normal; font-weight: 600; line-height: normal">$590</span>
                            </div>
                            <div class="flex flex-column justify-content-center align-items-start align-self-stretch" style="padding: 6px 12px">
                                <span style="color: #000; font-size: 12px; font-style: normal; font-weight: 400; line-height: 150%">Commercial usage</span>
                                <span style="color: #000; font-size: 12px; font-style: normal; font-weight: 400; line-height: 150%"> Multiple end products </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-column gap-3 mt-3 align-items-start align-self-stretch">
                        <span>Payment Method</span>
                        <div class="flex justify-content-between">
                            <Button label="Visa/Mastercard" size="small" outlined />
                            <Button label="Visa/Mastercard" size="small" outlined />
                        </div>
                        <div class="flex align-items-center justify-content-between">
                            <div class="flex align-items-center">
                                <div id="rememberme1" class="p-checkbox p-component mr-2" data-pc-name="checkbox" data-pc-section="root">
                                    <div class="p-hidden-accessible" data-pc-section="hiddeninputwrapper"><input data-pc-section="hiddeninput" type="checkbox" /></div>
                                    <div class="p-checkbox-box" data-pc-section="input"></div>
                                </div>
                                <label for="rememberme1">I accept the Terms and Conditions.</label>
                            </div>
                        </div>
                        <div class="w-full">
                            <Button @click="visible = false" class="w-full" label="Buy Now"></Button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </Dialog>
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
                            <Button label="Buy Now" @click="visible = true" severity="info" class="flex w-full justify-content-center align-items-center" style="padding: 10.5px 17.5px; gap: 7px; border-radius: 48px; max-width: 200px"></Button>
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

    <div class="flex w-full justify-content-center">
        <div class="grid" style="max-width: 1062px">
            <div class="col-12 lg:col-4">
                <div class="flex h-full justify-content-center">
                    <div class="shadow-2 p-5 h-full flex flex-column surface-card" style="border-radius: 6px">
                        <div class="flex flex-column align-items-center justify-content-center gap-4 w-full">
                            <img src="../templates/assets/Features/Use_applications.svg" alt="" class="w-full border-round-sm" style="max-width: 298px; max-height: 242px; background-color: #eff3f8" />
                            <div class="flex flex-column w-full align-items-start gap-4" style="max-width: 298px">
                                <span class="align-self-stretch text-900 text-lg font-semibold line-height-3">Ready to Use Applications</span>
                                <span class="align-self-stretch text-sm font-normal line-height-3">Mail, File System, Tasks, Calendar, Blog and Chat are the sample applications to get started with ease.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 lg:col-4">
                <div class="flex h-full justify-content-center">
                    <div class="shadow-2 p-5 h-full flex flex-column surface-card" style="border-radius: 6px">
                        <div class="flex flex-column align-items-center justify-content-center gap-4 w-full">
                            <img src="../templates/assets/Features/E-commerce.svg" alt="" class="w-full border-round-sm" style="max-width: 298px; max-height: 242px; background-color: #eff3f8" />
                            <div class="flex flex-column w-full align-items-start gap-4" style="max-width: 298px">
                                <span class="align-self-stretch text-900 text-lg font-semibold line-height-3">E-Commerce Pages</span>
                                <span class="align-self-stretch text-sm font-normal line-height-3">Apollo offers E-commerce pages to kickstart your e-commerce project powered by PrimeBlocks.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 lg:col-4">
                <div class="flex h-full justify-content-center">
                    <div class="shadow-2 p-5 flex flex-column surface-card" style="border-radius: 6px">
                        <div class="flex flex-column align-items-center justify-content-center gap-4 w-full">
                            <img src="../templates/assets/Features/Pages.svg" alt="" class="w-full border-round-sm" style="max-width: 298px; max-height: 242px; background-color: #eff3f8" />
                            <div class="flex flex-column w-full align-items-start gap-4" style="max-width: 298px">
                                <span class="align-self-stretch text-900 text-lg font-semibold line-height-3">Ready to Use Pages</span>
                                <span class="align-self-stretch text-sm font-normal line-height-3">Landing, login, invoice, help, user management and error pages are provided as template pages to get started with building your app.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="flex flex-column justify-content-center align-items-center gap-2 w-full p-8" style="max-width: 1440px">
        <div class="flex w-full align-items-center gap-4 pb-6" style="max-width: 1062px">
            <div class="flex-1" style="height: 1px; background-color: #dfe7ef"></div>

            <img src="../templates/assets/Apollo_logo.svg" alt="" class="flex justify-content-center align-items-center flex-grow-0" style="padding: 10px 11.992px 14px 12px" />
            <div class="flex-1" style="height: 1px; background-color: #dfe7ef"></div>
        </div>
        <div class="flex flex-column p-5 w-full align-items-start gap-4 border-round-2xl bg-white" style="max-width: 788px; box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.08)">
            <div class="flex flex-column align-items-center align-self-stretch border-round-lg h-full" style="max-height: 221px">
                <img src="../templates/assets/Vuecli.svg" alt="" class="h-full flex-grow-0 align-self-stretch" style="max-height: 165px" />
            </div>
            <div class="flex flex-column align-items-start gap-4 align-self-stretch">
                <span class="align-self-stretch text-2xl font-bold line-height-4">Vue.js App with No Configuration</span>
                <span class="align-self-stretch text-lg font-normal line-height-3"
                    >Apollo is powered by Angular CLI to get started in no time following the best practices like service based component interaction modular design and strict mode support
                </span>
            </div>
        </div>
        <div class="flex w-full align-items-center gap-4 pt-6" style="max-width: 1062px">
            <div class="flex-1" style="height: 1px; background-color: #dfe7ef"></div>

            <img src="../templates/assets/Apollo_logo.svg" alt="" class="flex justify-content-center align-items-center flex-grow-0" style="padding: 10px 11.992px 14px 12px" />
            <div class="flex-1" style="height: 1px; background-color: #dfe7ef"></div>
        </div>
    </div>

    <div class="flex flex-column align-items-center justify-content-center gap-6 py-8">
        <FeatureMenu :items="items2" :dynamicStyle="{ height: '10.4rem' }" />
        <div class="flex w-full align-items-center gap-4" style="max-width: 1062px">
            <div class="flex-1" style="height: 1px; background-color: #dfe7ef"></div>

            <img src="../templates/assets/Apollo_logo.svg" alt="" class="flex justify-content-center align-items-center flex-grow-0" style="padding: 10px 11.992px 14px 12px" />
            <div class="flex-1" style="height: 1px; background-color: #dfe7ef"></div>
        </div>
    </div>
    <div class="flex justify-content-center md:p-8">
        <div class="grid w-full" style="max-width: 1062px">
            <div class="flex flex-column col-12 md:col-6 justify-content-start align-items-center md:align-items-end">
                <div class="card w-full" style="max-width: 410px; min-width: 300px">
                    <div class="flex flex-column align-items-center">
                        <img src="./assets/features-images/responsive.svg" class="w-full" alt="" />
                        <div>
                            <h5 class="mt-2">Fully Responsive</h5>
                            <div class="text-xs md:text-base font-normal line-height-3">Apollo is crafted to provide optimal viewing and interaction experience for a wide range of devices.</div>
                        </div>
                    </div>
                </div>
                <div class="card w-full" style="max-width: 410px; min-width: 300px">
                    <div class="flex flex-column align-items-center">
                        <img src="./assets/features-images/Support.svg" class="w-full" alt="" />
                        <div>
                            <h5 class="mt-2">Lifetime Support</h5>
                            <div class="text-xs md:text-base font-normal line-height-3">Apollo has a dedicated forum where lifetime support is delivered by engineers at PrimeTek in a timely manner.</div>
                        </div>
                    </div>
                </div>
                <div class="card w-full" style="max-width: 410px; min-width: 300px">
                    <div class="flex flex-column align-items-center">
                        <img src="./assets/features-images/Eslint.svg" class="w-full" alt="" />
                        <div>
                            <h5 class="mt-2">Top Notch Quality</h5>
                            <div class="text-xs md:text-base font-normal line-height-3">Superior standards with 100% compatibility for strict mode and linting tools.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-column col-12 md:col-6 md:mt-8 md:pt-4 md:align-items-start align-items-center">
                <div class="card w-full" style="max-width: 410px; min-width: 300px">
                    <div class="flex flex-column align-items-center">
                        <img src="./assets/features-images/Browser.svg" class="w-full" alt="" />
                        <div>
                            <h5 class="mt-2">Cross Browser Compatible</h5>
                            <div class="text-xs md:text-base font-normal line-height-3">First class support for Firefox, Safari, Chrome and Edge.</div>
                        </div>
                    </div>
                </div>
                <div class="card w-full" style="max-width: 410px; min-width: 300px">
                    <div class="flex flex-column align-items-center">
                        <img src="./assets/features-images/Design.svg" class="w-full" alt="" />
                        <div>
                            <h5 class="mt-2">Customizable Design</h5>
                            <div class="text-xs md:text-base font-normal line-height-3">Fully customizable with a mixture of Sass and CSS variables.</div>
                        </div>
                    </div>
                </div>
                <div class="card w-full" style="max-width: 410px; min-width: 300px">
                    <div class="flex flex-column align-items-center">
                        <img src="./assets/features-images/Mobile.svg" class="w-full" alt="" />
                        <div>
                            <h5 class="mt-2">Mobile Experience</h5>
                            <div class="text-xs md:text-base font-normal line-height-3">Touch optimized enhanced mobile experience with responsive design.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <span class="flex text-900 text-2xl md:text-6xl justify-content-center font-semibold w-full md:p-8">Related Layouts</span>
    <div class="flex w-full justify-content-center">
        <div class="grid" style="max-width: 1062px">
            <div class="col-12 lg:col-4">
                <div class="flex p-3 h-full justify-content-center">
                    <div class="p-3 h-full w-full flex flex-column justify-content-center surface-card bg-white" style="border-radius: 6px; max-width: 418px">
                        <img src="../templates/assets/layout-images/Atlantis.svg" class="border-round-lg" alt="" />
                    </div>
                </div>
            </div>
            <div class="col-12 lg:col-4">
                <div class="flex p-3 h-full justify-content-center">
                    <div class="p-3 h-full w-full flex flex-column justify-content-center surface-card bg-white" style="border-radius: 6px; max-width: 418px">
                        <img src="../templates/assets/layout-images/Avalon.svg" class="border-round-lg" alt="" />
                    </div>
                </div>
            </div>
            <div class="col-12 lg:col-4">
                <div class="flex p-3 h-full justify-content-center">
                    <div class="p-3 h-full w-full flex flex-column justify-content-center surface-card bg-white" style="border-radius: 6px; max-width: 418px">
                        <img src="../templates/assets/layout-images/Diamond.svg" class="border-round-lg" alt="" />
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
            visible: false,
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
</style>
