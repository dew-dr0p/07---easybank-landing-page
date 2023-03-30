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
        <v-row no-gutters style="background-color: #2D314D;">
            <v-col cols="12" md="2" class="ma-md-10 pa-md-0 pa-10 px-16" style="width: fit-content;">
                <object data="/assets/logo.svg" type="image/svg+xml" class="text-white mb-14 ml-10 ml-md-0 w-100"></object>
                <div class="d-flex mb-5">
                    <v-img src="/assets/icon-facebook.svg" class="mr-3"></v-img>
                    <v-img src="/assets/icon-youtube.svg" class="mr-3"></v-img>
                    <v-img src="/assets/icon-twitter.svg" class="mr-3"></v-img>
                    <v-img src="/assets/icon-pinterest.svg" class="mr-3"></v-img>
                    <v-img src="/assets/icon-instagram.svg" class="mr-md-5"></v-img>
                </div>
            </v-col>
            <v-col cols="12" md="1" class="ma-md-10">
                <p class="text-lightGrayishBlue mb-5 text-center text-md-left">About Us</p>
                <p class="text-lightGrayishBlue mb-5 text-center text-md-left">Contact</p>
                <p class="text-lightGrayishBlue mb-5 text-center text-md-left">Blog</p>
            </v-col>
            <v-col cols="12" md="2" class="ma-md-10">
                <p class="text-lightGrayishBlue mb-5 text-center text-md-left">Careers</p>
                <p class="text-lightGrayishBlue mb-5 text-center text-md-left">Support</p>
                <p class="text-lightGrayishBlue mb-5 text-center text-md-left">Privacy Policy</p>
            </v-col>
            <v-spacer class="d-md-none d-lg-block"></v-spacer>
            <v-col cols="12" md="3" class="ma-md-10 mr-md-0 d-flex flex-column align-md-center">
                <MainButton text="Request Invite" class="float-right mb-5" />
                <p class="text-grayishBlue mt-md-16 text-right text-center text-md-left">© Easybank. All Rights Reserved</p>
            </v-col>
        </v-row>
    </v-container>
</template>