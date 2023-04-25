<template>
  <div class="py-24 the-container max-w-6xl">
    <div class="flex justify-between items-start">
      <feedback-board class="mr-5" />
      <div class="w-full max-w-825">
        <the-header class="mb-6" />
        <div>
          <not-feedback v-if="false" />

          <!-- HAVE FEEDBACK -->
          <div v-else>
            <have-feedback v-for="i in 10" :key="i" />
          </div>
          <!-- HAVE FEEDBACK -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FeedbackBoard from '@/components/FeedbackBoard.vue'
import TheHeader from '@/components/TheHeader.vue'
import NotFeedback from '@/components/NotFeedback.vue'
import HaveFeedback from '@/components/HaveFeedback.vue'

export default {
  name: 'HomeView',
  components: {
    FeedbackBoard,
    TheHeader,
    NotFeedback,
    HaveFeedback,
  },
}
</script>
