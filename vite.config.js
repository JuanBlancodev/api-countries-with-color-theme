import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import terser from '@rollup/plugin-terser'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), terser()],
  css: {
    postcss: {
      plugins: [
        autoprefixer({})
      ]
    }
  }
})
