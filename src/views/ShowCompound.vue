<script setup lang="ts">
const props = defineProps(['id'])
</script>

<template>
  <div class="flex-col">
    <h1 class="text-3xl m-2">Your Compound {{props.id}}</h1>
  </div>
</template>
