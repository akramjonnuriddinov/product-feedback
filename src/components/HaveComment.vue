<template>
  <div class="pt-6 pb-8 mb-6 pr-8 bg-white rounded-10 pl-7.5">
    <h2 class="w-full text-lg font-bold text-indigo-900 truncate max-w-600">
      {{ store.comments.length }} Comments
    </h2>
    <div
      v-for="(comment, index) in store.comments"
      :key="index"
      class="flex items-center pt-8 pb-8 border-b"
    >
      <img
        class="self-start mr-8 border-2 rounded-full"
        :src="`https://avatars.dicebear.com/api/avataaars/${index}.svg`"
        alt=""
        width="40"
        height="40"
      />
      <div class="w-full">
        <div class="flex items-center justify-between w-full mb-4">
          <h3 class="flex flex-col text-sm">
            <span class="font-bold text-indigo-900"> Elijah Moss </span>
            <span>@hexagon.bestagon</span>
          </h3>
          <button>Reply</button>
        </div>
        <p>
          {{ comment.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
import { useRoute } from 'vue-router'
import { useCounterStore } from '@/store/store'

const route = useRoute()

const store = useCounterStore()
store.comments = store.comments.filter(
  (item: any) => item.id == route.params.id
)
</script>
