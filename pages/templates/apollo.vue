<template>
    <div class="flex flex-column justify-content-center align-items-between h-full relative overflow-hidden" style="max-height: 601px">
        <img src="../templates/assets/Hero.jpg" style="max-width: 1310px" class="overflow-hidden" />
        <div class="absolute w-full" style="max-width: 1310px">
            <div class="flex justify-content-between align-items-center" style="max-width: 1310px; padding-left: 7rem">
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
                    <div class="flex flex-column justify-content-center align-items-start" style="padding: 36px 28px; gap: 32px">
                        <img src="../templates/assets/Logo.svg" alt="1" />
                        <span style="color: #ffffff">Vue template with mode options, menu layouts, sample apps, pre-made pages, and 24 PrimeVue themes.</span>
                        <div class="flex flex-column justify-content-center align-items-start gap-3 align-self-stretch">
                            <div class="flex align-items-center gap-3 align-self-stretch">
                                <Button label="Live Demo" class="flex justify-content-center align-items-center flex-1 surface-900 border-900" style="padding: 10.5px 17.5px; gap: 7px; border-radius: 48px"></Button>
                                <Button label="Buy Now" severity="info" class="flex justify-content-center align-items-center flex-1" style="padding: 10.5px 17.5px; gap: 7px; border-radius: 48px"></Button>
                            </div>
                        </div>
                        <div class="flex align-items-center gap-3">
                            <div class="flex justify-content-center align-items-center gap-2">
                                <i class="pi pi-github" style="color: #ffffff" />
                                <a class="flex justify-content-center" style="color: #ffffff">Get Support</a>
                            </div>
                            <div class="flex justify-content-center align-items-center gap-2">
                                <i class="pi pi-book" style="color: #ffffff" />
                                <a class="flex justify-content-center" style="color: #ffffff">Read Docs</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="" style="height: 700px; width: 700px">
                    <img src="../templates/assets/Group_4.svg" alt="1" class="w-full h-full pt-7" />
                </div>
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
