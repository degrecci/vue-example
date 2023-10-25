<script setup lang="ts">
import { ref, onMounted } from 'vue'

const pElementRef = ref()

onMounted(() => {
  pElementRef.value.textContent = 'mounted!'
})
</script>

<template>
  <p ref="pElementRef">hello</p>
</template>
