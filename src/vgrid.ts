import { Component } from "vue";
import * as loader from "@revolist/revogrid/custom-element";
import vueGrid from './component';
import { AsyncComponent } from "vue/types/options";
import vueTemplate, {vueTemplateConstructor} from "./vue-template";
import vueEditor from "./vue-editor";

let isDefined = false;
export const VGrid: AsyncComponent = (resolve: (c: Component) => void) => {
  if (!isDefined && loader?.defineCustomElements) {
    loader?.defineCustomElements();
    isDefined = true;
  }
  resolve(vueGrid);
  return;
};

let installed = false;

function install (Vue: any) {
  if (installed) {
    return;
  }
  installed = true;
  Vue.component('vue-data-grid', VGrid);
}
export const VGridPlugin = {
  install
};

// Vue template wrapper for virtual nodes
export const VGridVueTemplate = vueTemplate;

// Vue adapter to convert vue component into VNode
export const VGridVueTemplateConstructor = vueTemplateConstructor;

// Vue editor wrapper
export const VGridVueEditor = vueEditor;

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(VGridPlugin)
}
export default VGrid;
