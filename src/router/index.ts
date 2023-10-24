import { createRouter, createWebHistory } from 'vue-router'

import Count from '@/views/Count.vue'
import DefineProps from '@/views/DefineProps.vue'
import Fetch from '@/views/Fetch.vue'
import OnMounted from '@/views/OnMounted.vue'
import Slots from '@/views/Slots.vue'
import TextInput from '@/views/TextInput.vue'
import TodoList from '@/views/TodoList.vue'
import Toggle from '@/views/Toggle.vue'

const routes = [
  // { path: '/', component: Home },
  { path: '/text-input', component: TextInput },
  { path: '/count', component: Count },
  { path: '/todo-list', component: TodoList },
  { path: '/on-mounted', component: OnMounted },
  { path: '/fetch', component: Fetch },
  { path: '/define-props', component: DefineProps },
  { path: '/slots', component: Slots },
  { path: '/toggle', component: Toggle }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
