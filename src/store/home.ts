import { defineStore } from 'pinia';
const homePinia = defineStore('home', {
  state: () => ({
    name: 'lzc'
  }),
  actions: {
    getHomeName() {
      return this.name;
    }
  }
});
export default homePinia;
