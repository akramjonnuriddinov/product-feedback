<template>
  <div
    class="bg-indigo-950 text-white max-w-825 w-full py-5 px-6 rounded-10 flex items-center justify-between"
  >
    <div class="flex items-center">
      <img
        class="mr-4"
        src="@/assets/images/svg/light-icon.svg"
        width="23"
        height="24"
        alt=""
      />
      <p class="mr-9 font-bold text-lg">6 Suggestions</p>
    </div>
    <primary-btn />
  </div>
</template>

<script>
import PrimaryBtn from './PrimaryBtn.vue'

export default {
  name: 'TheHeader',
  components: {
    PrimaryBtn,
  },
}
</script>
