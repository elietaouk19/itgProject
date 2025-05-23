import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
      tailwindcss()

  ],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@common': '/src/common',
      '@layouts': '/src/layouts',
      '@pages': '/src/pages',
      '@assets': '/src/assets',

    },
  },
})
