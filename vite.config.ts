import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      includeAssets: ['peach_128.png'],
      manifest: {
        name: 'Positive Doodle View',
        short_name: 'Doodles',
        description: 'Application for viewing, filtering, and saving positive doodles',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'peach_192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: "maskable any"
          },
          {
            src: 'peach_512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: "maskable any"
          }
        ]
      },
      devOptions: {
        enabled: true
      }
    })
  ],
})