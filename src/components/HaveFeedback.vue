<template>
  <div
    v-for="post in posts"
    :key="post.id"
    class="bg-white px-8 py-7 rounded-10 mb-5 flex items-start"
  >
    <div
      class="bg-gray-50 px-2 pt-4 pb-2 text-indigo-900 font-bold text-sm rounded-10 mr-10"
    >
      112
    </div>
    <div class="flex flex-col items-start">
      <router-link :to="{ name: 'home' }">
        <h3 class="text-indigo-900 font-bold text-lg mb-1">
          {{ post.title }}
        </h3>
        <p>{{ post.detail }}</p>
      </router-link>
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
</template>

<script>
export default {
  name: 'HaveFeedback',
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>
