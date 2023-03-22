<template>
      <v-spacer></v-spacer>
      <v-app-bar-title>
        <v-img src="/assets/logo.svg" width="200"></v-img>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn class="text-grayishBlue text-capitalize">Home</v-btn>
      <v-btn class="text-grayishBlue text-capitalize">About</v-btn>
      <v-btn class="text-grayishBlue text-capitalize">Contact</v-btn>
      <v-btn class="text-grayishBlue text-capitalize">Blog</v-btn>
      <v-btn class="text-grayishBlue text-capitalize">Careers</v-btn>
      <v-spacer></v-spacer>
      <MainButton text="Request Invite" />
      <v-spacer></v-spacer>
</template>

<script setup lang="ts">
import MainButton from '@/components/MainButton.vue';
</script>