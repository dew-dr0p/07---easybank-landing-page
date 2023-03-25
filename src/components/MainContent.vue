<script setup lang="ts">
import MainArticles from './MainArticles.vue';
import MainBenefits from './MainBenefits.vue';
import MainButton from './MainButton.vue';

const benefits = [
    {
        image: '/assets/icon-online.svg',
        title: 'Online Banking',
        text: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
    },
    {
        image: '/assets/icon-budgeting.svg',
        title: 'Simple Budgeting',
        text: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
    },
    {
        image: '/assets/icon-onboarding.svg',
        title: 'Fast Onboarding',
        text: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
    },
    {
        image: '/assets/icon-api.svg',
        title: 'Open API',
        text: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
    }
]

const articles = [
    {
        image: '/assets/image-currency.jpg',
        author: 'By Claire Robinson',
        title: 'Receive money in any currency with no fees',
        text: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'
    },
    {
        image: '/assets/image-restaurant.jpg',
        author: 'By Wilson Hutton',
        title: 'Treat yourself without worrying about money',
        text: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'
    },
    {
        image: '/assets/image-plane.jpg',
        author: 'By Wilson Hutton',
        title: 'Take your Easybank card wherever you go',
        text: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'
    },
    {
        image: '/assets/image-confetti.jpg',
        author: 'By Claire Robinson',
        title: 'Our invite-only Beta accounts are now live!',
        text: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...'
    }
]
</script>

<template>
    <v-container>
        <v-row style="height: calc(80vh - 64px); background-color: #FAFAFA;">
            <v-col cols="5" class="pa-10" style="margin-top: 10rem;">
                <h1 class="text-darkBlue font-weight-regular text-h2 mb-10">Next generation digital banking</h1>
                <p class="text-grayishBlue mb-10">Take your financial life online. Your Easybank account will be a one-stop-shop 
                for spending, saving, budgeting, investing, and much more.</p>
                <MainButton text="Request Invite" />
            </v-col>
            <v-col></v-col>
            <v-img src="/assets/bg-intro-desktop.svg" absolute cover class="float"></v-img>
            <v-img src="/assets/image-mockups.png" absolute class="float" style="max-height: 100vh;"></v-img>
        </v-row>
        <v-row style="background-color: #F3F4F6;">
                <v-col cols="6" class="pa-10">
                    <h3 class="text-darkBlue font-weight-regular text-h3 mt-16 mb-10">Why choose Easybank?</h3>
                    <p class="text-grayishBlue">We leverage Open Banking to turn your bank account into your financial hub. Control 
                    your finances like never before.</p>
                </v-col>
        </v-row>
        <v-row style="background-color: #F3F4F6;">
            <MainBenefits v-for="{image, title, text} in benefits" :image="image" :title="title" :text="text" />
        </v-row>
        <v-row style="background-color: #FAFAFA;">
            <h3 class="text-darkBlue font-weight-regular text-h3 mt-16 pa-10 pb-5">Latest Articles</h3>
        </v-row>
        <v-row style="background-color: #FAFAFA;">
            <MainArticles v-for="{image, author, title, text} in articles" :image="image" :author="author" :title="title" :text="text" />
        </v-row>
    </v-container>
</template>

<style scoped>
.float {
    position: absolute;
    right: -20%;
    top: 0;
    left: 43.33%;
    max-height: 80vh;
}
</style>