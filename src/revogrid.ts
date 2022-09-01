/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import Vue, { PropOptions } from 'vue';
import { createCommonRender, createCommonMethod } from './vue-component-lib/utils';

import type { Components } from '@revolist/revogrid';


    import * as Default from '@revolist/revogrid/custom-element';

    export default Default;

    


const customElementTags: string[] = [
 'revo-grid',
 'revogr-clipboard',
 'revogr-data',
 'revogr-edit',
 'revogr-filter-panel',
 'revogr-focus',
 'revogr-header',
 'revogr-order-editor',
 'revogr-overlay-selection',
 'revogr-row-headers',
 'revogr-scroll-virtual',
 'revogr-temp-range',
 'revogr-viewport-scroll',
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
    applyEditorChangesOnClose: {} as PropOptions<Components.RevoGrid['applyEditorChangesOnClose']>,
    plugins: {} as PropOptions<Components.RevoGrid['plugins']>,
    columnTypes: {} as PropOptions<Components.RevoGrid['columnTypes']>,
    theme: {} as PropOptions<Components.RevoGrid['theme']>,
    rowClass: {} as PropOptions<Components.RevoGrid['rowClass']>,
    autoSizeColumn: {} as PropOptions<Components.RevoGrid['autoSizeColumn']>,
    filter: {} as PropOptions<Components.RevoGrid['filter']>,
    focusTemplate: {} as PropOptions<Components.RevoGrid['focusTemplate']>,
    canMoveColumns: {} as PropOptions<Components.RevoGrid['canMoveColumns']>,
    trimmedRows: {} as PropOptions<Components.RevoGrid['trimmedRows']>,
    exporting: {} as PropOptions<Components.RevoGrid['exporting']>,
    grouping: {} as PropOptions<Components.RevoGrid['grouping']>,
    stretch: {} as PropOptions<Components.RevoGrid['stretch']>,
  },


  methods: {
    refresh: createCommonMethod('refresh') as Components.RevoGrid['refresh'],
    scrollToRow: createCommonMethod('scrollToRow') as Components.RevoGrid['scrollToRow'],
    scrollToColumnIndex: createCommonMethod('scrollToColumnIndex') as Components.RevoGrid['scrollToColumnIndex'],
    scrollToColumnProp: createCommonMethod('scrollToColumnProp') as Components.RevoGrid['scrollToColumnProp'],
    updateColumns: createCommonMethod('updateColumns') as Components.RevoGrid['updateColumns'],
    addTrimmed: createCommonMethod('addTrimmed') as Components.RevoGrid['addTrimmed'],
    scrollToCoordinate: createCommonMethod('scrollToCoordinate') as Components.RevoGrid['scrollToCoordinate'],
    setCellEdit: createCommonMethod('setCellEdit') as Components.RevoGrid['setCellEdit'],
    setCellsFocus: createCommonMethod('setCellsFocus') as Components.RevoGrid['setCellsFocus'],
    registerVNode: createCommonMethod('registerVNode') as Components.RevoGrid['registerVNode'],
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
  },
  render: createCommonRender('revo-grid', ['contentsizechanged', 'beforeedit', 'beforerangeedit', 'afteredit', 'beforeautofill', 'beforeange', 'afterfocus', 'roworderchanged', 'beforesourcesortingapply', 'beforesortingapply', 'beforesorting', 'rowdragstart', 'headerclick', 'beforecellfocus', 'beforefocuslost', 'beforesourceset', 'before-any-source', 'aftersourceset', 'beforecolumnsset', 'beforecolumnapplied', 'aftercolumnsset', 'beforefilterapply', 'beforefiltertrimmed', 'beforetrimmed', 'aftertrimmed', 'viewportscroll', 'beforeexport', 'beforeeditstart', 'aftercolumnresize', 'beforerowdefinition', 'filterconfigchanged', 'rowheaderschanged']),
});


export const RevogrClipboard = /*@__PURE__*/ Vue.extend({



  methods: {
    doCopy: createCommonMethod('doCopy') as Components.RevogrClipboard['doCopy'],
  },
  render: createCommonRender('revogr-clipboard', ['copyRegion', 'pasteRegion']),
});


export const RevogrData = /*@__PURE__*/ Vue.extend({

  props: {
    readonly: {} as PropOptions<Components.RevogrData['readonly']>,
    range: {} as PropOptions<Components.RevogrData['range']>,
    rowClass: {} as PropOptions<Components.RevogrData['rowClass']>,
    rowSelectionStore: {} as PropOptions<Components.RevogrData['rowSelectionStore']>,
    viewportRow: {} as PropOptions<Components.RevogrData['viewportRow']>,
    viewportCol: {} as PropOptions<Components.RevogrData['viewportCol']>,
    dimensionRow: {} as PropOptions<Components.RevogrData['dimensionRow']>,
    colData: {} as PropOptions<Components.RevogrData['colData']>,
    dataStore: {} as PropOptions<Components.RevogrData['dataStore']>,
    type: {} as PropOptions<Components.RevogrData['type']>,
  },


  render: createCommonRender('revogr-data', ['dragStartCell', 'beforeRowRender', 'before-cell-render']),
});


export const RevogrEdit = /*@__PURE__*/ Vue.extend({

  props: {
    editCell: {} as PropOptions<Components.RevogrEdit['editCell']>,
    column: {} as PropOptions<Components.RevogrEdit['column']>,
    editor: {} as PropOptions<Components.RevogrEdit['editor']>,
    saveOnClose: {} as PropOptions<Components.RevogrEdit['saveOnClose']>,
  },


  methods: {
    cancel: createCommonMethod('cancel') as Components.RevogrEdit['cancel'],
  },
  render: createCommonRender('revogr-edit', ['cellEdit', 'closeEdit']),
});


export const RevogrFilterPanel = /*@__PURE__*/ Vue.extend({

  props: {
    uuid: {} as PropOptions<Components.RevogrFilterPanel['uuid']>,
    filterItems: {} as PropOptions<Components.RevogrFilterPanel['filterItems']>,
    filterTypes: {} as PropOptions<Components.RevogrFilterPanel['filterTypes']>,
    filterNames: {} as PropOptions<Components.RevogrFilterPanel['filterNames']>,
    filterEntities: {} as PropOptions<Components.RevogrFilterPanel['filterEntities']>,
    filterCaptions: {} as PropOptions<Components.RevogrFilterPanel['filterCaptions']>,
    disableDynamicFiltering: {} as PropOptions<Components.RevogrFilterPanel['disableDynamicFiltering']>,
  },


  methods: {
    show: createCommonMethod('show') as Components.RevogrFilterPanel['show'],
    getChanges: createCommonMethod('getChanges') as Components.RevogrFilterPanel['getChanges'],
  },
  render: createCommonRender('revogr-filter-panel', ['filterChange']),
});


export const RevogrFocus = /*@__PURE__*/ Vue.extend({

  props: {
    selectionStore: {} as PropOptions<Components.RevogrFocus['selectionStore']>,
    dimensionRow: {} as PropOptions<Components.RevogrFocus['dimensionRow']>,
    dimensionCol: {} as PropOptions<Components.RevogrFocus['dimensionCol']>,
    dataStore: {} as PropOptions<Components.RevogrFocus['dataStore']>,
    colData: {} as PropOptions<Components.RevogrFocus['colData']>,
    colType: {} as PropOptions<Components.RevogrFocus['colType']>,
    rowType: {} as PropOptions<Components.RevogrFocus['rowType']>,
    focusTemplate: {} as PropOptions<Components.RevogrFocus['focusTemplate']>,
  },


  render: createCommonRender('revogr-focus', ['before-focus-render', 'afterfocus']),
});


export const RevogrHeader = /*@__PURE__*/ Vue.extend({

  props: {
    viewportCol: {} as PropOptions<Components.RevogrHeader['viewportCol']>,
    dimensionCol: {} as PropOptions<Components.RevogrHeader['dimensionCol']>,
    selectionStore: {} as PropOptions<Components.RevogrHeader['selectionStore']>,
    parent: {} as PropOptions<Components.RevogrHeader['parent']>,
    groups: {} as PropOptions<Components.RevogrHeader['groups']>,
    groupingDepth: {} as PropOptions<Components.RevogrHeader['groupingDepth']>,
    canResize: {} as PropOptions<Components.RevogrHeader['canResize']>,
    colData: {} as PropOptions<Components.RevogrHeader['colData']>,
    columnFilter: {} as PropOptions<Components.RevogrHeader['columnFilter']>,
    type: {} as PropOptions<Components.RevogrHeader['type']>,
  },


  render: createCommonRender('revogr-header', ['initialHeaderClick', 'headerresize', 'before-resize', 'headerdblClick']),
});


export const RevogrOrderEditor = /*@__PURE__*/ Vue.extend({

  props: {
    parent: {} as PropOptions<Components.RevogrOrderEditor['parent']>,
    dimensionRow: {} as PropOptions<Components.RevogrOrderEditor['dimensionRow']>,
    dimensionCol: {} as PropOptions<Components.RevogrOrderEditor['dimensionCol']>,
    dataStore: {} as PropOptions<Components.RevogrOrderEditor['dataStore']>,
  },


  methods: {
    dragStart: createCommonMethod('dragStart') as Components.RevogrOrderEditor['dragStart'],
    endOrder: createCommonMethod('endOrder') as Components.RevogrOrderEditor['endOrder'],
    clearOrder: createCommonMethod('clearOrder') as Components.RevogrOrderEditor['clearOrder'],
  },
  render: createCommonRender('revogr-order-editor', ['internalRowDragStart', 'internalRowDragEnd', 'internalRowDrag', 'internalRowMouseMove', 'initialRowDropped']),
});


export const RevogrOverlaySelection = /*@__PURE__*/ Vue.extend({

  props: {
    readonly: {} as PropOptions<Components.RevogrOverlaySelection['readonly']>,
    range: {} as PropOptions<Components.RevogrOverlaySelection['range']>,
    canDrag: {} as PropOptions<Components.RevogrOverlaySelection['canDrag']>,
    useClipboard: {} as PropOptions<Components.RevogrOverlaySelection['useClipboard']>,
    selectionStore: {} as PropOptions<Components.RevogrOverlaySelection['selectionStore']>,
    dimensionRow: {} as PropOptions<Components.RevogrOverlaySelection['dimensionRow']>,
    dimensionCol: {} as PropOptions<Components.RevogrOverlaySelection['dimensionCol']>,
    dataStore: {} as PropOptions<Components.RevogrOverlaySelection['dataStore']>,
    colData: {} as PropOptions<Components.RevogrOverlaySelection['colData']>,
    lastCell: {} as PropOptions<Components.RevogrOverlaySelection['lastCell']>,
    editors: {} as PropOptions<Components.RevogrOverlaySelection['editors']>,
    applyChangesOnClose: {} as PropOptions<Components.RevogrOverlaySelection['applyChangesOnClose']>,
  },


  render: createCommonRender('revogr-overlay-selection', ['internalCopy', 'internalPaste', 'internalCellEdit', 'beforeFocusCell', 'setEdit', 'before-apply-range', 'before-set-range', 'before-edit-render', 'setRange', 'setTempRange', 'applyFocus', 'focusCell', 'beforeRangeDataApply', 'internalSelectionChanged', 'beforeRangeCopyApply', 'internalRangeDataApply', 'rangeClipboardCopy', 'rangeClipboardPaste', 'before-cell-save']),
});


export const RevogrRowHeaders = /*@__PURE__*/ Vue.extend({

  props: {
    height: {} as PropOptions<Components.RevogrRowHeaders['height']>,
    dataPorts: {} as PropOptions<Components.RevogrRowHeaders['dataPorts']>,
    headerProp: {} as PropOptions<Components.RevogrRowHeaders['headerProp']>,
    uiid: {} as PropOptions<Components.RevogrRowHeaders['uiid']>,
    rowClass: {} as PropOptions<Components.RevogrRowHeaders['rowClass']>,
    resize: {} as PropOptions<Components.RevogrRowHeaders['resize']>,
    rowHeaderColumn: {} as PropOptions<Components.RevogrRowHeaders['rowHeaderColumn']>,
  },


  render: createCommonRender('revogr-row-headers', ['scrollViewport', 'elementToScroll']),
});


export const RevogrScrollVirtual = /*@__PURE__*/ Vue.extend({

  props: {
    dimension: {} as PropOptions<Components.RevogrScrollVirtual['dimension']>,
    viewportStore: {} as PropOptions<Components.RevogrScrollVirtual['viewportStore']>,
    dimensionStore: {} as PropOptions<Components.RevogrScrollVirtual['dimensionStore']>,
  },


  methods: {
    setScroll: createCommonMethod('setScroll') as Components.RevogrScrollVirtual['setScroll'],
    changeScroll: createCommonMethod('changeScroll') as Components.RevogrScrollVirtual['changeScroll'],
  },
  render: createCommonRender('revogr-scroll-virtual', ['scrollVirtual']),
});


export const RevogrTempRange = /*@__PURE__*/ Vue.extend({

  props: {
    selectionStore: {} as PropOptions<Components.RevogrTempRange['selectionStore']>,
    dimensionRow: {} as PropOptions<Components.RevogrTempRange['dimensionRow']>,
    dimensionCol: {} as PropOptions<Components.RevogrTempRange['dimensionCol']>,
  },


  render: createCommonRender('revogr-temp-range', []),
});


export const RevogrViewportScroll = /*@__PURE__*/ Vue.extend({

  props: {
    contentWidth: {} as PropOptions<Components.RevogrViewportScroll['contentWidth']>,
    contentHeight: {} as PropOptions<Components.RevogrViewportScroll['contentHeight']>,
  },


  methods: {
    setScroll: createCommonMethod('setScroll') as Components.RevogrViewportScroll['setScroll'],
    changeScroll: createCommonMethod('changeScroll') as Components.RevogrViewportScroll['changeScroll'],
  },
  render: createCommonRender('revogr-viewport-scroll', ['scrollViewport', 'resizeViewport', 'scrollchange']),
});

