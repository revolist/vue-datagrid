import {
  VNode,
  JSXBase,
} from '@revolist/revogrid/dist/types/stencil-public-runtime';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}

    type NativeElements = {
      [K in keyof IntrinsicAttributes]: JSXBase.DOMAttributes<
        IntrinsicAttributes[K]
      >;
    };
    interface IntrinsicElements extends JSXBase.DOMAttributes<any> {
      [elem: string]: any;
    }
  }
}
