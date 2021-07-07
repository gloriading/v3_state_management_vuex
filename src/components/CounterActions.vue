<template>
  <div class="actions">
    <button @click="handleDecrease">-</button>
    <button @click="handleIncrease">+</button>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '../store/index';
import { ActionTypes } from '../store/storeTypes';

export default defineComponent({
  name: 'CounterActions',
  setup() {
    const store = useStore();
    const handleIncrease = () => store.dispatch(ActionTypes.INCREASE);
    const handleDecrease = () => store.dispatch(ActionTypes.DECREASE);
    
    return {
      handleIncrease,
      handleDecrease,
    };
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