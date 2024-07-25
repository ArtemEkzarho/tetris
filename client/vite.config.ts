import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config({ path: '../.env' })

export default defineConfig((config) => {
  console.log(config)
  return {
    plugins: [react()],
    server:
      config.mode === 'development'
        ? {
            proxy: {
              '/api': {
                target: `http://localhost:${process.env.PORT}`,
                changeOrigin: true,
              },
            },
          }
        : undefined,
  }
})
