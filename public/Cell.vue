<template>
  <button @click="clickTest">Test {{count + ' Custom Props: ' + temp}}</button>
</template>
<script lang="ts">
interface Model {
  count: number;
}

import Vue, { PropType } from "vue";
export default Vue.extend({
  props: {
    model: {
      type: Object as PropType<Model>
    },
    temp: Number
  },
  computed: {
    count(): number {
      return this.model.count || 0;
    }
  },
  methods: {
    clickTest(): void {
      Vue.set(this.model, 'count', this.count + 1);
    }
  }
});
</script>