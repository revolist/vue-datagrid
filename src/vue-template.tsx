import Vue, { VueConstructor } from 'vue';

interface VueElement extends HTMLElement {
    __vue__?: Vue;
}
export const vueTemplateConstructor = (vueConstructor: VueConstructor, e: HTMLElement, p: Record<string, any>) => {
	if (!e) {
		return null;
	}

	let el: VueElement|undefined;
	if (e?.childNodes.length) {
			el = e.childNodes[0] as VueElement;
	}
	
	if (!el) {
		// create dom element wrapper for vue instance
		el = document.createElement('span');
		e.appendChild(el);

		// if passed as simple structure convert it to vue object
		if (typeof vueConstructor === 'object') {
			vueConstructor = Vue.extend(vueConstructor);
		}
		// create vue instance
		return new vueConstructor({ el, propsData: p, });
	}

	// check, probably vue instance already inited
	let vueInstance = el.__vue__;
	// if exists, return
	if (vueInstance) {
		// if vue inited just update it's properties
		for (const k in p) {
			vueInstance.$props[k] = p[k];
		}
	}
	return vueInstance;
};

const vueTemplate = (cntr: VueConstructor) => {
	return (h: Function, p: any) => {
		const wrapper = <span ref={(el: HTMLElement) => vueTemplateConstructor(cntr, el, p)}/>;
		return wrapper;
	};
};

export default vueTemplate;
