<template>
  <div class="max-w-6xl py-24 the-container">
    <div class="flex items-start justify-between">
      <feedback-board class="mr-5" />
      <div class="w-full max-w-825">
        <the-header class="mb-6" />
        <div>
          <have-feedback v-if="posts_len != 0" :posts="posts" />
          <not-feedback v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import FeedbackBoard from '@/components/FeedbackBoard.vue'
import TheHeader from '@/components/TheHeader.vue'
import NotFeedback from '@/components/NotFeedback.vue'
import HaveFeedback from '@/components/HaveFeedback.vue'

const posts = ref(null)
const posts_len = ref(0)

onMounted(() => {
  axios
    .get('http://localhost:3000/posts')
    .then((res) => {
      posts.value = res.data
      posts_len.value = posts.value.length
      console.log(posts.value)
    })
    .catch((err) => {
      console.error(err)
    })
})
</script>
