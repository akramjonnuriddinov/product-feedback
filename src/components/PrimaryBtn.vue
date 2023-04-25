<template>
  <div>
    <router-link
      :to="{ name: 'createFeedback' }"
      class="bg-primary font-bold text-gray-100 text-sm px-6 py-3 rounded-10"
    >
      + Add Feedback
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PrimaryBtn',
}
</script>
