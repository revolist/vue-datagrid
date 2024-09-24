import { VueConstructor } from 'vue';
import { VGridVueTemplateConstructor } from './renderer';
import {
  ColumnDataSchemaModel,
  EditCell,
  EditorBase,
  HyperFunc,
  SaveData,
  VNode,
} from '@revolist/revogrid';

/**
 * Data passed to editor
 */
export type EditorType = {
  column: ColumnDataSchemaModel;
  save: (value: SaveData, preventFocus?: boolean) => void;
  close: (focusNext?: boolean) => void;
} & Partial<EditCell>;

/**
 * Vue editor adapter
 */
// TODO: provide passage of vue component to renderers
export default class VueEditorAdapter implements EditorBase {
  public element: Element | null = null;
  public editCell?: EditCell;
  private vueEl: Vue | undefined;

  constructor(
    private VueEditorConstructor: VueConstructor,
    public column: ColumnDataSchemaModel,
    private save: (value: SaveData, preventFocus?: boolean) => void,
    private close: (focusNext?: boolean) => void
  ) {}

  // optional, called after editor rendered
  componentDidRender() {}

  // optional, called after editor destroyed
  disconnectedCallback() {
    this.vueEl?.$destroy();
    this.vueEl = undefined;
  }

  render(h: HyperFunc<VNode>, addition: any) {
    return h('span', {
      key: `${this.column.prop}-${this.editCell?.rowIndex || 0}`,
      ref: (el: HTMLElement) => this.renderAdapter(el, addition),
    });
  }

  private renderAdapter(el?: HTMLElement, addition?: any) {
    if (!el) {
      return;
    }
    const editorData: EditorType = {
      ...this.editCell,
      column: this.column,
      save: this.save,
      close: this.close,
    };
    const template = VGridVueTemplateConstructor(
      this.VueEditorConstructor,
      el,
      editorData,
      addition
    ) as Vue | undefined;
    if (!template) {
      return;
    }
    this.vueEl = template;
  }
}
