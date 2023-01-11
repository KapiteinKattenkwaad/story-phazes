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

              <div>
                <div class="glider__card">
                  <div class="glider__card__img">
                    <img src="./assets/img/events/WolfClubEaglPhazes.jpg" alt="event two">
                  </div>
                  <p class="glider__card__name">
                    Wolf Club invites Eagl
                    <span class="glider__card__date">
                      9 nov 19
                    </span>
                  </p>
                  <p class="glider__card__text">
                    One of my highlights was sharing the stage with the one and only Papi Cheagl aka
                    Eagl. 

                  </p>
                  <!--
    <div class="glider__card__link">
      <a class="link-cta" href="#">Website event </a>
    </div>
-->
                </div>
              </div>

              <div>
                <div class="glider__card">
                  <div class="glider__card__img">
                    <img src="./assets/img/events/NielsStuBru2.jpg" alt="event thee">
                  </div>
                  <p class="glider__card__name">
                    Black Mamba invites
                    <span class="glider__card__date">
                      26 okt 2019
                    </span>
                  </p>
                  <p class="glider__card__text">
                    I was so hyped to have my mix played on national radio for the first time! This
                    one-hour mix is up on my SoundCloud for you to check out.
                  </p>

                </div>
              </div>

              <div>
                <div class="glider__card">
                  <div class="glider__card__img">
                    <img src="./assets/img/events/PhazesKlubGul.jpg" alt="event four">
                  </div>
                  <p class="glider__card__name">
                    Klub Gul with Hakimm
                    <span class="glider__card__date">
                      21 sep 2019
                    </span>
                  </p>
                  <p class="glider__card__text">
                    One of the few closing spots I played so far, on stage right after Hakimm and
                    Hyalyte.
                  </p>
                </div>
              </div>

              <div>
                <div class="glider__card">
                  <div class="glider__card__img">
                    <img src="./assets/img/events/PhazesKontest.jpg" alt="event five">
                  </div>
                  <p class="glider__card__name">
                    Kontest
                    <span class="glider__card__date">
                      summer of 2019
                    </span>
                  </p>
                  <p class="glider__card__text">
                    In the summer of 19 I was selected as one of the finalists of Kontest, the first DJ
                    contest in Antwerp. Out of more than 100 submissions I got to compete with Cisco FM,
                    DC Noises, Tuuren, Wanton,…
                  </p>

                </div>
              </div>

              <div>
                <div class="glider__card">
                  <div class="glider__card__img">
                    <img src="./assets/img/events/PhazesMambaNights.jpg" alt="event six">
                  </div>
                  <p class="glider__card__name">
                    Mamba Nights
                    <span class="glider__card__date">
                      6 sept 2019
                    </span>
                  </p>
                  <p class="glider__card__text">
                    I won my first DJ-contest, for the one and only Black Mamba. My prize: opening the
                    festival ‘Mamba Nights’ and appearing on an amazing line-up with Black Mamba, Blu
                    Samu, Roedel, Krankk, Youth, Yones, Young Mocro and Mars. 
                  </p>
                </div>
              </div>

              <div>
                <div class="glider__card">
                  <div class="glider__card__img">
                    <img src="./assets/img/events/phazesbarchapel-1-min.jpg" alt="event seven">
                  </div>
                  <p class="glider__card__name">
                    Bar Chapel opening weekend
                    <span class="glider__card__date">
                      			18 jun 2019
                    </span>
                  </p>
                  <p class="glider__card__text">
                    It was my pleasure to drop some beats in one of the cosiest places in Antwerp: Bar
                    Chapel. I shared the line-up with Juicy the DJ, Nonkel Guy, DTM Funk
                  </p>
                </div>
              </div>

              <div>
                <div class="glider__card">
                  <div class="glider__card__img">
                    <img src="./assets/img/events/Phazes3.jpg" alt="event eight">
                  </div>
                  <p class="glider__card__name">
                    Sunrise Festival

                    <span class="glider__card__date">
						 28 jun 2019
                    </span>
                  </p>
                  <p class="glider__card__text">
                    The summer of 2019 started with a banger, my first festival. It was amazing and got
                    to share the stage with Luminasian and Makasi. </p>
                </div>
              </div>

              <!--Empty div to make glider carousel work -->
              <div>

              </div>

            </div>


            <div class="glide__track" data-glide-el="track">
              <div class="glide__slides">
                <div v-for="blok in blok.columns" :key="blok._uid" class="glide__slide">
                  <StoryblokComponent :blok="blok"/>
                </div>
              </div>

            </div>

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

  setTimeout(() => {
    const carousel = document.querySelector('.glider');
    if(carousel) {
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