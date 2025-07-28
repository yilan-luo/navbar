import { defineStore } from 'pinia'

export const useFirstItemStore = defineStore('first', {
  state: () => ({
    name: 'firstNav',
  }),
})

export const useSecondItemStore = defineStore('second', {
  state: () => ({
    name: 'secondNav',
  }),
})

export const useThirdItemStore = defineStore('third', {
  state: () => ({
    name: 'thirdNav',
  }),
})

export const useForthItemStore = defineStore('forth', {
  state: () => ({
    name: 'forthNav',
  }),
})
