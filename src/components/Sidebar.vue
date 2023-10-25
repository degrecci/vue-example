<script setup lang="ts">
const liClasses = 'text-2xl text-white my-2 font-bold'
</script>
<template>
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
</template>
