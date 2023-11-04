<template>
    <div class="flex flex-column justify-content-center">
        <div class="relative flex lg:justify-content-between justify-content-center align-items-center md:pl-8 h-28rem" style="background-image: url('/_nuxt/pages/templates/assets/Hero.jpg'); background-repeat: no-repeat">
            <div
                class="flex w-20rem md:w-full w sm:justify-content-center sm:align-items-center flex-column justify-content-between align-items-start gap-4 border-round-3xl"
                style="
                    border: 1px solid rgba(255, 255, 255, 0.24);
                    background: linear-gradient(180deg, rgba(170, 140, 255, 0) 0%, rgba(170, 140, 255, 0.8) 100%), rgba(255, 255, 255, 0.1);
                    box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset, 0px 48px 80px 0px rgba(0, 0, 0, 0.08), 0px -5px 13px -2px rgba(255, 255, 255, 0.55) inset;
                    backdrop-filter: blur(2px);
                    max-width: 464px;
                    min-height: 265px;
                    max-height: 300px;
                "
            >
                <div class="flex flex-column justify-content-center align-items-start gap-5 px-4 py-5">
                    <img src="../templates/assets/Logo.svg" alt="1" />
                    <span class="text-white">Vue template with mode options, menu layouts, sample apps, pre-made pages, and 24 PrimeVue themes.</span>
                    <div class="flex flex-column justify-content-center align-items-start gap-3 align-self-stretch">
                        <div class="flex align-items-center gap-3 align-self-stretch">
                            <Button label="Live Demo" class="flex justify-content-center align-items-center flex-1 surface-900 border-900" style="padding: 10.5px 17.5px; gap: 7px; border-radius: 48px"></Button>
                            <Button label="Buy Now" severity="info" class="flex justify-content-center align-items-center flex-1" style="padding: 10.5px 17.5px; gap: 7px; border-radius: 48px"></Button>
                        </div>
                    </div>
                    <div class="flex align-items-center gap-3">
                        <div class="flex justify-content-center align-items-center gap-2">
                            <i class="pi pi-github text-white" />
                            <a class="flex justify-content-center text-white">Get Support</a>
                        </div>
                        <div class="flex justify-content-center align-items-center gap-2">
                            <i class="pi pi-book text-white" />
                            <a class="flex justify-content-center text-white">Read Docs</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden lg:block" style="">
                <img src="../templates/assets/Group_4.png" alt="1" class="w-full h-full pt-4 pr-6" style="max-height: 390px; max-width: 643px; min-width: 462px; min-height: 325px" />
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
    <div class="flex flex-column align-items-center justify-content-center gap-6 p-8">
        <span class="flex flex-column font-semibold text-center text-2xl md:text-6xl text-900 w-full" style="line-height: 56px; max-width: 714px"><span>Features that the</span> Apollo template gives you </span>
        <FeatureMenu :items="items" />
    </div>
</template>
<!-- <div class="flex w-full h-full p-5 justify-content-center align-items-center gap-5 border-round-2xl bg-white" style="max-width: 1062px; max-height: 534px">
            <ul class="flex flex-column align-items-center gap-2 flex-1 h-full">
                <li class="flex w-full h-8rem p-3 align-items-start gap-4 border-round-xl" style="max-width: 476px; background-color: #f5f5f5">
                    <img src="../templates/assets/numbers/HoverOne.png" alt="" />
                    <div class="flex flex-column align-items-start gap-1 flex-1 h-full" style="max-height: 70px">
                        <div class="text-xl text-900 align-items-stretch font-semibold line-height-3">Light / Dark / Dim Modes</div>
                        <div class="text-base font-normal line-height-3">Apollo has 3 display modes to choose from; Light, Dim and Dark.</div>
                    </div>
                </li>
                <li class="flex w-full h-8rem p-3 align-items-start gap-4 border-round-xl" style="max-width: 476px">
                    <img src="../templates/assets/numbers/two.png" alt="" />
                    <div class="flex flex-column align-items-start gap-1 flex-1 h-full" style="max-height: 70px">
                        <div class="text-xl text-900 align-items-stretch font-semibold line-height-3">Light / Dark / Dim Modes</div>
                        <div class="text-base font-normal line-height-3">Apollo has 3 display modes to choose from; Light, Dim and Dark.</div>
                    </div>
                </li>
                <li class="flex w-full h-8rem p-3 align-items-start gap-4 border-round-xl" style="max-width: 476px">
                    <img src="../templates/assets/numbers/three.png" alt="" />
                    <div class="flex flex-column align-items-start gap-1 flex-1 h-full" style="max-height: 70px">
                        <div class="text-xl text-900 align-items-stretch font-semibold line-height-3">Light / Dark / Dim Modes</div>
                        <div class="text-base font-normal line-height-3">Apollo has 3 display modes to choose from; Light, Dim and Dark.</div>
                    </div>
                </li>
                <li class="flex w-full h-8rem p-3 align-items-start gap-4 border-round-xl" style="max-width: 476px">
                    <img src="../templates/assets/numbers/four.png" alt="" />
                    <div class="flex flex-column align-items-start gap-1 flex-1 h-full" style="max-height: 70px">
                        <div class="text-xl text-900 align-items-stretch font-semibold line-height-3">Light / Dark / Dim Modes</div>
                        <div class="text-base font-normal line-height-3">Apollo has 3 display modes to choose from; Light, Dim and Dark.</div>
                    </div>
                </li>
            </ul>
            <div>
                <img src="../templates/assets/Screen_Card.png" alt="" />
            </div>
        </div> -->
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
                    image: 'Screen_Card.png'
                },
                {
                    id: 'two',
                    title: 'Light / Dark / Dim Modes',
                    description: 'Apollo has 3 display modes to choose from; Light, Dim and Dark.',
                    image: 'Screen_Card.png'
                },
                {
                    id: 'three',
                    title: 'Light / Dark / Dim Modes',
                    description: 'Apollo has 3 display modes to choose from; Light, Dim and Dark.',
                    image: 'Screen_Card.png'
                },
                {
                    id: 'four',
                    title: 'Light / Dark / Dim Modes',
                    description: 'Apollo has 3 display modes to choose from; Light, Dim and Dark.',
                    image: 'Screen_Card.png'
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
