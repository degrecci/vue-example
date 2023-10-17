<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
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
  </div>
</template>
