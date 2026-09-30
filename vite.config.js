import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
  server: {
    port: 5173,
    strictPort: true,
    host: true,
  }
})
