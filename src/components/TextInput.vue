<script setup lang="ts">
import { ref } from 'vue'
import Input from './Input.vue'

const text = ref('')

function onInput(e: Event) {
  text.value = (e?.target as HTMLInputElement).value
}
</script>

<template>
  <Input :value="text" @input="onInput" placeholder="Type here" />
  <p>{{ text }}</p>
</template>
