<template>
  <div class="max-w-6xl py-24 the-container">
    <div class="flex items-start justify-between">
      <feedback-board class="mr-5" />
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

<script setup>
import FeedbackBoard from '@/components/FeedbackBoard.vue'
import TheHeader from '@/components/TheHeader.vue'
import NotFeedback from '@/components/NotFeedback.vue'
import HaveFeedback from '@/components/HaveFeedback.vue'
import { useCounterStore } from '@/store'

const store = useCounterStore()
</script>
