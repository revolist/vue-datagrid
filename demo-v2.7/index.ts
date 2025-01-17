import Vue from 'vue';
import App from './App.vue';
new Vue({
  template: '<App/>',
  components: { App },
  provide() {
    return {
      sampleMessage: 'hello',
    };
  },
}).$mount('#app');
