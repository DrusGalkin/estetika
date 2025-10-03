import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

export default defineConfig({
  plugins: [
    react(),
    viteCommonjs()
  ],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
      include: [/wowjs/, /node_modules/]
    }
  },
  optimizeDeps: {
    include: ['wowjs']
  }
})