import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: ".", // Define a raiz corretamente
  plugins: [react()],
  build: {
    outDir: "dist", // Define a pasta onde será gerado o build
  }
})
