import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoriesPage from '../pages/MemoriesPage.vue';
const routes = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path:'/memories',
    component: MemoriesPage
  },
  {
    path:'/memories/add',
    component: () => import('../pages/AddMemoryPage.vue') //lazy loading( loads only when necessary)
  },
  {
    path:'/memories/:id',
    component: () => import('../pages/MemoriesDetailsPage.vue') //lazy loading( loads only when necessary)
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
