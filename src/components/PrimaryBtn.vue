<script setup lang="ts">
// import { useCounterStore } from '@/store/store';

// const store = useCounterStore()
</script>

<template>
  <div>
    <router-link
      :to="{ name: 'createFeedback' }"
      class="px-6 py-3 text-sm font-bold text-gray-100 bg-primary rounded-10"
    >
      + Add Feedback
    </router-link>
  </div>
</template>
