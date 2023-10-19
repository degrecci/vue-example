<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')

function onInput(e: Event) {
  text.value = (e?.target as HTMLInputElement).value
}
</script>

<template>
  <input
    :value="text"
    @input="onInput"
    placeholder="Type here"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
  />
  <p>{{ text }}</p>
</template>
