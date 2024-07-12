export const useStoreStore = defineStore('store', () => {
  const sun = ref(650)
  const cards = ref([])

  const buyPlant = (plant: Plant) => {
    if (sun.value < plantsData[plant].price) return false
    sun.value -= plantsData[plant].price
    return true
  }

  return { sun, cards, buyPlant }
})
