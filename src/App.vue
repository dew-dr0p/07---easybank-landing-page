<template>
  <v-app>
    <v-app-bar flat color="text-lightGrayishBlue" class="py-3" style="width: 100vw;">
      <NavBar />
    </v-app-bar>
    <v-main>
      <MainContent />
    </v-main>
    <v-footer>
      <FooterBar />
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import MainContent from '@/components/MainContent.vue'
import NavBar from '@/components/NavBar.vue';
import FooterBar from './components/FooterBar.vue';
</script>

<style>
#app {
  overflow: hidden;
}
main.v-main {
  background-color: #FAFAFA;
}
footer.v-footer {
  padding: 0;
  background-color: #2D314D;
}
.v-container {
  padding: 0;
}
</style>