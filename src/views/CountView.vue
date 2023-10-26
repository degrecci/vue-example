<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/VueButton.vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <Button @click="increment"> Count is: {{ count }} </Button>
</template>
