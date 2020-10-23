import Vue from 'vue';
import RevoGrid from '@revolist/revogrid';

type Prop = keyof RevoGrid.Components.RevoGrid;
type Grid = RevoGrid.Components.RevoGrid;
type WatchFunction = (this: Vue, newVal: any, oldVal: any) => void;
type WatchResult = {[prop: string]: WatchFunction; }

Vue.config.ignoredElements = [/revo-\w*/]; // Set ignore web-component and avoid parsing it as vuejs

const props: (keyof RevoGrid.Components.RevoGrid)[]  = ['canFocus', 'colSize', 'columns', 'editors', 'frameSize', 'pinnedBottomSource', 'pinnedTopSource', 'range',
    'readonly', 'refresh', 'resize', 'rowClass', 'rowSize', 'source', 'theme'];

export default Vue.extend({
    name: 'data-grid',
    props,
    data() {
        return {
            asc: true
        };
    },
    watch: props.reduce((res: WatchResult, p: Prop) => {
        const watchFunc = function(this: Vue, newVal: any) {
            const grid = this.$refs.grid as unknown as Grid;
            grid[p] = newVal as never;
        };
        res[p] = watchFunc;
        return res;
      }, {}
    ),
    render(createElement) {
        return createElement(
            'revo-grid',
            {
              ref: 'grid',
              domProps: this.$props
            },
        );
    },
})
