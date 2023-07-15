import { defineStore } from 'pinia'
import router from '@/router/index'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    feeds: JSON.parse(localStorage.getItem('feeds') || '0') || []
  }),
  actions: {
    addFeedback(): void {
      router.push({ name: 'home' })
    }
  },
})