import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // default src as @
  resolve:{
    alias : [
      // path-1 setting to @
      {find:'@', replacement:path.resolve(__dirname,'src')},
    ]
  }
})
