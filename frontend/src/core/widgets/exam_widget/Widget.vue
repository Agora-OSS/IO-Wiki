<script setup lang="ts">
import { ButtonUI } from "@/ui/button";
import { ref } from "vue";

const title = ref("My Widget");
</script>

<template>
  <div class="widget">
    <h1>{{ title }}</h1>
    <p>This is a basic Vue 3 component.</p>
    <ButtonUI>hello</ButtonUI>
  </div>
</template>


<script lang="ts">
export default {
  name: 'WidgetUi',
}
</script>

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