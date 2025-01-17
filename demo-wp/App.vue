<template>
  <div>
    <button @click="selectAll(true)">Select All</button>
  <RevoGrid
    class="list"
    theme="compact"
    resize="false"
    readonly="true"
    hide-attribution
    :source="rows"
    :columns="columns"
    @beforesourceset="beforeSourceChange"
  />
</div>
</template>

<script>
import RevoGrid from "@revolist/vue-datagrid";

// mock data
function generateFakeDataRows(rowsNumber) {
  const result = [];
  const all = rowsNumber;
  for (let j = 0; j < all; j++) {
    let row = j;
    if (!result[row]) {
      result[row] = {
        id: row,
      };
    }
    result[row]["myRow"] = `I am row ${row}`;
  }
  return result;
}

export default {
  name: "App",
  components: {
    RevoGrid,
  },
  data() {
    return {
      selected: new Set(),
      selectAllElement: null,
      rows: Object.freeze(generateFakeDataRows(10000)),
    };
  },
  // we do update with watch to avoid extra column redraw with reactive computed update
  watch: {
    isAllSelected(newV, oldV) {
      if (newV !== oldV) {
        if (this.selectAllElement) {
          // 0 - unchecked, 1 - indeterminate, 2 - checked
          this.selectAllElement.indeterminate = newV === 1;
          this.selectAllElement.checked = newV > 1 || undefined;
        }
      }
    },
  },
  computed: {
    // monitor selected changes
    isAllSelected() {
      const selected = this.selected.size;
      if (selected === this.rows.length) {
        return 2;
      }
      if (selected) {
        return 1;
      }
      return 0;
    },
    columns() {
      // if select all status changed redraw columns
      const columnTemplate = (h) => {
        let inputVNode = h("input", {
          type: "checkbox",
          ref: (el) => { this.selectAllElement = el },
          onChange: (e) => {
            this.selectAll(e.target.checked);
          },
        });
        return [inputVNode, "Select all"];
      };

      const cellTemplate = (h, { model, prop }) => {
        let inputVNode = h("input", {
          type: "checkbox",
          checked: model.selected || undefined,
          onChange: (e) => this.selectSingle(model, e.target.checked),
        });
        return h("label", undefined, inputVNode, model[prop]);
      };
      return [
        {
          prop: "myRow",
          columnTemplate,
          cellTemplate,
          size: 400,
        },
      ];
    },
  },
  methods: {
    beforeSourceChange(e) {
      console.log("beforeSourceChange", e.detail);
    },
    // select all checkbox click
    selectAll(ckecked = false) {
      this.rows.forEach((r) => this.updateSelectedRow(r, ckecked, this.selected));
      this.selected = new Set(this.selected);
      this.rows = [...this.rows];
    },
    // regular row checkbox click
    selectSingle(row, checked) {
      this.updateSelectedRow(row, checked, this.selected);
      this.selected = new Set(this.selected);
    },
    // internal update method
    updateSelectedRow(row, checked, selected) {
      row.selected = checked;
      if (checked) {
        selected.add(row.id);
      } else {
        selected.delete(row.id);
      }
      return selected;
    },
    // we need it to trigger vNode update, in other case DOM update will not be triggered for this node
    doChange(vNode, isChecked) {
      if (vNode) {
        vNode.$attrs$.checked = isChecked;
      }
    },
  },
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}
.list .row,
.header-row {
  display: flex;
}
.list .row .data-cell,
.data-header-cell {
  position: relative !important;
  width: auto !important;
}
revogr-focus,
.selection-border-range,
.edit-input-wrapper {
  width: 100% !important;
}
input[type="checkbox"] {
  margin-right: 10px;
}
</style>
