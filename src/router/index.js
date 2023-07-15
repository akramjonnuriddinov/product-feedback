import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import CreateFeedback from '@/views/CreateFeedback'
import DetailView from '@/views/DetailView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/:id',
    name: 'detail',
    component: DetailView,
  },
  {
    path: '/createFeedback',
    name: 'createFeedback',
    component: CreateFeedback,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
