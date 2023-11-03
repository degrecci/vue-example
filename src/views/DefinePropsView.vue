<script setup lang="ts">
const { msg } = defineProps({ msg: String })
</script>

<template>
  <h2>{{ msg || 'No props' }}</h2>
</template>
