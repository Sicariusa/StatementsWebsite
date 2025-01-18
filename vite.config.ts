import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-components': [
            '@/components/ui/button',
            '@/components/ui/card',
            '@/components/ui/input',
            '@/components/ui/textarea'
          ],
          'animations': ['framer-motion'],
          'icons': ['lucide-react'],
          'utils': ['@/lib/utils', '@emailjs/browser', 'sweetalert2']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: true
  }
});
