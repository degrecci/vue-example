<script setup lang="ts">
import { ref } from 'vue'
import Input from '@/components/VueInput.vue'
import Label from '@/components/VueLabel.vue'

const text = ref('')

function onInput(e: Event) {
  text.value = (e?.target as HTMLInputElement).value
}
</script>

<template>
  <Label for="text">Text</Label>
  <Input :value="text" @input="onInput" placeholder="Type here" id="text" />
  <p>{{ text }}</p>
</template>
