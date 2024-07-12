<script setup lang="ts">
  import sunImg from '@/assets/ui/sun.webp'

  const { sun } = storeToRefs(useStoreStore())
</script>

<template>
  <div class="circle">
    <img
      :src="sunImg"
      alt="sun"
      style="width: 100%; height: 100%; object-fit: cover" />
  </div>
  <div class="amount">{{ sun }}</div>
</template>

<style scoped>
  .circle {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    height: 60%;
    aspect-ratio: 1;
    background-color: #452b15;
    border-radius: 50%;
    border: 5px solid #a55522;
  }

  .amount {
    position: absolute;
    bottom: -10%;
    left: 50%;
    transform: translateX(-50%);
    background: #e2dea0;
    width: 70%;
    height: 30%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 2cqb;
  }
</style>
