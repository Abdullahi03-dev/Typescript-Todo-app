import { defineConfig } from 'vite'
import {VitePWA} from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType:'autoUpdate',
      includeAssets:[
        'favicon.svg',
        'robots.txt',
        'apple-touch-icon.png'
      ],
      manifest:{
        name:'Todo App',
        short_name:'Todo List',
        description:'A sleek, dark-mode Todo app',
        theme_color:'#0f172a',
        background_color:'#0f172a',
        display:'standalone',
        start_url:'/',
        icons:[
          {"src":"/icons/icon-192x192.png","sizes":"192x192","type":"image/png"},
          {"src":"/icons/icon-512x512.png","sizes":"512x512","type":"image/png"}
        ]
      }
    })
  ],
})
