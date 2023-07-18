import { defineStore } from 'pinia'
import router from '@/router/index'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    feeds: JSON.parse(localStorage.getItem('feeds') || '[]'),
    views: [],
    comments: JSON.parse(localStorage.getItem('comments') || '[]')
  }),
  actions: {
    addFeedback(): void {
      router.push({ name: 'home' })
    }
  }
})