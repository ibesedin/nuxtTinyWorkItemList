import { WORKITEM_STATUSES } from '~/constants';

export const state = () => ({
  workItems: [],
});

export const getters = {
  workItems(state) {
    return state.workItems;
  },
};

export const mutations = {
  add(state, payload) {
    state.workItems.push(payload);
  },
  remove(state, id) {
    state.workItems = state.workItems.filter(item => item.id !== id);
  },
  setStatus(state, { id, status }) {
    const item = state.workItems.find(item => item.id === id);
    if (item) {
      item.status = status;
    }
  },
};

export const actions = {
  add({ commit }, payload) {
    commit('add', {
      ...payload,
      status: WORKITEM_STATUSES.CREATED,
    });
  },
  remove({ commit }, id) {
    commit('remove', id);
  },
  setStatus({ commit }, payload) {
    const { status } = payload;
    if (!Object.values(WORKITEM_STATUSES).includes(status)) {
      throw new Error(`Invalid status ${status}`);
    }

    commit('setStatus', payload);
  },
  generateId({ state }) {
    let id;
    do
    {
      id = Math.floor(Math.random() * 100);
    } while (state.workItems.find(item => item.id === id));
    return id;
  }
};
