
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
    }
  },
  optimizeDeps: {
    exclude: ['js-cookie'], // Loại bỏ js-cookie khỏi tối ưu hóa
  },
  server: {
    watch: {
      usePolling: true, // Đảm bảo Vite theo dõi file thay đổi chính xác
    },
    hmr: {
      overlay: false, // Tắt overlay lỗi khi hot reload
    },
  },
  build: {
    sourcemap: true, // Hỗ trợ debug tốt hơn
    emptyOutDir: true, // Xoá thư mục `dist` trước khi build mới
    outDir: 'dist', // Đảm bảo build ra thư mục chuẩn
  }
});
