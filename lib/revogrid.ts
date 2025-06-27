/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import Vue, { PropOptions } from 'vue';
import { createCommonRender, createCommonMethod } from './vue-component-lib/utils';

import type { Components } from '@revolist/revogrid';




const customElementTags: string[] = [
 'revo-grid',
];
Vue.config.ignoredElements = [...Vue.config.ignoredElements, ...customElementTags];


export const RevoGrid = /*@__PURE__*/ Vue.extend({

  props: {
    rowHeaders: {} as PropOptions<Components.RevoGrid['rowHeaders']>,
    frameSize: {} as PropOptions<Components.RevoGrid['frameSize']>,
    rowSize: {} as PropOptions<Components.RevoGrid['rowSize']>,
    colSize: {} as PropOptions<Components.RevoGrid['colSize']>,
    range: {} as PropOptions<Components.RevoGrid['range']>,
    readonly: {} as PropOptions<Components.RevoGrid['readonly']>,
    resize: {} as PropOptions<Components.RevoGrid['resize']>,
    canFocus: {} as PropOptions<Components.RevoGrid['canFocus']>,
    useClipboard: {} as PropOptions<Components.RevoGrid['useClipboard']>,
    columns: {} as PropOptions<Components.RevoGrid['columns']>,
    source: {} as PropOptions<Components.RevoGrid['source']>,
    pinnedTopSource: {} as PropOptions<Components.RevoGrid['pinnedTopSource']>,
    pinnedBottomSource: {} as PropOptions<Components.RevoGrid['pinnedBottomSource']>,
    rowDefinitions: {} as PropOptions<Components.RevoGrid['rowDefinitions']>,
    editors: {} as PropOptions<Components.RevoGrid['editors']>,
    applyOnClose: {} as PropOptions<Components.RevoGrid['applyOnClose']>,
    plugins: {} as PropOptions<Components.RevoGrid['plugins']>,
    columnTypes: {} as PropOptions<Components.RevoGrid['columnTypes']>,
    theme: {} as PropOptions<Components.RevoGrid['theme']>,
    rowClass: {} as PropOptions<Components.RevoGrid['rowClass']>,
    autoSizeColumn: {} as PropOptions<Components.RevoGrid['autoSizeColumn']>,
    filter: {} as PropOptions<Components.RevoGrid['filter']>,
    sorting: {} as PropOptions<Components.RevoGrid['sorting']>,
    focusTemplate: {} as PropOptions<Components.RevoGrid['focusTemplate']>,
    canMoveColumns: {} as PropOptions<Components.RevoGrid['canMoveColumns']>,
    trimmedRows: {} as PropOptions<Components.RevoGrid['trimmedRows']>,
    exporting: {} as PropOptions<Components.RevoGrid['exporting']>,
    grouping: {} as PropOptions<Components.RevoGrid['grouping']>,
    stretch: {} as PropOptions<Components.RevoGrid['stretch']>,
    additionalData: {} as PropOptions<Components.RevoGrid['additionalData']>,
    disableVirtualX: {} as PropOptions<Components.RevoGrid['disableVirtualX']>,
    disableVirtualY: {} as PropOptions<Components.RevoGrid['disableVirtualY']>,
    hideAttribution: {} as PropOptions<Components.RevoGrid['hideAttribution']>,
    jobsBeforeRender: {} as PropOptions<Components.RevoGrid['jobsBeforeRender']>,
    registerVNode: {} as PropOptions<Components.RevoGrid['registerVNode']>,
    accessible: {} as PropOptions<Components.RevoGrid['accessible']>,
    rtl: {} as PropOptions<Components.RevoGrid['rtl']>,
    canDrag: {} as PropOptions<Components.RevoGrid['canDrag']>,
  },


  methods: {
    refresh: createCommonMethod('refresh') as Components.RevoGrid['refresh'],
    setDataAt: createCommonMethod('setDataAt') as Components.RevoGrid['setDataAt'],
    scrollToRow: createCommonMethod('scrollToRow') as Components.RevoGrid['scrollToRow'],
    scrollToColumnIndex: createCommonMethod('scrollToColumnIndex') as Components.RevoGrid['scrollToColumnIndex'],
    scrollToColumnProp: createCommonMethod('scrollToColumnProp') as Components.RevoGrid['scrollToColumnProp'],
    updateColumns: createCommonMethod('updateColumns') as Components.RevoGrid['updateColumns'],
    addTrimmed: createCommonMethod('addTrimmed') as Components.RevoGrid['addTrimmed'],
    scrollToCoordinate: createCommonMethod('scrollToCoordinate') as Components.RevoGrid['scrollToCoordinate'],
    setCellEdit: createCommonMethod('setCellEdit') as Components.RevoGrid['setCellEdit'],
    setCellsFocus: createCommonMethod('setCellsFocus') as Components.RevoGrid['setCellsFocus'],
    getSource: createCommonMethod('getSource') as Components.RevoGrid['getSource'],
    getVisibleSource: createCommonMethod('getVisibleSource') as Components.RevoGrid['getVisibleSource'],
    getSourceStore: createCommonMethod('getSourceStore') as Components.RevoGrid['getSourceStore'],
    getColumnStore: createCommonMethod('getColumnStore') as Components.RevoGrid['getColumnStore'],
    updateColumnSorting: createCommonMethod('updateColumnSorting') as Components.RevoGrid['updateColumnSorting'],
    clearSorting: createCommonMethod('clearSorting') as Components.RevoGrid['clearSorting'],
    getColumns: createCommonMethod('getColumns') as Components.RevoGrid['getColumns'],
    clearFocus: createCommonMethod('clearFocus') as Components.RevoGrid['clearFocus'],
    getPlugins: createCommonMethod('getPlugins') as Components.RevoGrid['getPlugins'],
    getFocused: createCommonMethod('getFocused') as Components.RevoGrid['getFocused'],
    getContentSize: createCommonMethod('getContentSize') as Components.RevoGrid['getContentSize'],
    getSelectedRange: createCommonMethod('getSelectedRange') as Components.RevoGrid['getSelectedRange'],
    refreshExtraElements: createCommonMethod('refreshExtraElements') as Components.RevoGrid['refreshExtraElements'],
    getProviders: createCommonMethod('getProviders') as Components.RevoGrid['getProviders'],
  },
  render: createCommonRender('revo-grid', ['contentsizechanged', 'beforeedit', 'beforerangeedit', 'afteredit', 'beforeautofill', 'beforerange', 'afterfocus', 'roworderchanged', 'beforesorting', 'beforesourcesortingapply', 'beforesortingapply', 'rowdragstart', 'headerclick', 'beforecellfocus', 'beforefocuslost', 'beforesourceset', 'beforeanysource', 'aftersourceset', 'afteranysource', 'beforecolumnsset', 'beforecolumnapplied', 'aftercolumnsset', 'beforefilterapply', 'beforefiltertrimmed', 'beforetrimmed', 'aftertrimmed', 'viewportscroll', 'beforeexport', 'beforeeditstart', 'aftercolumnresize', 'beforerowdefinition', 'filterconfigchanged', 'sortingconfigchanged', 'rowheaderschanged', 'beforegridrender', 'aftergridrender', 'aftergridinit', 'additionaldatachanged', 'afterthemechanged', 'created']),
});

