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
        alt=""
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
              v-model="feeds.title"
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
              id="categories"
              class="block w-full px-6 py-3 text-sm text-indigo-900 bg-gray-100 border border-gray-300 rounded-lg outline-indigo-900 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="feature">Feature</option>
              <option value="all">All</option>
              <option value="ui">UI</option>
              <option value="ux">UX</option>
              <option value="enhancement">Enhancement</option>
              <option value="bug">Bug</option>
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
              v-model="feeds.detail"
              type="text"
              id="detail"
              class="block w-full p-4 text-gray-900 bg-gray-100 rounded-md min-h-96 sm:text-md outline-indigo-900"
            ></textarea>
          </div>

          <div class="flex justify-end">
            <button
              type="button"
              @click="cancel"
              class="px-6 py-3 mr-4 text-sm font-bold text-gray-100 bg-indigo-900 rounded-10"
            >
              Cancel
            </button>
            <button
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

<script>
import postData from '@/api/post'
import axios from 'axios'
export default {
  name: 'CreateFeedback',
  data() {
    return {
      feeds: {
        title: '',
        detail: '',
        category: '',
      },
    }
  },
  components: {},
  methods: {
    cancel() {
      this.feeds.title = ''
      this.feeds.detail = ''
    },
    addFeedback() {
      console.log('submitted form')
      console.log(postData)
      axios.post('http://localhost:3000/posts', this.feeds)
      this.cancel()
      this.$router.push({ name: 'home' })
    },
  },
}
</script>
