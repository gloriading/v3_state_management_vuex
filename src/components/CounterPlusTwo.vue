<template>
  <p>{{ $store.state.counter }} + 2 = {{ $store.getters.counterPlusTwo }}</p>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CounterPlusTwo',
  setup() {
    
  },
})
</script>
