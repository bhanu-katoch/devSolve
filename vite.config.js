import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: './',  // Important for deployment on Vercel,
  server: {
    proxy: {
      "/api/send-otp": {
        target: "https://68a307f100086675700a.fra.appwrite.run",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/send-otp/, ""),
      },
      "/api/verify-otp": {
        target: "https://68a3084e0002dd83d8df.fra.appwrite.run/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/verify-otp/, "")
      },
      "/api/otp-verify-project": {
        target: "https://68a4049b0024220438d1.fra.appwrite.run/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/verify-otp-project/, "")
      },
    },
  },
})
