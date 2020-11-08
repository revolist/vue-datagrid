<p align="center">
  <a href="https://revolist.github.io/revogrid">
    <img src="https://raw.githubusercontent.com/revolist/revogrid/master/assets/logo.svg" alt="RevoGrid" height="150" />
  </a>
</p>

##
<p align="center">
  <a href="https://www.npmjs.com/package/@revolist/revogrid"><img src="https://img.shields.io/npm/v/@revolist/vue-datagrid" alt="Latest Version on NPM"/></a>
  <a href="https://github.com/revolist/revogrid/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@revolist/revogrid" alt="Software License"/></a>
</p>
<h4 align="center">Powerful data grid component built on top of <a href="https://github.com/revolist/revogrid" target="_blank">RevoGrid</a>.</h4>
<p align="center">
Millions of cells and thousands columns easy and efficiently.
  
</p>

<p align="center">
  <a href="https://revolist.github.io/revogrid">Demo and API</a> •
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="https://github.com/revolist/revogrid/blob/master/src/components/revo-grid/readme.md">Docs</a> •
  <a href="#license">License</a>
</p>

<img src="https://raw.githubusercontent.com/revolist/revogrid/master/assets/material.jpg" alt="Material grid preview" width="100%" />
<i>RevoGrid material theme.</i>
<br>


## Key Features

- Millions of cells virtual viewport scroll with a powerful core is in-build by default;
- Keayboard support;
- Super light initial starter <img src="https://badgen.net/bundlephobia/min/@revolist/revogrid@latest" alt="Min size"/>. Can be imported with polifill or as module for modern browsers;
- Intelligent Virtual DOM and smart row recombination in order to achieve less redraws;
- Column and Row custom sizes;
- Column resizing;
- Pinned columns (columns are always on the left or on the right of the screen);
- Pinned row (rows are always at the top or at the bottom);
- Column grouping;
- Cell editing;
- Custom header renderer;
- Custom cell renderer templates (build your own cell view);
- Custom cell editor (apply your own editors and cell types);
- Custom cell properties;
- Drag and drop rows;
- Column sorting;
- Range selection;
- Range edit;
- Theme packages: Excel like, material, compact, dark or light;
- Copy/Paste: Copy/paste from Excel, Google Sheets or any other sheet format;
- Easy extenation and support with modern VNode features and tsx support;
- Hundred small customizations and improvements [RevoGrid](https://revolist.github.io/revogrid).


## Overview

The RevoGrid component helps represent a huge amount of data in a form of data table "excel like" or as list.
<br>
![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) |
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |


## How to use


With NPM:
```bash
npm i @revolist/vue-datagrid --save;
```

With Yarn:

```bash
yarn add @revolist/vue-datagrid;
```

[Sandbox](https://codesandbox.io/s/data-vue-test-3wkzi?file=/src/App.vue)
```vue
<template>
  <div id="app">
    <v-grid
      v-if="grid === 1"
      key="1"
      theme="compact"
      :source="rows"
      :columns="columns"
    ></v-grid>
  </div>
</template>

<script>
import VGrid from "@revolist/vue-datagrid";
export default {
  name: "App",
  data() {
    return {
      columns: [{
          prop: "name",
          name: "First",
        },
        {
          prop: "details",
          name: "Second",
      }],
      rows: [{
        name: "1",
        details: "Item 1",
      }]
    };
  },
  components: {
    VGrid,
  },
};
</script>
```

## Contributing

If you have any idea, feel free to open an issue to discuss a new feature and submit your changes back to me.


## License

MIT

