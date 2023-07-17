<script setup lang="ts">
import { useCounterStore } from '@/store'
import FeedbackBoard from '@/components/FeedbackBoard.vue'
import TheHeader from '@/components/TheHeader.vue'
import NotFeedback from '@/components/NotFeedback.vue'
import HaveFeedback from '@/components/HaveFeedback.vue'
import FilterFeeds from '@/components/FilterFeeds.vue'
import { Category } from '@/types/constants'

const store = useCounterStore()

const handleFilter = (category: string) => {
  const feeds = JSON.parse(localStorage.getItem('feeds') || '')
  store.feeds = feeds.filter(
    (item: any) => Category.ALL === category || item.category == category
  )
}
</script>

<template>
  <div class="max-w-6xl py-24 the-container">
    <div class="flex items-start justify-between">
      <div class="mr-5">
        <feedback-board class="mb-6" />
        <filter-feeds @filter-feeds="handleFilter" />
      </div>
      <div class="w-full max-w-825">
        <the-header class="mb-6" />
        <div>
          <have-feedback v-if="store.feeds.length !== 0" />
          <not-feedback v-else />
        </div>
      </div>
    </div>
  </div>
</template>
