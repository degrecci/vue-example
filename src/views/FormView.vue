<script setup lang="ts">
import { ref } from 'vue'

const form = ref({ name: '', lastname: '' })
</script>
<template>
  <div class="inline-flex w-full">
    <div class="mb-2 w-2/6 p-4">
      <div class="flex flex-col mb-2">
        <label>Name</label><input placeholder="type a name" v-model="form.name" />
      </div>
      <div class="flex flex-col mb-2">
        <label>Lastname</label><input placeholder="type a lastname" v-model="form.lastname" />
      </div>
    </div>
    <div class="w-2/6 p-4">
      <pre>{{ JSON.stringify(form) }}</pre>
    </div>
  </div>
</template>
