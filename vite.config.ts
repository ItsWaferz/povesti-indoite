import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/povesti-indoite/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
