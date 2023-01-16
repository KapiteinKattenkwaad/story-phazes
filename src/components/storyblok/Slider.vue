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

        <div class="glider-contain">
          <div class="glider">
            <div v-for="blok in blok.columns" :key="blok._uid">
              <StoryblokComponent :blok="blok"/>
            </div>
            <div>
            </div>
          </div>

          <button role="button" aria-label="Previous" class="glider-prev">
            <img src="@/assets/img/arrow-right.svg" alt="Previous">
          </button>
          <button role="button" aria-label="Next" class="glider-next">
            <img src="@/assets/img/arrow-right.svg" alt="Next">
          </button>

        </div>
      </div>
    </section>

    <Contact/>

  </div>
</template>

<script setup>
import {onMounted} from 'vue';
import Contact from "@/components/Main/Contact.vue";
import Glider from 'glider-js'


defineProps({blok: Object})

onMounted(() => {

  setTimeout(() => {
    const carousel = document.querySelector('.glider');
    if (carousel) {
      new Glider(carousel, {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        draggable: true,
        autoheight: true,
        dots: '.dots',
        rewind: true,
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        },
        responsive: [{
          // screens greater than >= 775px
          breakpoint: 992,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 'auto',
            slidesToScroll: 1,
            itemWidth: 150,
            duration: .3,
            draggable: true,
            autoheight: true,
            dragDistance: true
          }
        }, {
          // screens greater than >= 1024px
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            itemWidth: 150,
            draggable: true,
            duration: 0.25
          }
        }, {
          // screens greater than >= 1024px
          breakpoint: 1500,
          settings: {
            slidesToShow: 'auto',
            slidesToScroll: 1,
            itemWidth: 420,
            draggable: true,
            duration: 0.4
          }
        }]
      });
    } else {
      console.log("Carousel element not found in DOM")
    }
  }, 1000);

})

</script>

<!--<style>-->
<!--@import '../../../node_modules/@glidejs/glide/dist/css/glide.core.min.css';-->
<!--</style>-->