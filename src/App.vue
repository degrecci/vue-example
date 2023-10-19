<script setup lang="ts">
import Toggle from './components/Toggle.vue'
import Input from './components/Input.vue'
import Count from './components/Count.vue'
import TodoList from './components/TodoList.vue'
</script>

<template>
  <header>
    <div class="wrapper"></div>
  </header>
  <div id="app" class="p-6">
    <div class="p-10 border rounded-lg mb-2">
      <Count />
    </div>
    <div class="p-10 border rounded-lg mb-2">
      <Input />
    </div>
    <div class="p-10 border rounded-lg mb-2">
      <Toggle />
    </div>
    <div class="p-10 border rounded-lg mb-2">
      <TodoList />
    </div>
  </div>
</template>
