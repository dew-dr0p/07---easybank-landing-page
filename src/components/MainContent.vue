<script setup lang="ts">
import MainButton from './MainButton.vue';
</script>

<template>
    <v-container>
        <v-row>
            <v-col cols="5" class="ma-auto pa-10">
                <h1 class="text-darkBlue font-weight-regular text-h2 mb-10">Next generation digital banking</h1>
                <p class="text-grayishBlue mb-10">Take your financial life online. Your Easybank account will be a one-stop-shop 
                for spending, saving, budgeting, investing, and much more.</p>
                <MainButton text="Request Invite" />
            </v-col>
            <v-img src="/assets/bg-intro-desktop.svg" absolute class="float"></v-img>
        </v-row>
    </v-container>
</template>

<style scoped>

</style>