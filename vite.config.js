import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const API_URLS = {
  development: "http://localhost:3001",
  production: "http://localhost:3000"
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log(`vite running in mode ${mode}`)

  return {
    plugins: [react()],
    define: {
      URL_API: JSON.stringify(API_URLS[mode])
    }
  }

})