import './style.css';
import Vue from 'vue';
import Grid, { VGridVueTemplate, VGridVueEditor } from '../src/vgrid';

const NewComponent = Vue.extend({
  props: ['rowIndex'],
  render(h) {
    return h('span', {
      on: {
        click: (e: MouseEvent) => {
          e.stopPropagation();
          console.log('click');
        }
      }
    }, this.rowIndex);
  },
});

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
            columns[col].cellTemplate = VGridVueTemplate(NewComponent);
            columns[col].editor = 'button';
          }
      }
      result[row][col] = row + ':' + col;
  }
  let headers = Object.keys(columns).map((k) => columns[parseInt(k, 10)]);
  return {
    source: result,
    headers
  };
}

new Vue({
  el: '#app',
  data() {
    const editor = VGridVueEditor(NewEditor);
    return { ...generateFakeDataObject(100, 5), gridEditors: { button: editor },};
  },
  components: {
    Grid
  },
  render(h) {
    return h('div', { class: {'tile large': true} }, [h(Grid, {
      props: {
        source: this.$data.source,
        resize: true,
        columns: this.$data.headers,
        editors: this.$data.gridEditors,
        theme: 'material'
      }
    })]);
  }
});
