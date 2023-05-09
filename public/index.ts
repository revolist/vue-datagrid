import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
Vue.use(Vuex);
new Vue({
  template: '<App/>',
  components: {App},
  store: new Vuex.Store({}),
}).$mount('#app');
