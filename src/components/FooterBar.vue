<script setup lang="ts">
import MainButton from './MainButton.vue';

window.onload = () => {
    const object = <HTMLObjectElement>document.getElementsByTagName('object')[0]
    const white = object.contentDocument?.getElementsByClassName('white')[0]
    white?.setAttribute('fill', 'white')
}
</script>

<template>
    <v-container>
        <v-row no-gutters class="mx-" style="background-color: #2D314D;">
            <v-col cols="2" class="ma-10" style="width: fit-content;">
                <object data="/assets/logo.svg" type="image/svg+xml" class="text-white mb-14 w-100"></object>
                <div class="d-flex mb-5">
                    <v-img src="/assets/icon-facebook.svg" class="mr-3"></v-img>
                    <v-img src="/assets/icon-youtube.svg" class="mr-3"></v-img>
                    <v-img src="/assets/icon-twitter.svg" class="mr-3"></v-img>
                    <v-img src="/assets/icon-pinterest.svg" class="mr-3"></v-img>
                    <v-img src="/assets/icon-instagram.svg" class="mr-5"></v-img>
                </div>
            </v-col>
            <v-col cols="1" class="ma-10">
                <p class="text-lightGrayishBlue mb-5">About Us</p>
                <p class="text-lightGrayishBlue mb-5">Contact</p>
                <p class="text-lightGrayishBlue mb-5">Blog</p>
            </v-col>
            <v-col cols="2" class="ma-10">
                <p class="text-lightGrayishBlue mb-5">Careers</p>
                <p class="text-lightGrayishBlue mb-5">Support</p>
                <p class="text-lightGrayishBlue mb-5">Privacy Policy</p>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="3" class="ma-10">
                <MainButton text="Request Invite" class="float-right" />
                <p class="text-grayishBlue mt-16 float-right">© Easybank. All Rights Reserved</p>
            </v-col>
        </v-row>
    </v-container>
</template>