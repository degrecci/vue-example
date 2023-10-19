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
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
    />
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}<button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>
