<template>
    <div class="flex flex-wrap-reverse w-full h-auto p-5 justify-content-center align-items-center gap-5 border-round-2xl bg-white" style="max-width: 1062px; min-width: 351px">
        <ul class="flex flex-column align-items-center pl-0 gap-2 flex-1 h-full">
            <li
                v-for="item in items"
                :key="item.id"
                class="flex w-full h-8rem p-3 align-items-start gap-4 border-round-xl cursor-pointer"
                :style="[activeItem.id === item.id ? { 'background-color': '#f5f5f5' } : {}]"
                style="min-width: 309px"
                @click="onClick(item)"
            >
                <img :src="`/_nuxt/pages/templates/assets/numbers/${activeItem.id === item.id ? item.id + '-fill' : item.id}.svg`" :alt="item.id" />
                <div class="flex flex-column align-items-start gap-1 flex-1 h-full" style="max-height: 70px">
                    <div class="text-lg text-900 align-items-stretch font-semibold line-height-3">{{ item.title }}</div>
                    <div class="text-sm font-normal line-height-3">{{ item.description }}</div>
                </div>
            </li>
        </ul>
        <div v-if="activeItem.isGalleria">
            <Galleria :value="activeItem.image" :numVisible="5" :containerStyle="galleriaStyle" :circular="true" :autoPlay="true" :showThumbnails="false" :transitionInterval="1000">
                <!-- Transition interval set to 1 second -->
                <template #item="slotProps">
                    <img :src="slotProps.item" :alt="slotProps.item.alt" style="display: block; width: 100%" />
                </template>
            </Galleria>
        </div>
        <div v-else>
            <img :src="`/_nuxt/pages/templates/assets/features/${activeItem.image}`" style="display: block; width: 100%" :alt="activeItem.id" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => []
        },
        galleriaStyle: {
            type: String,
            default: `
                  display: flex;
                  max-width:480px;
                  height: 100%;
                  padding: 62px 36px 63px 37px;
                  justify-content: center;
                  align-items: center;
                  align-self: stretch;
                  border-radius: 12px;
                  background:  #EFF3F8;
                  `
        }
    },
    data() {
        return {
            activeItem: this.items[0],
            autoplayInterval: null
        };
    },
    mounted() {
        this.autoplayInterval = setInterval(() => {
            const currentIndex = this.items.findIndex((item) => item.id === this.activeItem.id);
            const nextIndex = (currentIndex + 1) % this.items.length;

            this.activeItem = this.items[nextIndex];
        }, 2000);
    },
    beforeUnmount() {
        clearInterval(this.autoplayInterval);
    },
    methods: {
        onClick(item) {
            clearInterval(this.autoplayInterval);
            this.activeItem = item;
        }
    }
};
</script>

<style></style>
