import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CreateFeedback from '@/views/CreateFeedback.vue'
import DetailView from '@/views/DetailView.vue'

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
