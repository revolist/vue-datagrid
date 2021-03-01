<template>
  <button @click="clickTest">Test {{count}}</button>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ['rowIndex', 'model'],
  computed: {
    count() {
      return this.model.count || 0;
    }
  },
  methods: {
    clickTest() {
      Vue.set(this.model, 'count', this.count + 1);
    }
  }
});
</script>