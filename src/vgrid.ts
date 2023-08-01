import vueGrid from "./component";
import vueTemplate, { vueTemplateConstructor } from "./vue-template";
import vueEditor from "./vue-editor";

import { defineCustomElements } from "@revolist/revogrid/loader";
import { AsyncComponent } from "vue";

let installed = false;
function install(Vue: any) {
  if (installed) {
    return;
  }
  installed = true;
  Vue.component("vue-data-grid", VGrid);
}
export const VGridPlugin = {
  install,
};

const defined = defineCustomElements();
export const VGrid: AsyncComponent = async () => {
  await defined;
  return vueGrid;
};

// Vue template wrapper for virtual nodes
export const VGridVueTemplate = vueTemplate;

// Vue adapter to convert vue component into VNode
export const VGridVueTemplateConstructor = vueTemplateConstructor;

// Vue editor wrapper
export const VGridVueEditor = vueEditor;

// Auto-install
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(VGridPlugin);
}
export default VGrid;
