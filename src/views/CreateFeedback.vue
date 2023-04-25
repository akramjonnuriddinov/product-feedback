<template>
  <div class="the-container max-w-540">
    <router-link
      class="font-bold mb-16 text-sm text-purple-500 flex items-center"
      :to="{ name: 'home' }"
    >
      <img
        src="@/assets/images/svg/back-icon.svg"
        width="8"
        height="4"
        alt=""
        class="mr-4"
      />
      Go Back
    </router-link>

    <!-- CREATE NEW FEEDBACK -->
    <div
      class="max-w-540 py-12 px-10 text-indigo-900 bg-white relative rounded-10"
    >
      <span
        class="bg-board-bg flex top-0 left-10 -translate-y-1/2 items-center absolute justify-center p-5 text-white rounded-full text-3xl font-semibold w-14 h-14"
      >
        +
      </span>
      <div class="pt-4">
        <h2 class="font-bold text-2xl mb-10">Create New Feedback</h2>
        <form>
          <div class="mb-6">
            <label
              for="title"
              class="block mb-4 text-sm font-medium text-gray-900"
            >
              <h3 class="text-indigo-900 font-bold text-sm leading-5">
                Feedback Title
              </h3>
              <p class="text-indigo-800">Add a short, descriptive headline</p>
            </label>
            <input
              type="text"
              id="title"
              class="block w-full p-4 text-gray-900 rounded-md bg-gray-100 sm:text-md focus:ring-blue-500 outline-indigo-900 focus:border-blue-500"
            />
          </div>
          <div class="mb-6">
            <label
              for="categories"
              class="block mb-4 text-sm font-medium text-gray-900"
            >
              <h3 class="text-indigo-900 font-bold text-sm leading-5">
                Category
              </h3>
              <p class="text-indigo-800">Choose a category for your feedback</p>
            </label>
            <select
              id="categories"
              class="bg-gray-100 outline-indigo-900 border border-gray-300 text-indigo-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-6"
            >
              <option selected>Feature</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div class="mb-6">
            <label
              for="detail"
              class="block mb-4 text-sm font-medium text-gray-900"
            >
              <h3 class="text-indigo-900 font-bold text-sm leading-5">
                Feedback Detail
              </h3>
              <p class="text-indigo-800">
                Include any specific comments on what should be improved, added,
                etc.
              </p>
            </label>
            <textarea
              type="text"
              id="detail"
              class="min-h-96 block w-full p-4 text-gray-900 rounded-md bg-gray-100 sm:text-md focus:ring-blue-500 outline-indigo-900 focus:border-blue-500"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
    <!-- CREATE NEW FEEDBACK -->
  </div>
</template>

<script>
export default {
  name: 'CreateFeedback',
}
</script>
