<script setup lang="ts">
import { useCounterStore } from '@/store/store'

const store = useCounterStore()
</script>

<template>
  <div
    v-for="post in store.feeds"
    :key="post.id"
    class="flex items-start px-8 mb-5 bg-white py-7 rounded-10"
  >
    <div
      class="px-2 pt-4 pb-2 mr-10 text-sm font-bold text-indigo-900 bg-gray-50 rounded-10"
    >
      0
    </div>
    <div class="flex flex-col items-start">
      <router-link
        :to="{
          name: 'detail',
          params: {
            id: post.id,
          },
        }"
        class="w-full mb-1 text-lg font-bold text-indigo-900 truncate max-w-600"
      >
        {{ post.title }}
      </router-link>
      <p class="w-full truncate max-w-600">{{ post.detail }}</p>
      <span
        class="text-blue-600 bg-blue-50 mt-3 rounded-10 flex items-center justify-center font-semibold px-4 py-1.5"
        >{{ post.category }}</span
      >
    </div>
    <div class="flex ml-auto">
      <img src="@/assets/images/svg/comment-icon.svg" width="18" height="16" />
      <span class="ml-2 text-base font-bold text-indigo-900">
        {{ post.comments?.length }}</span
      >
    </div>
  </div>
</template>
