import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unimport from 'unimport/unplugin'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unimport.vite({
      dts: './src/auto-import.d.ts',
      presets: ['vue', 'pinia', '@vueuse/core'],
      dirs: ['./src/stores/*', './src/types/*', './src/constants/*']
    })
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }]
  }
})
