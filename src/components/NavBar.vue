<template>
      <!-- <v-spacer class="d-none d-md-block"></v-spacer>
      <v-app-bar-title>
        <v-img src="/assets/logo.svg" width="200"></v-img>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <div class="d-none d-md-block">
        <v-btn class="text-grayishBlue text-capitalize">Home</v-btn>
        <v-btn class="text-grayishBlue text-capitalize">About</v-btn>
        <v-btn class="text-grayishBlue text-capitalize">Contact</v-btn>
        <v-btn class="text-grayishBlue text-capitalize">Blog</v-btn>
        <v-btn class="text-grayishBlue text-capitalize">Careers</v-btn>
      </div>
      <v-spacer></v-spacer>
      <MainButton text="Request Invite" class="d-none d-md-block" />
      <v-spacer></v-spacer> -->
      <v-app-bar-nav-icon @click.stop="(drawer = !drawer)" class="d-md-none"></v-app-bar-nav-icon>
      <v-navigation-drawer absolute disable-resize-watcher elevation="2" rounded="3" temporary v-model="drawer" class="bg-darkBlue">
        <v-list nav>
          <v-list-item><v-btn class="text-grayishBlue text-capitalize">Home</v-btn></v-list-item>
          <v-list-item><v-btn class="text-grayishBlue text-capitalize">About</v-btn></v-list-item>
          <v-list-item><v-btn class="text-grayishBlue text-capitalize">Contact</v-btn></v-list-item>
          <v-list-item><v-btn class="text-grayishBlue text-capitalize">Blog</v-btn></v-list-item>
          <v-list-item><v-btn class="text-grayishBlue text-capitalize">Careers</v-btn></v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script setup lang="ts">
import MainButton from '@/components/MainButton.vue';

const drawer = false
</script>