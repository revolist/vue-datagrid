import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';

export default defineConfig({
  plugins: [vue()],
  server: {
    open: '/demo.html', // Automatically open demo.html
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm.js', // Alias to use the full build of Vue
      '@revolist/vue-datagrid': '../lib'
    }
  },
});
