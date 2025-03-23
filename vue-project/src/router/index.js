import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {path: '/', name: 'manager', component: import('../views/Manager.vue'),children: [
        {path: 'home', name: 'home', component: import('../views/HomeView.vue'),},
      ]},

    {path: '/About', name: 'about', component: import('../views/AboutView.vue'),},
    {path: '/NotFound', name: 'notFound', component: import('../views/404.vue'),},
    {path: '/:pathMatch(.*)*', redirect: {name: 'notFound'},},

  ],
})

export default router
