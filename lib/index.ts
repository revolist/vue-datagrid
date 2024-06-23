import { RevoGrid } from './revogrid';
import { defineCustomElements } from '@revolist/revogrid/loader';
export { default as VGridVueTemplate, VGridVueTemplateConstructor } from './renderer';
export { default as VGridVueEditor } from './editor';
export type * from '@revolist/revogrid';

export const VGrid = (async () => {
    await (defineCustomElements() as unknown as Promise<void>);
    return RevoGrid;
  });
  
  export default VGrid;