import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { createVuePlugin as vuePlugin } from 'vite-plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vuePlugin(),
    dts({ rollupTypes: true, include: ['lib'] }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'), // Library entry file
      name: 'VueDatagrid',
    },
    rollupOptions: {
      input: {
        main: 'lib/index.ts',
      },
      external: [
        'vue',
        /node_modules/,
        /@revolist\/revogrid/,
        '@revolist/revogrid/loader',
      ],
      output: {
        exports: 'named',
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          vue: 'Vue',
          '@revolist/revogrid': 'Revogrid',
          '@revolist/revogrid/loader': 'RevogridLoader',
        },
      },
    },
  },
  server: {
    open: '/demo/index.html',
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm.js',
      '@revolist/vue-datagrid': resolve(__dirname, './lib'),
    }
  }
});
