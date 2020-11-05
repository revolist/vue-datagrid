import './style.css';
import Vue from 'vue';
import Grid from '../src/index';

new Vue({
  el: '#app',
  components: {
    Grid
  },
  render: (h) => {
    return h(Grid);
  }
});
