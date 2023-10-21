<script setup lang="ts">
const props = defineProps({ variant: String })

const classes =
  props.variant === 'small'
    ? 'ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded'
    : 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
</script>

<template>
  <button :class="classes">
    <slot>Button</slot>
  </button>
</template>
