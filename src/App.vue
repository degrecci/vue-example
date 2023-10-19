<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

const text = ref('')

function onInput(e: Event) {
  text.value = (e?.target as HTMLInputElement).value
}
</script>

<template>
  <header>
    <div class="wrapper"></div>
  </header>
  <div id="app">
    <div class="p-10">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="increment"
      >
        Count is: {{ count }}
      </button>
    </div>
    <div class="p-10">
      <input
        :value="text"
        @input="onInput"
        placeholder="Type here"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
      />
      <p>{{ text }}</p>
    </div>
  </div>
</template>
