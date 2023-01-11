<template>


  <section class="mixes" id="mixes">
    <div class="mixes--wrapper">
      <div class="container">
        <div class="mixes__text">
          <h2 class="mixes__text__title">
              <span class="mixes__text__title--span--am">
                I SAID
              </span>
            <br class="u-space-desktop">
            <span class="mixes__text__title--span--dj">
                mixes
              </span>
            A HIP HOP
          </h2>
        </div>
      </div>

      <div class="mixes__playlist">
        <div v-editable="blok">
          <StoryblokComponent
              v-for="blok in blok.body"
              :blok="blok"
              :key="blok._uid"
          />
        </div>
      </div>

    </div>

  </section>
</template>

<script setup>

defineProps({blok: Object})
</script>