<template>
  <div v-editable="blok" class="py-2">
    <div v-for="merch in blok.image" :key="merch.index">
      <img width="200" height="300" :src="merch.filename" :alt="merch.filename.alt">
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>