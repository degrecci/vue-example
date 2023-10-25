<script setup lang="ts">
import { RouterView } from 'vue-router'

const liClasses = 'text-2xl text-white my-2 font-bold'
</script>

<template>
  <header>
    <div class="wrapper"></div>
  </header>
  <layout id="app">
    <aside class="sidebar p-6 bg-blue-500">
      <ul class="w-full">
        <li :class="liClasses">
          <RouterLink to="/">home</RouterLink>
        </li>
        <li :class="liClasses">
          <RouterLink to="/text-input">text-input</RouterLink>
        </li>
        <li :class="liClasses">
          <RouterLink to="/count">count</RouterLink>
        </li>
        <li :class="liClasses">
          <RouterLink to="/todo-list">todo-list</RouterLink>
        </li>
        <li :class="liClasses">
          <RouterLink to="/on-mounted">on-mounted</RouterLink>
        </li>
        <li :class="liClasses">
          <RouterLink to="/fetch">fetch</RouterLink>
        </li>
        <li :class="liClasses">
          <RouterLink to="/define-props">define-props</RouterLink>
        </li>
        <li :class="liClasses">
          <RouterLink to="/slots">slots</RouterLink>
        </li>
        <li :class="liClasses">
          <RouterLink to="/toggle">toggle</RouterLink>
        </li>
      </ul>
    </aside>
    <main class="main p-6">
      <RouterView />
    </main>
  </layout>
</template>

<style scoped>
layout {
  display: grid;
  width: 100%;
  min-height: 100vh;
  grid-template: 'sidebar main';
  grid-template-columns: 1fr 4fr;
}

.sidebar {
  grid-area: sidebar;
}

.main {
  grid-area: main;
}
</style>
