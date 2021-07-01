<template>
  <div class="actions">
    <button @click="$store.dispatch('decrease')">-</button>
    <button @click="$store.dispatch('increase')">+</button>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CounterActions',
  setup() {
    
  },
})
</script>

<style scoped>
button {
  font-size: 40px;
  width: 50px;
  cursor: pointer;
  margin-right: 10px;
}
</style>