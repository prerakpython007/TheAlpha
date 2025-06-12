import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsInclude: ['**/*.gltf', '**/*.bin', '**/*.jpeg', '**/*.png'],
    copyPublicDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  publicDir: 'public',
  server: {
    host: true
  },
  assetsInclude: ['**/*.gltf', '**/*.bin']
})
