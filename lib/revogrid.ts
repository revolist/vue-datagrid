/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import Vue, { PropOptions } from 'vue';
import { createCommonRender, createCommonMethod } from './vue-component-lib/utils';

import type { Components } from '@revolist/revogrid';




const customElementTags: string[] = [
 'revo-grid',
 'revogr-clipboard',
 'revogr-data',
 'revogr-edit',
 'revogr-focus',
 'revogr-header',
 'revogr-order-editor',
 'revogr-overlay-selection',
 'revogr-row-headers',
 'revogr-scroll-virtual',
 'revogr-temp-range',
 'revogr-viewport-scroll',
 'vnode-html',
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
    focusTemplate: {} as PropOptions<Components.RevoGrid['focusTemplate']>,
    canMoveColumns: {} as PropOptions<Components.RevoGrid['canMoveColumns']>,
    trimmedRows: {} as PropOptions<Components.RevoGrid['trimmedRows']>,
    exporting: {} as PropOptions<Components.RevoGrid['exporting']>,
    grouping: {} as PropOptions<Components.RevoGrid['grouping']>,
    stretch: {} as PropOptions<Components.RevoGrid['stretch']>,
    additionalData: {} as PropOptions<Components.RevoGrid['additionalData']>,
    disableVirtualX: {} as PropOptions<Components.RevoGrid['disableVirtualX']>,
    disableVirtualY: {} as PropOptions<Components.RevoGrid['disableVirtualY']>,
    jobsBeforeRender: {} as PropOptions<Components.RevoGrid['jobsBeforeRender']>,
    registerVNode: {} as PropOptions<Components.RevoGrid['registerVNode']>,
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
  },
  render: createCommonRender('revo-grid', ['contentsizechanged', 'beforeedit', 'beforerangeedit', 'afteredit', 'beforeautofill', 'beforeange', 'afterfocus', 'roworderchanged', 'beforesortingapply', 'beforesorting', 'rowdragstart', 'headerclick', 'beforecellfocus', 'beforefocuslost', 'beforesourceset', 'beforeanysource', 'aftersourceset', 'afteranysource', 'beforecolumnsset', 'beforecolumnapplied', 'aftercolumnsset', 'beforefilterapply', 'beforefiltertrimmed', 'beforetrimmed', 'aftertrimmed', 'viewportscroll', 'beforeexport', 'beforeeditstart', 'aftercolumnresize', 'beforerowdefinition', 'filterconfigchanged', 'rowheaderschanged', 'beforegridrender', 'aftergridinit']),
});


export const RevogrClipboard = /*@__PURE__*/ Vue.extend({

  props: {
    readonly: {} as PropOptions<Components.RevogrClipboard['readonly']>,
  },


  methods: {
    doCopy: createCommonMethod('doCopy') as Components.RevogrClipboard['doCopy'],
  },
  render: createCommonRender('revogr-clipboard', ['beforepaste', 'beforepasteapply', 'pasteregion', 'afterpasteapply', 'beforecut', 'clearregion', 'beforecopy', 'beforecopyapply', 'copyregion']),
});


export const RevogrData = /*@__PURE__*/ Vue.extend({

  props: {
    readonly: {} as PropOptions<Components.RevogrData['readonly']>,
    range: {} as PropOptions<Components.RevogrData['range']>,
    rowClass: {} as PropOptions<Components.RevogrData['rowClass']>,
    additionalData: {} as PropOptions<Components.RevogrData['additionalData']>,
    rowSelectionStore: {} as PropOptions<Components.RevogrData['rowSelectionStore']>,
    viewportRow: {} as PropOptions<Components.RevogrData['viewportRow']>,
    viewportCol: {} as PropOptions<Components.RevogrData['viewportCol']>,
    dimensionRow: {} as PropOptions<Components.RevogrData['dimensionRow']>,
    colData: {} as PropOptions<Components.RevogrData['colData']>,
    dataStore: {} as PropOptions<Components.RevogrData['dataStore']>,
    type: {} as PropOptions<Components.RevogrData['type']>,
    colType: {} as PropOptions<Components.RevogrData['colType']>,
    jobsBeforeRender: {} as PropOptions<Components.RevogrData['jobsBeforeRender']>,
  },


  methods: {
    updateCell: createCommonMethod('updateCell') as Components.RevogrData['updateCell'],
  },
  render: createCommonRender('revogr-data', ['beforerowrender', 'afterrender', 'beforecellrender', 'dragstartcell']),
});


export const RevogrEdit = /*@__PURE__*/ Vue.extend({

  props: {
    editCell: {} as PropOptions<Components.RevogrEdit['editCell']>,
    column: {} as PropOptions<Components.RevogrEdit['column']>,
    editor: {} as PropOptions<Components.RevogrEdit['editor']>,
    saveOnClose: {} as PropOptions<Components.RevogrEdit['saveOnClose']>,
    additionalData: {} as PropOptions<Components.RevogrEdit['additionalData']>,
  },


  methods: {
    cancelChanges: createCommonMethod('cancelChanges') as Components.RevogrEdit['cancelChanges'],
    beforeDisconnect: createCommonMethod('beforeDisconnect') as Components.RevogrEdit['beforeDisconnect'],
  },
  render: createCommonRender('revogr-edit', ['celledit', 'closeedit']),
});


export const RevogrFocus = /*@__PURE__*/ Vue.extend({

  props: {
    colType: {} as PropOptions<Components.RevogrFocus['colType']>,
    rowType: {} as PropOptions<Components.RevogrFocus['rowType']>,
    selectionStore: {} as PropOptions<Components.RevogrFocus['selectionStore']>,
    dimensionRow: {} as PropOptions<Components.RevogrFocus['dimensionRow']>,
    dimensionCol: {} as PropOptions<Components.RevogrFocus['dimensionCol']>,
    dataStore: {} as PropOptions<Components.RevogrFocus['dataStore']>,
    colData: {} as PropOptions<Components.RevogrFocus['colData']>,
    focusTemplate: {} as PropOptions<Components.RevogrFocus['focusTemplate']>,
  },


  render: createCommonRender('revogr-focus', ['beforefocusrender', 'beforescrollintoview', 'afterfocus']),
});


export const RevogrHeader = /*@__PURE__*/ Vue.extend({

  props: {
    viewportCol: {} as PropOptions<Components.RevogrHeader['viewportCol']>,
    dimensionCol: {} as PropOptions<Components.RevogrHeader['dimensionCol']>,
    selectionStore: {} as PropOptions<Components.RevogrHeader['selectionStore']>,
    groups: {} as PropOptions<Components.RevogrHeader['groups']>,
    groupingDepth: {} as PropOptions<Components.RevogrHeader['groupingDepth']>,
    readonly: {} as PropOptions<Components.RevogrHeader['readonly']>,
    canResize: {} as PropOptions<Components.RevogrHeader['canResize']>,
    resizeHandler: {} as PropOptions<Components.RevogrHeader['resizeHandler']>,
    colData: {} as PropOptions<Components.RevogrHeader['colData']>,
    columnFilter: {} as PropOptions<Components.RevogrHeader['columnFilter']>,
    type: {} as PropOptions<Components.RevogrHeader['type']>,
    additionalData: {} as PropOptions<Components.RevogrHeader['additionalData']>,
  },


  render: createCommonRender('revogr-header', ['beforeheaderclick', 'headerresize', 'beforeheaderresize', 'headerdblclick']),
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
  render: createCommonRender('revogr-order-editor', ['rowdragstartinit', 'rowdragendinit', 'rowdragmoveinit', 'rowdragmousemove', 'rowdropinit']),
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
    additionalData: {} as PropOptions<Components.RevogrOverlaySelection['additionalData']>,
    isMobileDevice: {} as PropOptions<Components.RevogrOverlaySelection['isMobileDevice']>,
  },


  render: createCommonRender('revogr-overlay-selection', ['beforecopyregion', 'beforepasteregion', 'celleditapply', 'beforecellfocusinit', 'setedit', 'beforeapplyrange', 'beforesetrange', 'beforeeditrender', 'setrange', 'selectall', 'canceledit', 'settemprange', 'applyfocus', 'focuscell', 'beforerangedataapply', 'selectionchangeinit', 'beforerangecopyapply', 'rangeeditapply', 'clipboardrangecopy', 'clipboardrangepaste', 'beforekeydown', 'beforekeyup', 'beforecellsave']),
});


export const RevogrRowHeaders = /*@__PURE__*/ Vue.extend({

  props: {
    height: {} as PropOptions<Components.RevogrRowHeaders['height']>,
    dataPorts: {} as PropOptions<Components.RevogrRowHeaders['dataPorts']>,
    headerProp: {} as PropOptions<Components.RevogrRowHeaders['headerProp']>,
    rowClass: {} as PropOptions<Components.RevogrRowHeaders['rowClass']>,
    resize: {} as PropOptions<Components.RevogrRowHeaders['resize']>,
    rowHeaderColumn: {} as PropOptions<Components.RevogrRowHeaders['rowHeaderColumn']>,
    additionalData: {} as PropOptions<Components.RevogrRowHeaders['additionalData']>,
    jobsBeforeRender: {} as PropOptions<Components.RevogrRowHeaders['jobsBeforeRender']>,
  },


  render: createCommonRender('revogr-row-headers', ['scrollview', 'ref']),
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
  render: createCommonRender('revogr-scroll-virtual', ['scrollvirtual']),
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
    rowHeader: {} as PropOptions<Components.RevogrViewportScroll['rowHeader']>,
    contentWidth: {} as PropOptions<Components.RevogrViewportScroll['contentWidth']>,
    contentHeight: {} as PropOptions<Components.RevogrViewportScroll['contentHeight']>,
    colType: {} as PropOptions<Components.RevogrViewportScroll['colType']>,
  },


  methods: {
    setScroll: createCommonMethod('setScroll') as Components.RevogrViewportScroll['setScroll'],
    changeScroll: createCommonMethod('changeScroll') as Components.RevogrViewportScroll['changeScroll'],
    applyScroll: createCommonMethod('applyScroll') as Components.RevogrViewportScroll['applyScroll'],
  },
  render: createCommonRender('revogr-viewport-scroll', ['scrollviewport', 'resizeviewport', 'scrollchange', 'scrollviewportsilent']),
});


export const VnodeHtml = /*@__PURE__*/ Vue.extend({

  props: {
    redraw: {} as PropOptions<Components.VnodeHtml['redraw']>,
  },


  render: createCommonRender('vnode-html', ['html']),
});

