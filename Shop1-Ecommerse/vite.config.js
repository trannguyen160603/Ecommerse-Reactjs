import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/assets/styles'),
      '@icon': path.resolve(__dirname, 'src/assets/icon'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://be-project-reactjs.onrender.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api/v1'),
      },
    },
    watch: {
      usePolling: true,
    },
    hmr: {
      overlay: false,
    },
  },
  optimizeDeps: {
    exclude: ['js-cookie'],
  },
  build: {
    sourcemap: true,
    emptyOutDir: true,
    outDir: 'dist',
  },
});
