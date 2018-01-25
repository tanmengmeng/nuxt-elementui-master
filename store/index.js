import axios from 'axios'
import {loginByUsername,apiLogout,getMenuInfo} from '@/api/common/login'
export const state = () => ({
  authUser: null,
  menuPower  : null,
  menuList  : null
})

export const mutations = {
  SET_USER: function (state, user) {
    state.authUser = user;
  },
  SET_MENULIST:function(state, menu){
    state.menuList = menu;
  },
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
    if (req.session && req.session.menuList) {
      commit('SET_MENULIST', req.session.menuList)
    }
  },
  async login({ commit }, { username, password }) {
    try {
      const {data} = await loginByUsername({username, password});
      commit('SET_USER', data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },
  async logout({ commit }) {
    await apiLogout();
    commit('SET_USER', null)
  },
  async getMenu({ commit }, { userId }) {
    const { data } = await getMenuInfo({userId});
    commit('SET_MENULIST', data)
  },
}