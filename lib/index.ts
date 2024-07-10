import { RevoGrid } from './revogrid';
import { defineCustomElements } from '@revolist/revogrid/loader';
export { Template as VGridVueTemplate, VGridVueTemplateConstructor } from './renderer';
export { Editor as VGridVueEditor } from './editor';
export { type EditorType } from './editor.adapter';
export type * from '@revolist/revogrid';

export const VGrid = (async () => {
    await (defineCustomElements() as unknown as Promise<void>);
    return RevoGrid;
});
  
export default VGrid;