import Vue, { VNode, CreateElement } from "vue";

export const createCommonRender = (
  tagName: string,
  eventNames: string[] = []
) =>
  function (this: Vue, createElement: CreateElement): VNode {
    const vueElement = this;
    const allListeners = eventNames.reduce((listeners, eventName) => {
      return {
        ...listeners,
        [eventName]: (event: CustomEvent<any>) => {
          vueElement.$emit(eventName, event);
        },
      };
    }, vueElement.$listeners);
     const domProps = vueElement.$props
      ? Object.keys(vueElement.$props).reduce((attrs: any, prop: string) => {
          // dashed-case
          attrs[toDashCase(prop)] = vueElement.$props[prop];
          // original-case
          attrs[prop] = vueElement.$props[prop];
          return attrs;
        }, {})
      : {};
    return createElement(
      tagName,
      {
        ref: "wc",
        domProps,
        on: allListeners,
        attrs: { "data-testid": tagName },
      },
      [vueElement.$slots.default]
    );
  };

export const createCommonMethod = (methodName: string) =>
  function (this: any, ...args: any[]) {
    this.$refs.wc[methodName](...args);
  } as unknown;

export const toLowerCase = (str: string) => str.toLowerCase();

export const toDashCase = (str: string) =>
  toLowerCase(
    str
      .replace(/([A-Z0-9])/g, (g) => " " + g[0])
      .trim()
      .replace(/ /g, "-")
  );
