import { VueConstructor } from 'vue/types/umd';
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
    private close: (focusNext?: boolean) => void,
  ) {}

  // optional, called after editor rendered
  componentDidRender() {}

  // optional, called after editor destroyed
  disconnectedCallback() {
    this.vueEl?.$destroy();
    this.vueEl = undefined;
  }

  render(h: HyperFunc<VNode>, addition: any) {
    return <span ref={(e: HTMLElement) => this.renderAdapter(e, addition)} />;
  }

  private renderAdapter(el?: HTMLElement, addition?: any) {
    if (!el) {
      return;
    }
    const template = VGridVueTemplateConstructor(
      this.VueEditorConstructor,
      el,
      {
        ...this.editCell,
        save: this.save,
        close: this.close,
      },
      addition
    );
    if (!template) {
      return;
    }
    this.vueEl = template;
  }
}
