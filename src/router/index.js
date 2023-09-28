import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/FellowsLoginPage.vue'),
      alias: '/login',
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      beforeEnter() {
        alert('You are not authorized to view this page please log in first')
        // block navigation
        return false
      }

    }

  ]
})
export default router
