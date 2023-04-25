<template>
  <div class="flex bg-white py-28 flex-col rounded-10 items-center">
    <img
      src="@/assets/images/png/no-feed.png"
      width="130"
      height="136"
      alt=""
      class="mb-15"
    />
    <h2 class="text-indigo-950 font-bold mb-4 text-2xl">
      There is no feedback yet.
    </h2>
    <p class="max-w-410 text-indigo-800 mb-12">
      Got a suggestion? Found a bug that needs to be squashed? We love hearing
      about new ideas to improve our app.
    </p>
    <primary-btn />
  </div>
</template>

<script>
import PrimaryBtn from '@/components/PrimaryBtn.vue'

export default {
  name: 'NotFeedback',
  components: {
    PrimaryBtn,
  },
}
</script>
