<template>
  <div class="border border-red-400">
    <div class="">
      <!-- FEEDBACK-BOARD -->
      <feedback-board />
      <!-- FEEDBACK-BOARD -->
    </div>
  </div>
</template>

<script>
import FeedbackBoard from '@/components/FeedbackBoard.vue'

export default {
  name: 'HomeView',
  components: {
    FeedbackBoard,
  },
}
</script>
