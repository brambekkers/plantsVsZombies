<script setup lang="ts">
  import Sunflower from './plants/Sunflower.vue'
  const storeStore = useStoreStore()
  const { cellSize } = storeToRefs(useBoardStore())

  const props = defineProps<{
    x: number
    y: number
    cell: Cell
  }>()

  const isOdd = () => (props.x + props.y) % 2 === 0

  const cellStyle = computed(() => ({
    width: `${cellSize.value}px`,
    height: `${cellSize.value}px`,
    backgroundColor: isOdd() ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0)'
  }))

  const clickCell = () => {
    if (storeStore.buyPlant('sunflower')) {
      props.cell.plant = 'sunflower'
    }
  }

  const components = {
    sunflower: Sunflower
  }

  const currentPlant = computed(() => components[props.cell.plant] || null)
</script>

<template>
  <div
    class="cell"
    :style="cellStyle"
    @click="clickCell">
    <component :is="currentPlant"></component>
  </div>
</template>

<style scoped>
  .cell {
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
