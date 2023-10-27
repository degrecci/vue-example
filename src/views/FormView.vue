<script setup lang="ts">
import { ref } from 'vue'
import VueButton from '@/components/VueButton.vue'
import VueInput from '@/components/VueInput.vue'

const name = ref('')
const lastname = ref('')

function handleSubmit(event: SubmitEvent) {
  event.preventDefault()
}
</script>
<template>
  <form @onsubmit="handleSubmit">
    <div class="flex flex-col mb-2 w-1/4">
      <label>Name</label><VueInput placeholder="type a name" v-model="name" />
    </div>
    <div class="flex flex-col mb-4 w-1/4">
      <label>Lastname</label><VueInput placeholder="type a lastname" v-model="lastname" />
    </div>
    <VueButton type="submit">Submit</VueButton>
  </form>
</template>
