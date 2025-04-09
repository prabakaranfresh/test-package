import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: 'src/VirtualAgent.tsx',
      name: 'VirtualAgent',
      fileName: 'VirtualAgent',
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react-dom']
    }
  }
})