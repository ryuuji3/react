import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { relative, extname } from 'node:path'
import { URL, fileURLToPath } from 'node:url'
import { glob } from 'glob'

// Based on https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma
export default defineConfig({
  plugins: [
    react(),
    dts(),
    libInjectCss(),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: 'src/main.tsx',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      input: Object.fromEntries(
        glob.sync(
          'src/**/*.ts?(x)',
          { ignore: [
            'src/**/*.d.ts',
            'src/**/*.stories.tsx',
          ] },
        ).map(file => [
          relative(
            'src',
            file.slice(0, file.length - extname(file).length),
          ),
          fileURLToPath(new URL(file, import.meta.url)),
        ])
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      }
    }
  },
})
