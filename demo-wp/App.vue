<template>
  <v-grid
    class="list"
    theme="compact"
    resize="false"
    readonly="true"
    hide-attribution
    :source="rows"
    :columns="columns"
  ></v-grid>
</template>

<script>
import VGrid from "@revolist/vue-datagrid";

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
    VGrid,
  },
  data() {
    return {
      selected: {},
      allSelectedStatus: 0, // 0 - unchecked, 1 - indeterminate, 2 - checked
      rows: generateFakeDataRows(10000),
    };
  },
  // we do update with watch to avoid extra column redraw with reactive computed update
  watch: {
    isAllSelected(newV, oldV) {
      if (newV !== oldV) {
        this.allSelectedStatus = newV;
      }
    },
  },
  computed: {
    // monitor selected changes
    isAllSelected() {
      const selected = Object.keys(this.selected).length;
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
      const status = this.allSelectedStatus;
      const columnTemplate = (h) => {
        let inputVNode = h("input", {
          type: "checkbox",
          indeterminate: status === 1,
          checked: status > 1 || undefined,
          onChange: (e) => {
            this.selectAll(e.target.checked);
            // this.doChange(inputVNode, e.target.checked);
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
    // select all checkbox click
    selectAll(ckecked = false) {
      this.rows.forEach((r) => this.updateSelectedRow(r, ckecked));
      this.selected = { ...this.selected };
      this.rows = [...this.rows];
    },
    // regular row checkbox click
    selectSingle(row, checked) {
      this.updateSelectedRow(row, checked);
      this.selected = { ...this.selected };
    },
    // internal update method
    updateSelectedRow(row, checked) {
      row.selected = checked;
      if (checked) {
        this.selected[row.id] = true;
      } else {
        delete this.selected[row.id];
      }
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
