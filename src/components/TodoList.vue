<script setup>
import { ref, computed } from 'vue'
import Button from './Button.vue'

let id = 0

const hideCompleted = ref(false)
const newTodo = ref('')
const todos = ref([
  { id: id++, text: 'Vue', done: true },
  { id: id++, text: 'React', done: false }
])

const filteredTodos = computed(() => {
  return hideCompleted.value ? todos.value.filter((t) => !t.done) : todos.value
})

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false })
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
    <Button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Add Todo
    </Button>
  </form>
  <ul class="w-1/4 my-4">
    <li
      v-for="todo in filteredTodos"
      :key="todo.id"
      class="p-1 border rounded-lg flex justify-between items-center my-1"
    >
      <input type="checkbox" v-model="todo.done" />
      <span :class="{ 'line-through': todo.done }">{{ todo.text }}</span
      ><button
        @click="removeTodo(todo)"
        class="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
      >
        X
      </button>
    </li>
  </ul>
  <Button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </Button>
</template>
