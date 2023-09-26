import { VueConstructor } from 'vue/types/umd';
import VueEditorAdapter from './vue-editor-adapter';
import { ColumnDataSchemaModel } from '@revolist/revogrid';

/**
 * Vue editor factory
 * @param vueConstructor
 * @returns
 */
// TODO: provide passage of vue component to renderers
const vueEditor = (vueConstructor: VueConstructor) => {
  return function (
    column: ColumnDataSchemaModel,
    save: Function,
    close: Function
  ) {
    const adapter = new VueEditorAdapter(vueConstructor, column, save, close);
    return adapter;
  };
};

export default vueEditor;
