<script setup lang="ts">
import { RouterView } from 'vue-router'
import Sidebar from '@/components/Sidebar.vue'
</script>

<template>
  <header>
    <div class="wrapper"></div>
  </header>
  <layout id="app">
    <Sidebar />
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
