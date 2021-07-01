import { createStore } from 'vuex'
import axios from 'axios';

const url = 'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new';

export default createStore({
  state: {
    counter: 1,
    counterColor: 'blue',
  },
  mutations: {
    increase(state, randomNumber) {
      state.counter = state.counter + randomNumber;
    },
    decrease(state) {
      state.counter--;
    },
    setColor(state, color) {
      state.counterColor = color;
    },
  },
  actions: {
    async increase({ commit }) {
      const { data: randomNumber } = await axios.get(url); 
      commit('increase', randomNumber);
    },
    decrease({ commit }) {
      commit('decrease');
    },
    setColor({ commit }, newColor) {
      commit('setColor', newColor);
    },
  },
  getters: {
    counterPlusTwo(state) {
      return state.counter + 2;
    },
  },
  modules: {
  }
})
