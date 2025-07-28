import { createRouter, createWebHistory } from 'vue-router'
import FirstNav from '@/components/firstNav.vue'
import SecondNav from '@/components/secondNav.vue'
import ThirdNav from '@/components/thirdNav.vue'
import forthNav from '@/components/forthNav.vue'

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
    {
      path: '/third',
      name: 'third',
      component: ThirdNav,
    },
    {
      path: '/forth',
      name: 'forth',
      component: forthNav,
    },
  ],
})

export default router
