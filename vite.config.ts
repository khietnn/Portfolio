import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' để cùng một bản build chạy được cả trên Vercel (/) lẫn GitHub Pages (/Portfolio/)
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
