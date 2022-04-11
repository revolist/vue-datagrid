import Vue from 'vue';
Vue.config.ignoredElements = [/revo-grid\w*/];

type Prop = any;
type WatchFunction = (this: Vue, newVal: any, oldVal: any) => void;
type WatchResult = {[prop: string]: WatchFunction; }
const props: Prop[]  = [
    'autoSizeColumn',
    'canFocus',
    'columns',
    'columnTypes',
    'colSize',
    'editors',
    'exporting',
    'filter',
    'frameSize',
    'grouping',
    'merged',
    'pinnedTopSource',
    'pinnedBottomSource',
    'plugins',
    'range',
    'readonly',
    'resize',
    'rowSize',
    'rowClass',
    'rowDefinitions',
    'rowHeaders',
    'source',
    'stretch',
    'theme',
    'trimmedRows',
    'useClipboard',
];

const propsKeys: Record<string, any> = {};
const propsExtended: string[] = [];
props.forEach(prop => {
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

const watch = props.reduce((res: WatchResult, p: any) => {
    const watchFunc = function (this: Vue, newVal: any) {
        const grid = this.$refs.grid as any;
        grid[p] = newVal;
    };
    res[p] = watchFunc;
    return res;
}, {});

export default Vue.extend({
    name: 'vue-data-grid',
    props: propsExtended,
    watch,
    render(h) {
        const domProps: Record<string, any> = {};
        for (const key in this.$props) {
            domProps[key] = this.$props[key];
        }
        return <revo-grid ref='grid' domProps={domProps} on={{
            ...this.$listeners
        }}/>;
    },
});
