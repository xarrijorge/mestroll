import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/FellowsLoginPage.vue')

    },
    {
      path: '/checkin',
      name: 'checkin',
      component: () => import('../views/CheckInView.vue')

    }
  ]
})

export default router
