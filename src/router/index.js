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
      // beforeEnter(to) {
      //   alert('please log in first')
      //   // redirect back to log in page
      //   if (to.name !== "login"){
      //     return "/"
      //   }
        
      // }

    }

  ]
})
export default router
