<script setup lang="ts">
const props = defineProps<{
    image: string,
    title: string,
    text: string
}>()
</script>

<template>
    <v-col cols="3" class="pa-10">
        <v-img :src="image" width="70" class="mb-10"></v-img>
        <h5 class="text-darkBlue font-weight-regular text-h5 mb-5">{{ title }}</h5>
        <p class="text-grayishBlue mb-10">{{ text }}</p>
    </v-col>
</template>