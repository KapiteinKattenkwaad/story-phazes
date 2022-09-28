<script setup>
import { useStoryblok } from '@storyblok/vue';
import BookMe from "@/components/BookMe.vue";
import Header from "@/components/Header.vue";
import FirstSection from "@/components/Main/FirstSection.vue";
import TurnOn from "@/components/Main/TurnOn.vue";

const story = await useStoryblok('home', { version: 'draft' });
</script>

<template>

  <div>
    <BookMe />
    <Header />
    <FirstSection />
    <TurnOn />
  <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>