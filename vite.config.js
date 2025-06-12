import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    copyPublicDir: true,
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: {
          'three-deps': ['three', '@react-three/fiber', '@react-three/drei'],
          vendor: ['react', 'react-dom']
        }
      }
    }
  },
  publicDir: resolve(__dirname, 'public'),
  server: {
    host: true
  }
})
