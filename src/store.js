import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    controlList: []
  },
  mutations: {
    setList(state, payload) {
      state.controlList = payload;
    }
  },
  actions: {}
});
