import { VueConstructor } from 'vue/types/umd';
import { vueTemplateConstructor } from './vue-template';
import {
  ColumnDataSchemaModel,
  EditCell,
  HyperFunc,
  VNode,
} from '@revolist/revogrid';

/**
 * Vue editor adapter
 */
// TODO: provide passage of vue component to renderers
export default class VueEditorAdapter {
  public element: Element | null = null;
  public editCell: EditCell | null = null;
  private vueEl: Vue | undefined;

  constructor(
    private VueEditorConstructor: VueConstructor,
    public column: ColumnDataSchemaModel,
    private save: Function,
    private close: Function
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
    const template = vueTemplateConstructor(
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
