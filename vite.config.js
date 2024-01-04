import { defineConfig } from "vite";
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
    target: "ES2022"
  },
  server: {
    host:"0.0.0.0",
    port:3000,
    strictPort: true,
    hmr: {
      clientPort: 443 // Run the websocket server on the SSL port
    }
  }
});
