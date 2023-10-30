<script setup lang="ts">
import Input from '@/components/VueInput.vue'
import { ref } from 'vue'

const form = ref({
  name: '',
  lastname: '',
  pick: '',
  checked: false,
  selected: '',
  age: 0,
  message: ''
})
</script>
<template>
  <div class="inline-flex w-full">
    <div class="mb-2 w-2/6 p-4">
      <div class="flex flex-col mb-2">
        <label>Name</label><Input placeholder="type a name" v-model="form.name" />
      </div>
      <div class="flex flex-col mb-2">
        <label>Lastname</label><Input placeholder="type a lastname" v-model="form.lastname" />
      </div>
      <div class="flex flex-col mb-2">
        <label>Age</label><Input v-model.number="form.age" type="number" />
      </div>
      <div class="mb-2">
        <p>Pick:</p>
        <input type="radio" id="one" value="One" v-model="form.pick" />
        <label for="one">One</label>
        <input type="radio" id="two" value="Two" v-model="form.pick" />
        <label for="Two">Two</label>
        <input type="radio" id="three" value="Three" v-model="form.pick" />
        <label for="Three">Three</label>
      </div>
      <div class="mb-2">
        <p>Checkbox</p>
        <input type="checkbox" id="checkbox" v-model="form.checked" />
        <label for="checkbox">Check</label>
      </div>
      <div class="mb-2">
        <p>Select</p>
        <select v-model="form.selected">
          <option value="">Select a option</option>
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
        </select>
      </div>
      <div class="mb-2">
        <p>Message</p>
        <textarea v-model="form.message" placeholder="add multiple lines"></textarea>
      </div>
    </div>
    <div class="w-2/6 p-4">
      <pre class="whitespace-pre-wrap break-words">{{ JSON.stringify(form) }}</pre>
    </div>
  </div>
</template>
