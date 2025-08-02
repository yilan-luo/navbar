import { defineStore } from 'pinia'

export const useNavItemsStore = defineStore('navItems', {
  // state holds an array of navigation item objects
  state: () => ({
    items: [
      { id: 'first', name: 'First Nav', path: '/' },
      { id: 'second', name: 'Second Nav', path: '/second' },
      { id: 'third', name: 'Third Nav', path: '/third' },
      { id: 'forth', name: 'Forth Nav', path: '/forth' },
    ],
  }),

  // Getters can be used to compute derived state, but here we just return the items
  getters: {
    // A simple getter to return all items
    navList: (state) => state.items,
  },

  // Actions can be used to modify the state, e.g., adding a new nav item
  actions: {
    addItem(item) {
      this.items.push(item)
    },
  },
})
