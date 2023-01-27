import * as constants from "./app.constants";
import { getMonthsData } from "@/services/app.service";

export const appModule = {
  namespaced: true,
  state: {
    remainingT: 180,
  },
  getters: {
    remainingTime: (state) => state.remainingT,
  },
  actions: {
    getRemainingTime({ commit }) {
      const localRemainingTime = localStorage.getItem("remainingTime");
      if (localRemainingTime & (localRemainingTime > 0)) {
        commit(constants.SAVE_REMAINING_TIME, localRemainingTime);
      } else {
        commit(constants.SAVE_REMAINING_TIME, 180);
      }
    },
    setRemainingTime({ state }) {
      localStorage.setItem("remainingTime", state.remainingT);
    },
    decreaseRemainingTime({ commit }) {
      commit(constants.DECREASE_REMAINING_TIME);
    },
    getMonths() {
      const months = getMonthsData();
      return months;
    },
  },
  mutations: {
    [constants.SAVE_REMAINING_TIME]: (state, payload) => {
      state.remainingT = Number(payload);
    },
    [constants.DECREASE_REMAINING_TIME]: (state) => {
      state.remainingT = state.remainingT - 1;
    },
  },
};
