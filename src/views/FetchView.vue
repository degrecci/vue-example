<script setup lang="ts">
import { ref, watch } from 'vue'
import Button from '@/components/VueButton.vue'

const todoId = ref(1)
const todoData = ref(null)

async function fetchData() {
  todoData.value = null
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
  todoData.value = await res.json()
}

fetchData()

watch(todoId, fetchData)
</script>

<template>
  <p>Todo id: {{ todoId }}</p>
  <Button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
    @click="todoId++"
  >
    Fetch next todo
  </Button>
  <p v-if="!todoData">Loading...</p>
  <pre class="border rounded-lg" v-else>{{ todoData }}</pre>
</template>
