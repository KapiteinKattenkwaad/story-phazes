<template>
  <div v-editable="blok" class="py-8 mb-6 text-5xl font-bold text-center">
<!--        {{ blok.intro_text.content }}-->
    <p v-for="doc in blok.intro_text.content" :key="doc.index">
      <span v-for="text in doc.content" :key="text.index">
        {{ text.text }}
      </span>
      <br>
      <br>
    </p>
  </div>
</template>

<script setup>
defineProps({ blok: Object })

</script>