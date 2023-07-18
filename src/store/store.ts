import { defineStore } from 'pinia'
import router from '@/router/index'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    feeds: JSON.parse(localStorage.getItem('feeds') || '[]'),
    comments: JSON.parse(localStorage.getItem('comments') || '[]'),
    views: [],
  }),
  actions: {
    passHome(): void {
      router.push({ name: 'home' })
    }
  }
})