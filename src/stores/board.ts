export const useBoardStore = defineStore('board', () => {
  const { width, height } = useWindowSize()
  const cellSize = ref()
  const rows = ref(5)
  const cols = ref(9)

  const minCellSize = 50 // pixels

  const top = computed(() => Math.max(50, height.value * 0.1))
  const bottom = computed(() => height.value * 0.05)
  const right = computed(() => width.value * 0.05)
  const left = computed(() => width.value * 0.05)

  const boardTable = ref<Cell[][]>([])

  const createTable = () => {
    const cell = {
      plant: null
    }

    boardTable.value = Array.from({ length: rows.value }, () => Array.from({ length: cols.value }, () => ({ ...cell })))
  }

  const calculateCellSize = () => {
    const heightSize = (height.value - top.value - bottom.value) / rows.value
    const widthSize = (width.value - left.value - right.value) / cols.value
    const size = Math.min(widthSize, heightSize)
    cellSize.value = Math.max(size, minCellSize)
  }

  watch([width, height], calculateCellSize)

  calculateCellSize()
  createTable()

  return { rows, cols, cellSize, boardTable, top, bottom, left, right }
})
