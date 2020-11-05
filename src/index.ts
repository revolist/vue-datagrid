import { Component } from "vue";
import * as loader from '@revolist/revogrid/loader';
import vueGrid from './vgrid';

export const VGrid = function(resolve: (c: Component) => void, reject: () => void) {
  if (loader?.defineCustomElements) {
    loader?.defineCustomElements()
      .then(() => resolve(vueGrid))
      .catch(reject);
    return;
  }
  resolve(vueGrid);
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
