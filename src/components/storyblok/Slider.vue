<template>
  <div v-editable="blok">

    <section class="events" id="events">
      <div class="events--wrapper">
        <div class="events__text">
          <h2 class="events__text__title">
              <span class="events__text__title--span--am">
                MY LIFE
              </span>
            <br class="u-space-desktop">
            <span class="events__text__title--span--dj">
                parties
              </span>
            IS ONE BIG RHYME
          </h2>

        </div>


        <div class="events__text__cta">
          <a class="link-cta" href="https://www.facebook.com/djphazes/" target="_blank">My FB page </a>
        </div>
      </div>

      <div class="events__container">
        <div class="glider-contain glide">
          <div class="glide__track" data-glide-el="track">
            <div class="glide__slides">
              <div v-for="blok in blok.columns" :key="blok._uid" class="glide__slide">
                <StoryblokComponent :blok="blok" />
              </div>
            </div>

          </div>
          <div class="glide__arrows" data-glide-el="controls">
            <button data-glide-dir="<" role="button" aria-label="Previous"
                    class="glider-prev glide__arrow glide__arrow--left">
              <img src="../../assets/img/arrow-right.svg" alt="Previous">
            </button>
            <button role="button" aria-label="Next" class="glider-next glide__arrow glide__arrow&#45;&#45;right"
                    data-glide-dir=">">
              <img src="../../assets/img/arrow-right.svg" alt="Next">
            </button>
          </div>
        </div>

      </div>
    </section>


    <!--        <div class="glide">-->
    <!--          <div class="glide__track" data-glide-el="track">-->
    <!--            <ul class="glide__slides">-->
    <!--              <li class="glide__slide">0</li>-->
    <!--              <li class="glide__slide">1</li>-->
    <!--              <li class="glide__slide">2</li>-->
    <!--            </ul>-->
    <!--          </div>-->
    <!--          <div class="glide__arrows" data-glide-el="controls">-->
    <!--            <button class="glide__arrow glide__arrow&#45;&#45;left" data-glide-dir="<">prev</button>-->
    <!--            <button class="glide__arrow glide__arrow&#45;&#45;right" data-glide-dir=">">next</button>-->
    <!--          </div>-->
    <!--        </div>-->

  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import Glide from '@glidejs/glide'

defineProps({blok: Object})

onMounted(() => {
  console.log('myheader mounted');
  new Glide('.glide').mount()
})

</script>

<style>
@import '../../../node_modules/@glidejs/glide/dist/css/glide.core.min.css';
</style>