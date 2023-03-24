<script setup lang="ts">
const props = defineProps<{
    image: string,
    author: string,
    title: string,
    text: string,
}>()
</script>

<template>
    <v-col cols="3" class="pa-10 pr-0">
        <v-img :src="image"></v-img>
        <div class="pa-5 pt-10 bg-white">
            <p class="text-grayishBlue text-caption mb-2">{{ author }}</p>
            <h5 class="text-darkBlue font-weight-regular text-h6 mb-2">{{ title }}</h5>
            <p class="text-grayishBlue">{{ text }}</p>
        </div>
    </v-col>
</template>