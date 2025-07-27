import { createRouter, createWebHistory } from 'vue-router'
import FirstNav from '../views/firstNav.vue'
import SecondNav from '@/views/secondNav.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'first',
      component: FirstNav,
    },
    {
      path: '/second',
      name: 'second',
      component: SecondNav,
    },
  ],
})

export default router
