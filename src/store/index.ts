import { defineStore } from 'pinia'
import router from '@/router/index'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    feeds: JSON.parse(localStorage?.getItem('feeds') || '0') || [],
    views: [0, 1, 2] as Array<number>,
  }),
  actions: {
    addFeedback(): void {
      router.push({ name: 'home' })
    }
  }
})