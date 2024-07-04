import { VueConstructor } from 'vue';
import { ColumnDataSchemaModel, EditorCtr, SaveData } from '@revolist/revogrid';
import VueEditorAdapter from './editor.adapter';

/**
 * Create editor constructor.
 * This function creates editor constructor by wrapping it with VueEditorAdapter
 * which is responsible for connecting editor with Vue lifecycle events
 */
export const Editor = (vueConstructor: VueConstructor): EditorCtr => {
  return function (
    column: ColumnDataSchemaModel,
    save: (value: SaveData, preventFocus?: boolean) => void,
    close: (focusNext?: boolean) => void
  ) {
    return new VueEditorAdapter(vueConstructor, column, save, close);
  };
};

