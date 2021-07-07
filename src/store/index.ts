import { InjectionKey } from 'vue';
import axios from 'axios';
import { Mutations, State, Actions, ActionTypes, MutationTypes, Getters } from './storeTypes';
import { 
  createStore,
  Store,
  useStore as baseUseStore,
  MutationTree,
  ActionTree,
  GetterTree,
} from 'vuex';

const state: State = {
  counter: 1,
  counterColor: 'blue',
};

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.INCREASE](state, randomNumber) {
    state.counter = state.counter + randomNumber;
  },
  [MutationTypes.DECREASE](state) {
    state.counter--;
  },
  [MutationTypes.SET_COLOR](state, color) {
    state.counterColor = color;
  },
};

const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.INCREASE]({ commit }) {
    const url = 'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new';
    const { data: randomNumber } = await axios.get(url); 
    commit(MutationTypes.INCREASE, randomNumber);
  },
  [ActionTypes.DECREASE]({ commit }) {
    commit(MutationTypes.DECREASE);
  },
  [ActionTypes.SET_COLOR]({ commit }, newColor) {
    commit(MutationTypes.SET_COLOR, newColor);
  }
};

const getters: GetterTree<State, State> & Getters = {
  counterPlusTwo(state) {
    return state.counter + 2;
  },
};

export const store = createStore<State>({
  state,
  mutations,
  actions,
  getters,
  modules: {
  }
});

export const key: InjectionKey<Store<State>> = Symbol();

export function useStore() {
  return baseUseStore(key)
}

