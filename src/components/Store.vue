<script setup lang="ts">
  import Sun from '@/components/store/Sun.vue'
</script>

<template>
  <div id="store">
    <div id="inner">
      <div id="sun">
        <Sun />
      </div>
      <div class="spacer" />
      <div>cards</div>
    </div>
  </div>
</template>

<style scoped>
  #store {
    position: absolute;
    z-index: 80;
    left: 2%;
    top: 0;
    background-color: #87451c;
    padding-block: 1cqb;
    padding-inline: 1.1cqb;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1 / 0.2;
    height: 12%;
    border-radius: 1.5cqb;

    min-height: 150px;
    max-height: 17%;

    #inner {
      background-color: #673317;
      border-radius: 1cqb;
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;

      #sun {
        height: 100%;
        aspect-ratio: 0.8 / 1;
        position: relative;
      }

      .spacer {
        height: 100%;
        background-color: #87451c;
        width: 1cqb;
      }
    }
  }
</style>
