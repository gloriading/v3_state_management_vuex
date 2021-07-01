<template>
  <h1 class="counter" :style="{ color: $store.state.counterColor }">
    {{ $store.state.counter }}
  </h1>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Counter',
  setup() {
    
  },
})
</script>
<style scoped>
.counter {
  font-size: 72px;
}
</style>