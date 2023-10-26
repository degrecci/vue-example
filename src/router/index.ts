import { createRouter, createWebHistory } from 'vue-router'

import CountView from '@/views/CountView.vue'
import DefinePropsView from '@/views/DefinePropsView.vue'
import FetchView from '@/views/FetchView.vue'
import OnMountedView from '@/views/OnMountedView.vue'
import SlotsView from '@/views/SlotsView.vue'
import TextInputView from '@/views/TextInputView.vue'
import TodoListView from '@/views/TodoListView.vue'
import ToogleView from '@/views/ToogleView.vue'

const routes = [
  // { path: '/', component: Home },
  { path: '/text-input', component: TextInputView },
  { path: '/count', component: CountView },
  { path: '/todo-list', component: TodoListView },
  { path: '/on-mounted', component: OnMountedView },
  { path: '/fetch', component: FetchView },
  { path: '/define-props', component: DefinePropsView },
  { path: '/slots', component: SlotsView },
  { path: '/toggle', component: ToogleView }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
