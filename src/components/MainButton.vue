<template>
      <v-btn rounded="pill" size="large" class="px-10 text-capitalize">{{ text }}</v-btn>
</template>

<script setup lang="ts">
const props = defineProps<{
    text: string
}>()
</script>

<style scoped>
button {
  background: linear-gradient(90deg, #31D35C, #2BB7DA);
  color: white;
}
</style>