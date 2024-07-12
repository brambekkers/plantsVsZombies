<script setup lang="ts">
  import Board from './components/Board.vue'
  import Store from './components/Store.vue'
</script>

<template>
  <div id="game">
    <h1>Plant vs. Zombies</h1>
    <Board />
    <Store />
  </div>
</template>

<style scoped>
  #game {
    position: relative;
    background-color: #faf2d0;

    height: 100dvh;
    width: 100dvw;
  }
</style>
