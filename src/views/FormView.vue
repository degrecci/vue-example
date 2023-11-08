<script setup lang="ts">
import Input from '@/components/VueInput.vue'
import TextArea from '@/components/VueTextArea.vue'
import Label from '@/components/VueLabel.vue'
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
        <Label>Name</Label><Input placeholder="type a name" v-model="form.name" />
      </div>
      <div class="flex flex-col mb-2">
        <Label>Lastname</Label><Input placeholder="type a lastname" v-model="form.lastname" />
      </div>
      <div class="flex flex-col mb-2">
        <Label>Age</Label><Input placeholder="type a age" v-model.number="form.age" type="number" />
      </div>
      <div class="mb-2">
        <Label class="block">Pick:</Label>
        <input type="radio" id="one" value="One" v-model="form.pick" />
        <Label for="one">One</Label>
        <input type="radio" id="two" value="Two" v-model="form.pick" />
        <Label for="Two">Two</Label>
        <input type="radio" id="three" value="Three" v-model="form.pick" />
        <Label for="Three">Three</Label>
      </div>
      <div class="mb-2">
        <Label class="block">Checkbox</Label>
        <input type="checkbox" id="checkbox" v-model="form.checked" />
        <Label for="checkbox">Check</Label>
      </div>
      <div class="mb-2">
        <Label class="block">Select</Label>
        <select v-model="form.selected">
          <option value="">Select a option</option>
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
        </select>
      </div>
      <div class="mb-2">
        <Label>Message</Label>
        <TextArea class="w-full" v-model="form.message" placeholder="add multiple lines"></TextArea>
      </div>
    </div>
    <div class="w-2/6 p-4">
      <pre class="whitespace-pre-wrap break-words" data-testid="form-values">{{
        JSON.stringify(form)
      }}</pre>
    </div>
  </div>
</template>
