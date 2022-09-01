import { RevoGrid as vueGrid} from "./revogrid";
import vueTemplate, { vueTemplateConstructor } from "./vue-template";
import vueEditor from "./vue-editor";

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

export const VGrid = vueGrid;
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
