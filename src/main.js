import { createApp } from 'vue'
import { StoryblokVue, apiPlugin } from '@storyblok/vue';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import "./assets/styles/app.scss";
// import VueRichTextRenderer from '@marvr/storyblok-rich-text-vue-renderer';
import App from './App.vue'
import Grid from "./components/storyblok/Grid.vue";
import Page from "./components/storyblok/Page.vue";
import Teaser from "./components/storyblok/Teaser.vue";
import Feature from "./components/storyblok/Feature.vue";
import Mixes from "./components/storyblok/Mixes.vue";
import Intro from "./components/storyblok/Intro.vue";
import Merch from "./components/storyblok/Merch.vue";
import Parties from "./components/storyblok/Parties.vue";
import Slider from "./components/storyblok/Slider.vue";
// import VueGlide from 'vue-glide-js';

import './assets/main.css'

const app = createApp(App)

app.component("Grid", Grid);
app.component("Page", Page);
app.component("Teaser", Teaser);
app.component("Feature", Feature);
app.component("Mixes", Mixes);
app.component("Intro", Intro);
app.component("Merch", Merch);
app.component("Parties", Parties);
app.component("Slider", Slider);

// app.use(VueGlide)
// app.use(VueRichTextRenderer);
app.use(StoryblokVue, {
    accessToken: 'udj2rJGCh2RhvKLYnA6xLAtt',
    bridge: process.env.NODE_ENV !== 'production', // optimizes by excluding the bridge on production
    use: [apiPlugin],
});

app.mount('#app')
