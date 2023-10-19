<script setup>
import { ref } from 'vue'

let id = 0

const newTodo = ref('')
const todos = ref([
  { id: id++, text: 'Vue' },
  { id: id++, text: 'React' }
])

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value })
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input
      v-model="newTodo"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 mr-2"
    />
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Add Todo
    </button>
  </form>
  <ul class="w-1/4">
    <li v-for="todo in todos" :key="todo.id" class="p-1 border rounded-lg flex justify-between">
      {{ todo.text
      }}<button
        @click="removeTodo(todo)"
        class="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
      >
        X
      </button>
    </li>
  </ul>
</template>
