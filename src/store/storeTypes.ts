import { ActionContext } from 'vuex';

export interface State {
  counter: number;
  counterColor: string;
}

export enum MutationTypes {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
  SET_COLOR = 'SET_COLOR',
}

export type Mutations<S = State> = {
  [MutationTypes.INCREASE](state: S, payload: number): void,
  [MutationTypes.DECREASE](state: S): void,
  [MutationTypes.SET_COLOR](state: S, color: string): void,
}

export enum ActionTypes {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
  SET_COLOR = 'SET_COLOR',
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export type Actions = {
  [ActionTypes.INCREASE]({ commit }: AugmentedActionContext): void,
  [ActionTypes.DECREASE]({ commit }: AugmentedActionContext): void,
  [ActionTypes.SET_COLOR]({ commit }: AugmentedActionContext, color: string): void,
}

export type Getters = {
  counterPlusTwo(state: State): number
}
