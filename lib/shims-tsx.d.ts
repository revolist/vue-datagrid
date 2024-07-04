import {
  VNode,
} from '@revolist/revogrid/dist/types/stencil-public-runtime';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
  }
}
