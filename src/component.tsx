import Vue, { CreateElement } from 'vue';
import { RevoGrid as RevoGridComponent } from '@revolist/revogrid/custom-element/revo-grid';
import { defineCustomElements } from '@revolist/revogrid/custom-element';
defineCustomElements();

type Prop = any;
type WatchFunction = (this: Vue, newVal: any, oldVal: any) => void;
type WatchResult = { [prop: string]: WatchFunction };
const REVOGRID_PROPS = [
  'rowHeaders',
  'frameSize',
  'rowSize',
  'colSize',
  'range',
  'readonly',
  'resize',
  'canFocus',
  'useClipboard',
  'columns',
  'source',
  'pinnedTopSource',
  'pinnedBottomSource',
  'rowDefinitions',
  'editors',
  'applyOnClose',
  'plugins',
  'columnTypes',
  'theme',
  'rowClass',
  'autoSizeColumn',
  'filter',
  'focusTemplate',
  'canMoveColumns',
  'trimmedRows',
  'exporting',
  'grouping',
  'stretch',
];

const propsKeys: Record<string, any> = {};
const propsExtended: string[] = [];
REVOGRID_PROPS.forEach((prop) => {
  let p: string = prop;
  propsKeys[p] = prop; // regular
  propsExtended.push(p);

  p = prop.toLowerCase();
  propsKeys[p] = prop; // lower cased
  propsExtended.push(p);

  p = prop.split(/(?=[A-Z])/).join('-');
  propsKeys[p] = prop; // kebab
  propsExtended.push(p);
});

const watch = REVOGRID_PROPS.reduce((res: WatchResult, p: Prop) => {
  const watchFunc = function (this: Vue, newVal: any) {
    const grid = this.$refs.grid as any;
    grid[p] = newVal as never;
  };
  res[p] = watchFunc;
  return res;
}, {});

export { RevoGridComponent };
export default {
  name: 'vue-data-grid',
  props: propsExtended,
  watch,
  render(this: Vue, h: CreateElement) {
    const domProps: Record<string, any> = {};
    for (const key in this.$props) {
      domProps[key] = this.$props[key];
    }
    // TODO: provide passage of vue component to renderers
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
