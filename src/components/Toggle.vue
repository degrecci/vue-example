<script setup lang="ts">
import { ref } from 'vue'

const onOff = ref(true)

function toggle() {
  onOff.value = !onOff.value
}
</script>

<template>
  <button @click="toggle" class="text-lg">Toggle</button>
  <h1 v-if="onOff" class="text-green-500 text-base font-bold">ON</h1>
  <h1 v-else class="text-red-500 text-base font-bold">OFF</h1>
</template>
