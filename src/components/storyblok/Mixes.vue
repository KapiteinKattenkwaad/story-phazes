<template>
  <div v-editable="blok" class="py-2">

    <div class="mixes__playlist--track">
      <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"
              :src="'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + blok.number_playlist + '&color=%23FF19A9&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'"></iframe>
      <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
        <a href="https://soundcloud.com/phazes" title="Phazes" target="_blank"
           style="color: #cccccc; text-decoration: none;">Phazes</a> · <a
          href="https://soundcloud.com/phazes/good-vibrations-vol-1"
          title="Good Vibrations Vol. 1" target="_blank"
          style="color: #cccccc; text-decoration: none;">{{ blok.name_playlist }}</a></div>
    </div>


  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>