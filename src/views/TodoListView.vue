<script setup lang="ts">
import { ref, computed } from 'vue'
import Button from '@/components/VueButton.vue'
import Input from '@/components/VueInput.vue'

type Todo = {
  id: number
  text: string
  done: boolean
}

let id = 0

const hideCompleted = ref(false)
const newTodo = ref('')
const todos = ref<Array<Todo>>([
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

function removeTodo(todo: Todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <Input v-model="newTodo" placeholder="Type todo" class="mr-4" />
    <Button>Add Todo</Button>
  </form>
  <ul class="w-1/4 my-4">
    <li
      v-for="todo in filteredTodos"
      :key="todo.id"
      class="p-1 border rounded-lg flex justify-between items-center my-1"
    >
      <input type="checkbox" v-model="todo.done" />
      <span :class="{ 'line-through': todo.done }">{{ todo.text }}</span
      ><Button @click="removeTodo(todo)" variant="small"> X </Button>
    </li>
  </ul>
  <Button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </Button>
</template>
