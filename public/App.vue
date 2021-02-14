<template>
	<div class="tile large">
		<grid theme="material" :source="source" resize="true" :columns="headers" :editors="gridEditors"/>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Cell from './Cell.vue';
import Grid, { VGridVueTemplate, VGridVueEditor } from '../src/vgrid';
/*
const NewComponent = Vue.extend({
  props: ['model', 'prop'],
  render(h) {
    return h('span', undefined, this.model[this.prop]);
  }
}); */

const NewEditor = Vue.extend({
  props: ['rowIndex', 'model', 'save', 'close'],
  render(h) {
    return h('button', {
      on: {
        click: (e: MouseEvent) => {
          e.stopPropagation();
          this.close();
          console.log('click', this.rowIndex);
        }
      }
    }, 'I am vue');
  },
});

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
      let col = j%colsNumber;
      let row = j/colsNumber|0;
      if (!result[row]) {
          result[row] = {};
      }
      if (!columns[col]) {
          columns[col] = {
            name: generateHeader(col),
            prop: col,
          };
          if (col === 0) {
            columns[col].editor = 'button';
            columns[col].cellTemplate = VGridVueTemplate(Cell);
          }
      }
      result[row]['key'] = 'key';
      result[row][col] = row + ':' + col;
  }
  let headers = Object.keys(columns).map((k) => columns[parseInt(k, 10)]);
  return {
    source: result,
    headers
  };
}

export default Vue.extend({
	data() {
    const editor = VGridVueEditor(NewEditor);
    return { ...generateFakeDataObject(1, 100), gridEditors: { button: editor },};
  },
  components: {
    Grid
  },
});
</script>

<style lang="scss">
body, html {
    height: 100%;
  width: 100%;
  padding: 20px;
  margin: 0;
  overflow: hidden;
  background-color: #f7f9fc;
  text-align: center;
  }

revo-grid {
  display: block;
}

.tile {
  background-color: #fff;
  display: flex;
  margin: 0 auto;
  padding: 20px 0;
  box-shadow: 0 0 14px 0 rgba(53,64,82,.05);
  border-radius: 10px;
  overflow: hidden;
}

.arrow-down svg {
    opacity: 1;
    width: 10px;
    height: 10px;
}

revo-grid {
    width: 100%;
}

.tile.dark {
  background-color: #333;
}

.tile.large {
  width: 500px;
  height: 400px;
}
</style>