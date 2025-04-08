
<script setup lang="ts">
import { ref } from 'vue'
import {ButtonUI} from '@/ui/button'

const title = ref('My Widget')

</script>

<template>
  <div class="widget">
    <h1>{{ title }}</h1>
    <p>This is a basic Vue 3 component.</p>
    <ButtonUI>hello</ButtonUI>
  </div>
</template>


<style scoped>
.widget {
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

h1 {
  margin-bottom: 8px;
}
</style>