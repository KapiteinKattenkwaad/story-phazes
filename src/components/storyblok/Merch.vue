<template>
  <div v-editable="blok" class="py-2">
    <section class="merch" id="merch">

      <div class="merch--wrapper">
        <div class="merch__text">
          <h2 class="merch__text__title">
          <span class="merch__text__title--span--am">
            STRIP THAT
          </span>
            <br class="u-space-desktop">
            <span class="merch__text__title--span--dj">
            merch
          </span>
            DOWN FOR ME
          </h2>
        </div>
      </div>

      <div class="merch__container">
        <div class="glider-merch-contain">
          <div class="glider-merch glider">
            <div v-for="merch in blok.image" :key="merch.index" class="glider-merch__card">
              <div class="glider-merch__card__img">
                <div>
                  <img width="200" height="300" :src="merch.filename" :alt="merch.filename.alt">
                </div>
              </div>
            </div>
          </div>

          <button role="button" aria-label="Previous" class="glider-merch-prev">
            <img src="@/assets/img/arrow-right.svg" alt="Previous">
          </button>
          <button role="button" aria-label="Next" class="glider-merch-next">
            <img src="@/assets/img/arrow-right.svg" alt="Next">
          </button>

        </div>

      </div>

    </section>
  </div>
</template>

<script setup>
import {onMounted} from 'vue';
import Glider from "glider-js";

defineProps({blok: Object})

onMounted(() => {
  setTimeout(() => {
    const carousel = document.querySelector('.glider-merch');
    if (carousel) {
      new Glider(carousel, {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        draggable: true,
        dots: '.dots',
        rewind: true,
        arrows: {
          prev: '.glider-merch-prev',
          next: '.glider-merch-next'
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
            slidesToShow: 2,
            slidesToScroll: 1,
            itemWidth: 450,
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
