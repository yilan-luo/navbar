import { defineStore } from 'pinia'

export const useFirstItemsStore = defineStore('first', {
  state: () => ({
    name: 'firstNav',
  }),
})

export const useSecondItemsStore = defineStore('second', {
  state: () => ({
    name: 'secondNav',
  }),
})
