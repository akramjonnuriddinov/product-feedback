<template>
  <div class="p-6 bg-white max-w-255 rounded-10">
    <ul class="flex flex-wrap gap-x-2 gap-y-4">
      <button
        tag="li"
        @click="handleFilter(index)"
        v-for="(category, index) in Category"
        :key="category"
        :class="{ 'bg-dark-blue text-white': isActive[index] }"
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
// import { useCounterStore } from '@/store'

// const store = useCounterStore()

const isActive = ref<Array<Boolean>>([])

const emit = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: 'filter-feeds', category: string): void
}>()

const handleFilter = (index: any) => {
  for (let i = 0; i < isActive.value.length; i++) {
    isActive.value[i] = false
  }

  isActive.value[index] = !isActive.value[index]
  emit('filter-feeds', Category[index])
}
</script>
