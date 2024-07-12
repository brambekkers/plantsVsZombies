<script setup lang="ts">
  import BoardCell from './board/Cell.vue'
  const { rows, cols, boardTable, bottom, left, top, right } = storeToRefs(useBoardStore())

  const boardStyle = computed(() => ({
    top: `${top.value}px`,
    bottom: `${bottom.value}px`,
    left: `${left.value}px`,
    right: `${right.value}px`
  }))
</script>

<template>
  <section
    id="board"
    :style="boardStyle">
    <div class="grass">
      <div
        v-for="row in rows"
        :key="`row-${row}`"
        class="row">
        <BoardCell
          v-for="col in cols"
          :key="`col-${col}`"
          :x="col"
          :y="row"
          :cell="boardTable?.[row - 1]?.[col - 1]" />
      </div>
    </div>
  </section>
</template>

<style scoped>
  #board {
    position: absolute;
    z-index: 10;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .grass {
      background: radial-gradient(ellipse at center, #47a424 20%, #328a26 80%);
    }

    .row {
      display: flex;
    }
  }
</style>
