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
          <div class="glider-merch">
            <div class="glider-merch__card">
              <div class="glider-merch__card__img">
                <div class="merchie" v-for="merch in blok.image" :key="merch.index">
                  <img width="200" height="300" :src="merch.filename" :alt="merch.filename.alt">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script setup>
defineProps({blok: Object})
</script>