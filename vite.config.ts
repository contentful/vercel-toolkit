/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      include: ['lib'],
    }),
  ],
  build: {
    ssr: true,
    minify: false,
    lib: {
      entry: {
        "app-router": resolve(__dirname, 'lib/app-router/index.ts'),
        "pages-router": resolve(__dirname, 'lib/pages-router/index.ts'),
      },
      formats: ['es']
    },
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies)],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'lib',
      },
    },
  },
});
