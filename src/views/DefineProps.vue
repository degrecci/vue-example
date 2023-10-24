<script setup lang="ts">
const props = defineProps({ msg: String })
</script>

<template>
  <h2>{{ msg || 'No props' }}</h2>
</template>
