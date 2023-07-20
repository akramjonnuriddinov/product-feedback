import { defineStore } from 'pinia'
import router from '@/router/index'
import { NewFeedback } from '@/types/types'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    feeds: [] as NewFeedback[],
    comments: JSON.parse(localStorage.getItem('comments') || '[]'),
    views: [],
    currentId: '',
    commentCount: JSON.parse(localStorage.getItem('commentCount') || '[]')
  }),
  actions: {
    passHome(): void {
      router.push({ name: 'home' })
    },
    setFeeds() {
      let feeds = JSON.parse(localStorage.getItem('feeds') || '[]')
      const comments = JSON.parse(localStorage.getItem('comments') || '[]')
      feeds = feeds.map((item: any) => {
        const feed = {
          ...item,
          comments: comments.filter((comment: any) => comment.id === item.id)
        }
        return feed
      })
      this.feeds = feeds
    }
  }
})