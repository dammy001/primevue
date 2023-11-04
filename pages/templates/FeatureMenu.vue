<template>
    <div class="flex w-full h-full p-5 justify-content-center align-items-center gap-5 border-round-2xl bg-white" style="max-width: 1062px; max-height: 534px">
        <ul class="flex flex-column align-items-center gap-2 flex-1 h-full">
            <li
                v-for="item in items"
                :key="item.id"
                class="flex w-full h-8rem p-3 align-items-start gap-4 border-round-xl cursor-pointer"
                style="max-width: 476px"
                :style="[activeItem.id === item.id ? { 'background-color': '#f5f5f5' } : {}]"
                @click="onClick(item)"
            >
                <img :src="`/_nuxt/pages/templates/assets/numbers/${activeItem.id === item.id ? item.id + '-fill' : item.id}.svg`" :alt="item.id" />
                <div class="flex flex-column align-items-start gap-1 flex-1 h-full" style="max-height: 70px">
                    <div class="text-xl text-900 align-items-stretch font-semibold line-height-3">{{ item.title }}</div>
                    <div class="text-base font-normal line-height-3">{{ item.description }}</div>
                </div>
            </li>
        </ul>
        <div>
            <img :src="`/_nuxt/pages/templates/assets/${activeItem.image}`" :alt="activeItem.id" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            activeItem: this.items[0]
        };
    },
    methods: {
        onClick(item) {
            this.activeItem = item;
        }
    }
};
</script>

<style></style>
