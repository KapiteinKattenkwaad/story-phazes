<script setup>
import {onMounted} from 'vue';
import {useStoryblok} from '@storyblok/vue';
import BookMe from "@/components/BookMe.vue";
import Header from "@/components/Header.vue";
import FirstSection from "@/components/Main/FirstSection.vue";
import TurnOn from "@/components/Main/TurnOn.vue";
import Footer from "@/components/Main/Footer.vue";

const story = await useStoryblok('home', {version: 'draft'});

onMounted(() => {
  setTimeout(() => {
    const videoDesktop = document.querySelector('.video-intro__desktop')
    const videoMobile = document.querySelector('.video-intro__mobile')

    videoDesktop.style.display = 'none'
    videoMobile.style.display = 'none'

  }, 4900)
})



</script>

<template>

  <div>
    <img class="video-intro video-intro__mobile" src="@/assets/img/video/phazes-mobile.gif" rel="preload"  />
    <img class="video-intro video-intro__desktop" src="@/assets/img/video/phazes-gif.gif" rel="preload" />

    <BookMe/>
    <Header/>
    <FirstSection/>
    <TurnOn/>
    <StoryblokComponent v-if="story" :blok="story.content"/>
    <Footer/>
  </div>
</template>
