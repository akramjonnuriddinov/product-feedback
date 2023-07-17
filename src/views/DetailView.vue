<template>
  <div class="container py-20 the-container">
    <div class="flex items-center justify-between">
      <router-link
        class="flex items-center mb-16 text-sm font-bold text-purple-500"
        :to="{ name: 'home' }"
      >
        <img
          src="@/assets/images/svg/back-icon.svg"
          width="8"
          height="4"
          alt=""
          class="mr-4"
        />
        Go Back
      </router-link>
      <button
        type="submit"
        class="px-6 py-3 text-sm font-bold text-gray-100 bg-blue-600 rounded-10"
      >
        Edit Feedback
      </button>
    </div>
    <div>
      <div class="flex items-start px-8 mb-5 bg-white py-7 rounded-10">
        <div
          class="px-2 pt-4 pb-2 mr-10 text-sm font-bold text-indigo-900 bg-gray-50 rounded-10"
        >
          112
        </div>
        <div class="flex flex-col items-start">
          <h2 class="mb-1 text-lg font-bold text-indigo-900">
            {{ post.title }}
          </h2>
          <p>{{ post.detail }}</p>
          <span
            class="text-blue-600 bg-blue-50 mt-3 rounded-10 flex items-center justify-center font-semibold px-4 py-1.5"
            >Enhancement</span
          >
        </div>
        <div class="flex ml-auto">
          <img
            src="@/assets/images/svg/comment-icon.svg"
            width="18"
            height="16"
            alt=""
          />
          <span class="ml-2 text-base font-bold text-indigo-900">2</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/store'
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'

const store = useCounterStore()

const route = useRoute()

const postId = computed(() => {
  return route.params.id
})

const post = ref([])

store.feeds.forEach((item) => {
  if (item.id == postId.value) {
    localStorage.setItem('post', JSON.stringify(item))
  }
})
post.value = JSON.parse(localStorage?.getItem('post'))
</script>
