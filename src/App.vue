<template>
  <v-app>
    <v-app-bar flat color="text-lightGrayishBlue" class="py-3">
      <NavBar />
    </v-app-bar>
    <v-main>
      <MainContent />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import MainContent from '@/components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue';
</script>
