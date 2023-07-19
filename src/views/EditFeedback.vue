<script setup lang="ts">
import { reactive } from 'vue'
import { useCounterStore } from '@/store/store'
import { Category } from '@/types/constants'
import { useRouter } from 'vue-router'

const store = useCounterStore()
const router = useRouter()

const editData = reactive({
  title: '',
  detail: '',
  category: Category.FEATURE,
})

const addFeedback = () => {
  for (let i = 0; i < store.feeds.length; i++) {
    if (store.feeds[i].id == store.currentId) {
      store.feeds[i].title = editData.title
      store.feeds[i].detail = editData.detail
      store.feeds[i].category = editData.category
      localStorage.setItem('feeds', JSON.stringify(store.feeds))
    }
  }
}
</script>

<template>
  <div class="pt-20 the-container max-w-540">
    <router-link
      class="flex items-center mb-16 text-sm font-bold text-purple-500"
      :to="`/${store.currentId}`"
    >
      <img
        src="@/assets/images/svg/back-icon.svg"
        width="8"
        height="4"
        class="mr-4"
      />
      Go Back
    </router-link>

    <!-- EDIT FEEDBACK -->
    <div
      class="relative px-10 py-12 text-indigo-900 bg-white max-w-540 rounded-10"
    >
      <span
        class="absolute top-0 flex items-center justify-center text-3xl font-semibold text-white -translate-y-1/2 rounded-full bg-board-bg left-10 w-14 h-14"
      >
        <img class="rounded-full" src="@/assets/images/svg/pencil.svg" alt="" />
      </span>
      <div class="pt-4">
        <h2 class="mb-10 text-2xl font-bold">
          Editing 'Add a dark theme option'
        </h2>
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
              v-model="editData.title"
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
              v-model="editData.category"
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
              v-model="editData.detail"
              type="text"
              id="detail"
              class="block w-full p-4 text-gray-900 bg-gray-100 rounded-md min-h-96 sm:text-md outline-indigo-900"
            ></textarea>
          </div>

          <div class="flex items-center justify-between">
            <button
              @click="store.passHome()"
              type="button"
              class="px-6 py-3 mr-4 text-sm font-bold text-gray-100 bg-red-500 rounded-10"
            >
              Delete
            </button>
            <div class="flex justify-end">
              <button
                @click="store.passHome()"
                type="button"
                class="px-6 py-3 mr-4 text-sm font-bold text-gray-100 bg-indigo-900 rounded-10"
              >
                Cancel
              </button>
              <button
                @click="addFeedback(), router.back()"
                type="submit"
                class="px-6 py-3 text-sm font-bold text-gray-100 bg-primary rounded-10"
              >
                Add Feedback
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- EDIT FEEDBACK -->
  </div>
</template>
