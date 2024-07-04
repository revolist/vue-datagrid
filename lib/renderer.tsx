import Vue, { VueConstructor } from 'vue';

/**
 * Vue template factory
 */
interface VueElement extends HTMLElement {
  __vue__?: Vue;
}

/**
 * Vue adapter to convert vue component into VNode
 */
export const VGridVueTemplateConstructor = (
  vueCtr: VueConstructor,
  e?: HTMLElement,
  p?: Record<string, any>,
  addition?: { vue: Vue },
) => {
  if (!e) {
    return null;
  }

  let el: VueElement | undefined;
  if (e?.childNodes.length) {
    el = e.childNodes[0] as VueElement;
  }

  if (!el) {
    // create dom element wrapper for vue instance
    el = document.createElement('span');
    e.appendChild(el);

    // if passed as simple structure convert it to vue object
    if (typeof vueCtr === 'object') {
      vueCtr = Vue.extend(vueCtr);
    }
    // create vue instance
    return new vueCtr({ el, propsData: p, parent: addition?.vue });
  }

  // check, probably vue instance already inited
  let vueInstance = el.__vue__;
  // if exists, return
  if (vueInstance && p) {
    // if vue inited just update it's properties
    for (const k in p) {
      vueInstance.$props[k] = p[k];
    }
  }
  return vueInstance;
};

/**
 * Vue template wrapper for virtual nodes
 */
export const Template = (cntr: VueConstructor, customProps?: any) => {
  return (h: Function, p: any, addition?: any) => {
    const props = customProps ? { ...customProps, ...p } : p;
    const wrapper = (
      <span
        ref={(el: HTMLElement) => VGridVueTemplateConstructor(cntr, el, props, addition)}
      />
    );
    return wrapper;
  };
};

