import Vue, { CreateElement } from "vue";
import RevoGrid from "@revolist/revogrid";

type Prop = keyof RevoGrid.Components.RevoGrid;
type Grid = RevoGrid.Components.RevoGrid;
type WatchFunction = (this: Vue, newVal: any, oldVal: any) => void;
type WatchResult = { [prop: string]: WatchFunction };

const props: Prop[] = [
  "rowHeaders",
  "frameSize",
  "rowSize",
  "colSize",
  "range",
  "readonly",
  "resize",
  "canFocus",
  "useClipboard",
  "columns",
  "source",
  "pinnedTopSource",
  "pinnedBottomSource",
  "rowDefinitions",
  "editors",
  "plugins",
  "columnTypes",
  "theme",
  "rowClass",
  "autoSizeColumn",
  "filter",
  "canMoveColumns",
  "trimmedRows",
  "exporting",
  "grouping",
  "stretch",
];

const propsKeys: Record<string, any> = {};
const propsExtended: string[] = [];
props.forEach((prop) => {
  let p: string = prop;
  propsKeys[p] = prop; // regular
  propsExtended.push(p);

  p = prop.toLowerCase();
  propsKeys[p] = prop; // lower cased
  propsExtended.push(p);

  p = prop.split(/(?=[A-Z])/).join("-");
  propsKeys[p] = prop; // kebab
  propsExtended.push(p);
});

const watch = props.reduce((res: WatchResult, p: Prop) => {
  const watchFunc = function (this: Vue, newVal: any) {
    const grid = this.$refs.grid as unknown as Grid;
    grid[p] = newVal as never;
  };
  res[p] = watchFunc;
  return res;
}, {});

export default {
  name: "vue-data-grid",
  props: propsExtended,
  watch,
  render(this: Vue, h: CreateElement) {
    const domProps: Record<string, any> = {};
    for (const key in this.$props) {
      domProps[key] = this.$props[key];
    }
    return (
      <revo-grid
        ref="grid"
        domProps={domProps}
        on={{
          ...this.$listeners,
        }}
      />
    );
  },
};
