<template>
  <div class="py-24 the-container max-w-6xl">
    <div class="flex justify-between items-start">
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

<script>
import axios from 'axios'
import FeedbackBoard from '@/components/FeedbackBoard.vue'
import TheHeader from '@/components/TheHeader.vue'
import NotFeedback from '@/components/NotFeedback.vue'
import HaveFeedback from '@/components/HaveFeedback.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      posts: null,
      posts_len: 0,
    }
  },
  components: {
    FeedbackBoard,
    TheHeader,
    NotFeedback,
    HaveFeedback,
  },
  mounted() {
    axios
      .get('http://localhost:3000/posts')
      .then((res) => {
        this.posts = res.data
        this.posts_len = this.posts.length
        console.log(this.posts)
      })
      .catch((err) => {
        console.error(err)
      })
  },
}
</script>
