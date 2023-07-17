<template>
  <div class="p-6 bg-white max-w-255 rounded-10">
    <ul class="flex flex-wrap gap-x-2 gap-y-4">
      <button
        tag="li"
        v-for="(category, index) in Category"
        @click="handleFilter(Category[index])"
        :key="category"
        :class="{ 'bg-dark-blue text-white': activeCategory === category }"
        class="px-4 rounded-10 py-2.5 text-dark-sky bg-light-blue"
      >
        {{ category }}
      </button>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import { Category } from '@/types/constants'

const activeCategory = ref(Category.ALL)

const emit = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: 'filter-feeds', category: string): void
}>()

const handleFilter = (category: Category) => {
  activeCategory.value = category
  emit('filter-feeds', category)
}
</script>
