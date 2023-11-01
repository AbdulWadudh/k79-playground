import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const VERTEX_BASE_URL = process.env.VITE_VERTEX_BASE_URL ?? 'http://localhost:4000';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: VERTEX_BASE_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
