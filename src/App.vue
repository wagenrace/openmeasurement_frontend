<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import SearchSynonym from './components/SearchSynonym.vue'
</script>

<template>
  <div class="flex-col w-full h-full justify-center">
    <div class="flex w-full justify-center">
      <h1 class="w-fit text-justify text-5xl m-5">The Open Measurement</h1>
    </div>
    <div class="flex w-full justify-center">
      <SearchSynonym />
    </div>
  </div>
</template>

