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

const onOff = ref(true)

function toggle() {
  onOff.value = !onOff.value
}
</script>

<template>
  <header>
    <div class="wrapper"></div>
  </header>
  <div id="app" class="p-6">
    <div class="p-10 border rounded-sm mb-2">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="increment"
      >
        Count is: {{ count }}
      </button>
    </div>
    <div class="p-10 border rounded-sm mb-2">
      <input
        :value="text"
        @input="onInput"
        placeholder="Type here"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
      />
      <p>{{ text }}</p>
    </div>

    <div class="p-10 border rounded-sm mb-2">
      <button @click="toggle" class="text-lg">Toggle</button>
      <h1 v-if="onOff" class="text-green-500 text-base font-bold">ON</h1>
      <h1 v-else class="text-red-500 text-base font-bold">OFF</h1>
    </div>
  </div>
</template>
