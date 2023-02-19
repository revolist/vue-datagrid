import { RevoGrid } from '@revolist/revogrid/dist/types/interfaces';
import { VueConstructor } from 'vue/types/umd';
import VueEditorAdapter from './vue-editor-adapter';

/**
 * Vue editor factory
 * @param vueConstructor 
 * @returns 
 */
const vueEditor = (vueConstructor: VueConstructor) => {
  return function (
    column: RevoGrid.ColumnDataSchemaModel,
    save: Function,
    close: Function
  ) {
    const adapter = new VueEditorAdapter(vueConstructor, column, save, close);
    return adapter;
  };
};

export default vueEditor;
