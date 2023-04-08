<template>
  <v-app>
    <v-app-bar flat color="text-lightGrayishBlue" class="py-3" style="width: 100vw;">
      <NavBar :drawer="change" />
    </v-app-bar>
    <v-navigation-drawer elevation="24" temporary location="top" v-model="drawer" class="text-center text-h6 ma-8 rounded-lg" width="270" style="width: calc(100% - 64px); top: 88px;">
      <v-list nav>
        <v-list-item title="Home" value="home"></v-list-item>
        <v-list-item title="About" value="about"></v-list-item>
        <v-list-item title="Contact" value="contact"></v-list-item>
        <v-list-item title="Blog" value="blog"></v-list-item>
        <v-list-item title="Careers" value="careers"></v-list-item>
      </v-list>
    </v-navigation-drawer>
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
import { ref } from 'vue';

const drawer = ref(true)

const change = () => {
  drawer.value = !drawer.value
}
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
.v-list-item--nav .v-list-item-title {
  font-size: 1.25rem !important;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.0125em !important;
  font-family: "Roboto", sans-serif !important;
  text-transform: none !important;
}
</style>