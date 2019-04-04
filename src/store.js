import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: "PL"
  },
  getters: {
    getLanguage: state => {
      return state.language;
    }
  },
  mutations: {
    CHANGE_LANG: (state, lang) => {
      state.language = lang;
    }
  },
  actions: {}
});
