<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
<template>
  <header>
    <div class="wrapper"></div>
  </header>
  <div id="app" class="p-6">
    <nav><RouterView /></nav>
  </div>
</template>
