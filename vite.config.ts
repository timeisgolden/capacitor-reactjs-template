import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   commonjsOptions: {
  //     include: [/node_modules/]
  //   }
  // },
  server: {
    host: '192.168.0.156',
    port: 8100
  }
})
