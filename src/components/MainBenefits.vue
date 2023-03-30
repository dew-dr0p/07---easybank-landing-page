<script setup lang="ts">
const props = defineProps<{
    image: string,
    title: string,
    text: string
}>()
</script>

<template>
    <v-col class="pa-10 d-flex flex-column align-center align-lg-start" style="min-width: 15rem;">
        <v-img :src="image" width="70" class="mb-10"></v-img>
        <h5 class="text-darkBlue font-weight-regular text-h5 mb-5 text-center text-lg-left">{{ title }}</h5>
        <p class="text-grayishBlue mb-10 text-center text-lg-left">{{ text }}</p>
    </v-col>
</template>