<template>
  <button @click="clickTest">Test #{{ count }}</button>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';
export default Vue.extend({
  props: {
    model: {
      type: Object as PropType<{
        count: number;
      }>,
    },
    customPropSample: Number,
  },
  inject: ['sampleMessage'],
  computed: {
    count(): number {
      return this.model.count || 0;
    },
  },
  methods: {
    clickTest() {
      // @ts-ignore
      console.log('test', this.customPropSample, this.sampleMessage);
      Vue.set(this.model, 'count', this.count + 1);
    },
  },
});
</script>
