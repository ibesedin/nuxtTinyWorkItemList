import { TASK_STATUSES } from '~/constants';

export const state = () => ({
  projectId: null,
  tasks: [],
  comments: [],
});

export const getters = {
  tasks(state) {
    return state.tasks;
  },
};

export const mutations = {
  add(state, payload) {
    state.tasks.push(payload);
  },
  remove(state, id) {
    state.tasks = state.tasks.filter(item => item.id !== id);
  },
  setStatus(state, { id, status }) {
    const item = state.tasks.find(item => item.id === id);
    if (item) {
      item.status = status;
    }
  },
};

export const actions = {
  add({ commit }, payload) {
    commit('add', {
      ...payload,
      status: TASK_STATUSES.CREATED,
    });
  },
  remove({ commit }, id) {
    commit('remove', id);
  },
  setStatus({ commit }, payload) {
    const { status } = payload;
    if (!Object.values(TASK_STATUSES).includes(status)) {
      throw new Error(`Invalid status ${status}`);
    }

    commit('setStatus', payload);
  },
  generateId({ state }) {
    let id;
    do
    {
      id = Math.floor(Math.random() * 100);
    } while (state.tasks.find(item => item.id === id));
    return id;
  },
};
