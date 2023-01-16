<template>
  <div v-editable="blok" class="glider__card">
    <div class="glider__upcoming">
      Upcoming
    </div>
    <div class="glider__card__img">
      <div v-for="img in blok.image">
        <img width="220" height="300" :src="img.filename" :alt="img.alt ">
      </div>
    </div>
    <p class="glider__card__name">
      {{ blok.title }}
      <span class="glider__card__date">
          {{ blok.date }}
        </span>
    </p>
    <p class="glider__card__text">
      {{ blok.intro }}
    </p>
  </div>
</template>

<script setup>
defineProps({blok: Object})
</script>