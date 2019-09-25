export default {
  state: {
    save: '',
  },
  mutations: {
    updateSave (state, value) {
      state.save = value;
    },
  },
  actions: {
    updateSave ({commit}, value) {
      commit('updateSave', value);
    },
  },
}
