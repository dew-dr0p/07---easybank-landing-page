<script setup lang="ts">
const props = defineProps<{
    image: string,
    author: string,
    title: string,
    text: string,
}>()
</script>

<template>
    <v-col class="pa-10 pr-5 pl-5 mb-16" style="min-width: 15rem;">
        <v-img :src="image" cover height="175"></v-img>
        <div class="pa-7 pt-10 bg-white">
            <p class="text-grayishBlue text-caption mb-2">{{ author }}</p>
            <h5 class="text-darkBlue font-weight-regular text-h6 mb-2">{{ title }}</h5>
            <p class="text-grayishBlue">{{ text }}</p>
        </div>
    </v-col>
</template>