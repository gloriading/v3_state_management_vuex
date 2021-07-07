<template>
  <div class="changeColor">
    <input type="text" v-model="counterColor" placeholder="Enter color code" />
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '../store/index';
import { ActionTypes } from '../store/storeTypes';

export default defineComponent({
  name: 'CounterColor',
  setup() {
    const store = useStore();
    const counterColor = computed({
      get() {
        return store.state.counterColor;
      },
      set(val) {
        store.dispatch(ActionTypes.SET_COLOR, val);
      }
    });
    return { counterColor };
  },
})
</script>
<style scoped>

.changeColor {
  margin-top: 2rem;
}
input[type="text"] {
  font-size: 1rem;
}
</style>