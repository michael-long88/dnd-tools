import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    baseAPIUrl: 'https://www.dnd5eapi.co/api/'
  }),
  getters: {
    getBaseURL: (state) => state.baseAPIUrl
  }
});
