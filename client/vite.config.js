import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Use default Vite chunking instead of manualChunks object
    // which causes a "TypeError: manualChunks is not a function" in Rolldown
    // Use default esbuild minifier
    minify: true
  }
})
