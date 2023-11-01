<template>
    <div class="flex flex-column justify-content-center relative overflow-hidden">
        <img src="../templates/assets/Hero.jpg" class="overflow-hidden w-full" />
        <div class="absolute w-full pl-8">
            <div class="flex justify-content-between align-items-center" style="max-width: 1310px">
                <div
                    class="flex flex-column justify-content-center align-items-start gap-4 border-round-3xl"
                    style="
                        border: 1px solid rgba(255, 255, 255, 0.24);
                        background: linear-gradient(180deg, rgba(170, 140, 255, 0) 0%, rgba(170, 140, 255, 0.8) 100%), rgba(255, 255, 255, 0.1);
                        box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset, 0px 48px 80px 0px rgba(0, 0, 0, 0.08), 0px -5px 13px -2px rgba(255, 255, 255, 0.55) inset;
                        backdrop-filter: blur(2px);
                        max-width: 464px;
                        max-height: 265px;
                    "
                >
                    <div class="flex flex-column justify-content-center align-items-start gap-5" style="padding: 36px 28px">
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
                <div style="height: 700px; width: 700px">
                    <img src="../templates/assets/Group_4.svg" alt="1" class="w-full h-full pt-7" />
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-column align-items-center gap-6" style="padding: 80px 120px">
        <div class="flex flex-column align-items-center" style="gap: 20px; width: 710px">
            <span class="flex flex-column align-self-stretch text-900 text-center text-6xl font-semibold" style="line-height: 56px; width: 710px"> <span>Integration with </span>Existing Vite Applications </span>
            <span class="flex text-center text-base font-normal" style="line-height: 21px; width: 710px"
                >Only the folders that are related to the layout needs to move in to your project. We‘ve already created a short tutorial with details for Sakai Vue. The both templates have the same implementation.</span
            >
        </div>
        <div class="border-round-2xl" style="max-width: 930px; max-height: 596.25px; background-color: #e0e0f7; backdrop-filter: blur(2px)">
            <div class="video relative">
                <img src="../templates/assets/Dashboard.svg" class="flex align-items-start w-full h-full" style="object-fit: cover; filter: blur(2px)" alt="" />

                <img src="../templates/assets/PLay.svg" class="absolute top-50 right-50 cursor-pointer w-full h-full" style="margin-right: -5rem; margin-top: -5rem; height: 10rem; width: 10rem" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
a {
    text-decoration: underline;
}
</style>
