<script setup lang="ts">
  import Plant from '@/assets/plants/sunflower.gif'

  const { cellSize } = storeToRefs(useBoardStore())

  const plantStyle = computed(() => ({
    height: `${cellSize.value * 0.8}px`
  }))
</script>

<template>
  <img
    :src="Plant"
    :style="plantStyle"
    alt="sunflower" />
</template>
