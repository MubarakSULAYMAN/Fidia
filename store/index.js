export const state = () => ({
  isNavOpen: false
});

export const mutations = {
  SET_NAV_STATE (state) {
    state.isNavOpen = !state.isNavOpen;
  }
};

export const getters = {
  isNavOpen: (state) => {
    return state.isNavOpen;
  }
};

export const actions = {
  updateNavState ({ commit, state }) {
    commit('SET_NAV_STATE');
  }
};
