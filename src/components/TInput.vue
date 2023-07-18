<script setup>
import { ref } from 'vue'

const error = ref(true)
const error_message = ref('this is error message')
const placeholder = ref('+998 (--) --- -- --')
const title = ref('Foydalanuvchi')
</script>

<template>
  <div>
    <label class="relative flex flex-col mb-5 text-gray-700">
      <span
        class="mb-1 text-sm font-medium"
        :class="{ 'text-red-700': error }"
        >{{ title }}</span
      >
      <input
        :class="{ 'outline-red-700': error, 'border-red-700': error }"
        class="py-2 pl-10 pr-4 border border-gray-300 rounded-md outline-blue-700"
        type="text"
        :placeholder="placeholder"
      />
      <div class="absolute w-5 top-9 left-4">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2 3.5C2 2.67157 2.67157 2 3.5 2H4.64837C5.35142 2 5.96014 2.4883 6.11265 3.1746L6.82887 6.39757C7.00105 7.17238 6.53984 7.9472 5.77667 8.16525L4.84388 8.43176C4.4331 8.54913 4.20107 8.98665 4.36396 9.38159C5.53001 12.2087 7.79126 14.47 10.6184 15.636C11.0134 15.7989 11.4509 15.5669 11.5682 15.1561L11.8348 14.2233C12.0528 13.4602 12.8276 12.999 13.6024 13.1711L16.8254 13.8873C17.5117 14.0399 18 14.6486 18 15.3516V16.5C18 17.3284 17.3284 18 16.5 18H15C13.8514 18 12.7366 17.8509 11.6742 17.5705C7.16665 16.3809 3.61908 12.8334 2.42949 8.32576C2.14913 7.26341 2 6.14856 2 5V3.5Z"
            fill="#D1D5DB"
          />
        </svg>
      </div>
      <span class="text-red-700 -bottom-5">{{ error_message }}</span>
    </label>
  </div>
</template>
