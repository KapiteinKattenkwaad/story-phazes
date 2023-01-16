<template>
  <div v-editable="blok" class="glider__card">
    <div class="glider__upcoming" :class="new Date(blok.date) > new Date() ? 'upcoming' : 'past'" >
      {{ new Date(blok.date) > new Date() ? 'Upcoming' : 'Past' }}
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

import {onMounted} from 'vue';

onMounted(() => {
  function checkUpcomingDate() {
    const UserDate = document.querySelector(".glider__card__date");
    const ToDate = new Date();
    // console.log((blok?.date, 'userdate'));

    if (new Date(UserDate).getTime() <= ToDate.getTime()) {
      console.log('date is in the past');
      return false;
    }
    return true;
  }
  checkUpcomingDate()
})


</script>