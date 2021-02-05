import { Edition, RevoGrid } from '@revolist/revogrid/dist/types/interfaces';
import { VNode } from '@revolist/revogrid/dist/types/stencil-public-runtime';
import { VueConstructor } from 'vue/types/umd';
import { vueTemplateConstructor } from './vue-template';

export default class VueEditorAdapter {
	public element: Element|null = null;
	public editCell: Edition.EditCell|null = null;
	private vueEl: Vue|undefined;

	constructor(
			private VueEditorConstructor: VueConstructor,
			public column: RevoGrid.ColumnDataSchemaModel,
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

	render(h: RevoGrid.HyperFunc<VNode>) {
		return <span ref={(e: HTMLElement) => this.renderAdapter(e)}/>;
	}

	private renderAdapter(el?: HTMLElement) {
		if (!el) {
			return;
		}
		const template = vueTemplateConstructor(this.VueEditorConstructor, el, {
			...this.editCell,
			save: this.save,
			close: this.close
		});
		if (!template) {
			return;
		}
		this.vueEl = template;
	}
}