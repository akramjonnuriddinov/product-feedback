<script setup>
import PrimaryBtn from './PrimaryBtn.vue'
</script>

<template>
  <div
    class="flex items-center justify-between w-full px-6 py-5 text-white bg-indigo-950 max-w-825 rounded-10"
  >
    <div class="flex items-center">
      <img
        class="mr-4"
        src="@/assets/images/svg/light-icon.svg"
        width="23"
        height="24"
        alt=""
      />
      <p class="text-lg font-bold mr-9">6 Suggestions</p>
    </div>
    <primary-btn />
  </div>
</template>
