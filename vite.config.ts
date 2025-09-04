import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  }, // <-- Add a comma here
  preview: {
    host: true,
    allowedHosts: ['n8n-portafolio.mv7mvl.easypanel.host']
  }
})