import Task from '~/classes/task';

export const strict = true;

export const state = () => ({
  projectId: null,
  projects: [
    {
      id: 'id1',
      name: 'Project 1',
    },
    {
      id: 'id2',
      name: 'Project 2',
    },
  ],
  tasks: [],
  comments: [],
});

export const getters = {
  tasks(state) {
    return state.tasks;
  },
  comments(state) {
    return state.comments;
  },
  currentProject(state) {
    return state.projects.find(pr => pr.id === state.projectId);
  },
};

export const mutations = {
  setProject(state, payload) {
    state.projectId = payload;
    state.tasks = [];
    state.comments = [];
  },
  addTask(state, payload) {
    state.tasks.push(payload);
  },
  addComment(state, payload) {
    state.comments.push(payload);
  },
  removeTask(state, id) {
    state.tasks = state.tasks.filter(item => item.id !== id);
  },
  removeComment(state, id) {
    state.comments = state.comments.filter(item => item.id !== id);
  },
  changeTaskStatus(state, { id, status }) {
    const item = state.tasks.find(item => item.id === id);
    if (item) {
      item.setStatus(status);
    }
  },
};

export const actions = {
  setProject({ commit }, payload) {
    commit('setProject', payload);
  },
  addTask(context, payload) {
    const { state: { projectId }, commit } = context;
    commit('addTask', new Task({ ...payload, context, projectId }));
  },
  removeTask({ commit }, id) {
    commit('removeTask', id);
  },
  changeTaskStatus({ commit }, payload) {
    commit('changeTaskStatus', payload);
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
