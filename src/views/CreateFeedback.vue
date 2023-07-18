<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '@/store/store'
import type { NewFeedback } from '@/types/types'
import { v4 as uuidv4 } from 'uuid'
import { Category } from '@/types/constants'

const store = useCounterStore()

const newFeedback = ref<NewFeedback>({
  id: uuidv4(),
  title: '',
  detail: '',
  category: Category.ALL,
})

const feeds = store.feeds as NewFeedback[]

const addFeedback = () => {
  feeds.unshift(newFeedback.value)
  localStorage.setItem('feeds', JSON.stringify(feeds))
  store.passHome()
}
</script>

<template>
  <div class="the-container max-w-540">
    <router-link
      class="flex items-center mb-16 text-sm font-bold text-purple-500"
      :to="{ name: 'home' }"
    >
      <img
        src="@/assets/images/svg/back-icon.svg"
        width="8"
        height="4"
        class="mr-4"
      />
      Go Back
    </router-link>

    <!-- CREATE NEW FEEDBACK -->
    <div
      class="relative px-10 py-12 text-indigo-900 bg-white max-w-540 rounded-10"
    >
      <span
        class="absolute top-0 flex items-center justify-center p-5 text-3xl font-semibold text-white -translate-y-1/2 rounded-full bg-board-bg left-10 w-14 h-14"
      >
        +
      </span>
      <div class="pt-4">
        <h2 class="mb-10 text-2xl font-bold">Create New Feedback</h2>
        <form @submit.prevent="addFeedback">
          <div class="mb-6">
            <label
              for="title"
              class="block mb-4 text-sm font-medium text-gray-900"
            >
              <h3 class="text-sm font-bold leading-5 text-indigo-900">
                Feedback Title
              </h3>
              <p class="text-[#647196]">Add a short, descriptive headline</p>
            </label>
            <input
              type="text"
              v-model="newFeedback.title"
              id="title"
              class="block w-full p-4 text-gray-900 bg-gray-100 rounded-md sm:text-md focus:ring-blue-500 outline-indigo-900 focus:border-blue-500"
            />
          </div>
          <div class="mb-6">
            <label
              for="categories"
              class="block mb-4 text-sm font-medium text-gray-900"
            >
              <h3 class="text-sm font-bold leading-5 text-indigo-900">
                Category
              </h3>
              <p class="text-[#647196]">Choose a category for your feedback</p>
            </label>
            <select
              v-model="newFeedback.category"
              id="categories"
              class="block w-full px-6 py-3 text-sm text-indigo-900 bg-gray-100 border border-gray-300 rounded-lg outline-indigo-900 focus:ring-blue-500 focus:border-blue-500"
            >
              <option
                v-for="category in Category"
                :key="category"
                :value="category"
              >
                {{ category }}
              </option>
            </select>
          </div>
          <div class="mb-6">
            <label
              for="detail"
              class="block mb-4 text-sm font-medium text-gray-900"
            >
              <h3 class="text-sm font-bold leading-5 text-indigo-900">
                Feedback Detail
              </h3>
              <p class="text-[#647196]">
                Include any specific comments on what should be improved, added,
                etc.
              </p>
            </label>
            <textarea
              v-model="newFeedback.detail"
              type="text"
              id="detail"
              class="block w-full p-4 text-gray-900 bg-gray-100 rounded-md min-h-96 sm:text-md outline-indigo-900"
            ></textarea>
          </div>

          <div class="flex justify-end">
            <button
              type="button"
              class="px-6 py-3 mr-4 text-sm font-bold text-gray-100 bg-indigo-900 rounded-10"
            >
              Cancel
            </button>
            <button
              @click="addFeedback"
              type="submit"
              class="px-6 py-3 text-sm font-bold text-gray-100 bg-primary rounded-10"
            >
              Add Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
    <!-- CREATE NEW FEEDBACK -->
  </div>
</template>
