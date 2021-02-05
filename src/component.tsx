import Vue, { CreateElement, VNode } from 'vue';
import RevoGrid from '@revolist/revogrid';

type Prop = keyof RevoGrid.Components.RevoGrid;
type Grid = RevoGrid.Components.RevoGrid;
type WatchFunction = (this: Vue, newVal: any, oldVal: any) => void;
type WatchResult = {[prop: string]: WatchFunction; }

const props: (keyof RevoGrid.Components.RevoGrid)[]  = [
    'canFocus',
    'colSize',
    'columns',
    'editors',
    'frameSize',
    'pinnedBottomSource',
    'pinnedTopSource',
    'range',
    'readonly',
    'refresh',
    'resize',
    'rowClass',
    'rowSize',
    'source',
    'theme',
    'rowDefinitions',
    'columnTypes',
    'rowHeaders',
    'autoSizeColumn',
    'filter', 
    'exporting',
    'grouping',
    'trimmedRows',
];

export default {
    name: 'vue-data-grid',
    props,
    watch: props.reduce((res: WatchResult, p: Prop) => {
        const watchFunc = function(this: Vue, newVal: any) {
            const grid = this.$refs.grid as unknown as Grid;
            grid[p] = newVal as never;
        };
        res[p] = watchFunc;
        return res;
      }, {}
    ),
    render(this: Vue, h: CreateElement): VNode {
        return <revo-grid ref='grid' domProps={this.$props} on={{
            ...this.$listeners
        }}/>;
    },
};
