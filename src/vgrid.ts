import { Component } from "vue";
import * as loader from '@revolist/revogrid/loader';
import vueGrid from './component';
import { AsyncComponent } from "vue/types/options";
import vueTemplate from "./vue-template";

export const VGrid: AsyncComponent = (resolve: (c: Component) => void, reject: () => void) => {
  if (loader?.defineCustomElements) {
    loader?.defineCustomElements()
      .then(() => resolve(vueGrid))
      .catch(reject);
      return;
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
