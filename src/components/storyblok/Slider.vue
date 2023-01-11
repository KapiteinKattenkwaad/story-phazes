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
        <div class="glider">

          <div>
            <div class="glider__card">
              <div class="glider__card__img">
                <img src="./assets/img/events/BarDenPhazes-min.png" alt="event one">
              </div>
              <p class="glider__card__name">
                Bar Den opening and closing night
                <span class="glider__card__date">
                      7 dec 2019 - 4 jan 2020
                    </span>
              </p>
              <p class="glider__card__text">
                I was honoured to rock the decks on both the opening and closing night, sharing the
                line-up with Faisal and Hush Hefner.
              </p>

            </div>
          </div>



          <div class="glider-contain">
            <div class="glide__track" data-glide-el="track">
              <div class="glide__slides">
                <div v-for="blok in blok.columns" :key="blok._uid" class="glide__slide">
                  <StoryblokComponent :blok="blok"/>
                </div>
              </div>

            </div>
            btns
            <button role="button" aria-label="Previous" class="glider-prev">
              <img src="@/assets/img/arrow-right.svg" alt="Previous">
            </button>
            <button role="button" aria-label="Next" class="glider-next">
              <img src="@/assets/img/arrow-right.svg" alt="Next">
            </button>

<!--            <div class="glide__arrows" data-glide-el="controls">-->
<!--              <button data-glide-dir="<" role="button" aria-label="Previous"-->
<!--                      class="glider-prev glide__arrow glide__arrow&#45;&#45;left">-->
<!--                <img src="@/assets/img/arrow-right.svg" alt="Previous">-->
<!--              </button>-->
<!--              <button role="button" aria-label="Next" class="glider-next glide__arrow glide__arrow&#45;&#45;right"-->
<!--                      data-glide-dir=">">-->
<!--                <img src="@/assets/img/arrow-right.svg" alt="Next">-->
<!--              </button>-->
<!--            </div>-->
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

    <Contact/>


  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import Glide, {Controls, Breakpoints} from '@glidejs/glide/dist/glide.modular.esm'
import Contact from "@/components/Main/Contact.vue";
import Glider from 'glider-js'


defineProps({blok: Object})

onMounted(() => {

  new Glider('.glider', {
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

  const options = {
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
  }
  // new Glide('.glide', {
  //   startAt: 0,
  //   perView: 3,
  //   infinite: true,
  //   draggable: true,
  //   autoheight: true,
  //   dots: '.dots',
  //   rewind: true,
  //   arrows: {
  //     prev: '.glider-prev',
  //     next: '.glider-next'
  //   },
  //   responsive: [{
  //     // screens greater than >= 775px
  //     breakpoint: 992,
  //     settings: {
  //       // Set to `auto` and provide item width to adjust to viewport
  //       slidesToShow: 'auto',
  //       slidesToScroll: 1,
  //       perView: 1,
  //       itemWidth: 150,
  //       duration: .3,
  //       draggable: true,
  //       autoheight: true,
  //       dragDistance: true
  //     }
  //   }, {
  //     // screens greater than >= 1024px
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 2,
  //       perView: 2,
  //       slidesToScroll: 1,
  //       itemWidth: 150,
  //       draggable: true,
  //       duration: 0.25
  //     }
  //   }, {
  //     // screens greater than >= 1024px
  //     breakpoint: 1500,
  //     settings: {
  //       perView: 3,
  //       slidesToShow: 'auto',
  //       slidesToScroll: 1,
  //       itemWidth: 420,
  //       draggable: true,
  //       duration: 0.4
  //     }
  //   }]
  // }).mount({Controls, Breakpoints})
})

</script>

<style>
@import '../../../node_modules/@glidejs/glide/dist/css/glide.core.min.css';
</style>