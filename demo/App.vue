<template>
  <Grid
      :additionalData="{
        // pass vue instance to grid component to use it in cells templates, provide/inject/$store/$router etc
        // @ts-ignore
        vue: this
      }"
      :stretch="false"
      :row-headers="rowHeaders"
      :source="source"
      :columns="headers"
      :editors="gridEditors"
    />
</template>

<script lang="ts">
import Vue from 'vue';
import Cell from './Cell.vue';
import Grid, { VGridVueTemplate, VGridVueEditor } from '@revolist/vue-datagrid';

/**
 * Creates a new vue editor
 */
const NewEditor = Vue.extend({
  props: ['rowIndex', 'model', 'save', 'close'],
  render(h) {
    return h(
      'button',
      {
        on: {
          click: (e: MouseEvent) => {
            e.stopPropagation();
            this.close();
          },
        },
      },
      'I am editor #' + this.rowIndex,
    );
  },
});

/**
 * Generates header title based on index
 */
function generateHeader(index: number) {
  const asciiFirstLetter = 65;
  const lettersCount = 26;
  let div = index + 1;
  let label = '';
  let pos: number;
  while (div > 0) {
    pos = (div - 1) % lettersCount;
    label = String.fromCharCode(asciiFirstLetter + pos) + label;
    div = parseInt(((div - pos) / lettersCount).toString(), 10);
  }
  return label.toLowerCase();
}

function generateFakeDataObject(rowsNumber: number, colsNumber: number) {
  const result: Record<any, any> = [];
  const columns: Record<number, any> = {};
  const all = colsNumber * rowsNumber;
  for (let j = 0; j < all; j++) {
    let col = j % colsNumber;
    let row = (j / colsNumber) | 0;
    if (!result[row]) {
      result[row] = {
        readonly: true,
      };
    }
    if (!columns[col]) {
      columns[col] = {
        name: generateHeader(col),
        prop: col,
      };
      if (col === 0) {
        columns[col].rowDrag = true;
        columns[col].editor = 'button';
        /**
         * This is how you can override default cell template with your own Vue component @file Cell.vue
         */

    // @ts-ignore
        columns[col].cellTemplate = VGridVueTemplate(Cell, {
          customPropSample: 1,
        });
      }
    }
    result[row]['key'] = 'key';
    result[row][col] = row + ':' + col;
  }
  let headers = Object.keys(columns).map((k) => columns[parseInt(k, 10)]);
  return {
    source: result,
    headers,
  };
}

/**
 * Main app component
 */
export default Vue.extend({
  data() {
    // @ts-ignore
    const editor = VGridVueEditor(NewEditor);
    return {
      ...generateFakeDataObject(40, 2),
      gridEditors: { button: editor },
      rowHeaders: {
        size: 100,
        // Sample row header template
        cellTemplate: (_: Function, { rowIndex }: { rowIndex: number }) => {
          return rowIndex;
        },
      },
    };
  },
  components: {
    Grid,
  },
});
</script>

<style lang="scss">
body,
html {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: #f7f9fc;
  text-align: center;
}

revo-grid {
  display: block;
}

.arrow-down svg {
  opacity: 1;
  width: 10px;
  height: 10px;
}

</style>
