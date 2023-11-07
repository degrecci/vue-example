<script setup lang="ts">
import Button from '@/components/VueButton.vue'
import { ref } from 'vue'

const onOff = ref(true)

function toggle() {
  onOff.value = !onOff.value
}
</script>

<template>
  <Button @click="toggle" class="text-lg">Toggle</Button>
  <h1 v-if="onOff" class="text-green-500 text-base font-bold">ON</h1>
  <h1 v-else class="text-red-500 text-base font-bold">OFF</h1>
</template>
