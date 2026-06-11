import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

function safeCopyPublic(): import('vite').Plugin {
  return {
    name: 'safe-copy-public',
    apply: 'build',
    closeBundle() {
      const publicDir = path.resolve(__dirname, 'public');
      const outDir = path.resolve(__dirname, 'dist');
      if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
      const entries = fs.readdirSync(publicDir);
      for (const entry of entries) {
        const src = path.join(publicDir, entry);
        const dest = path.join(outDir, entry);
        try {
          if (!fs.statSync(src).isFile()) continue;
          // Use readFileSync + writeFileSync to avoid EAGAIN on copyFileSync
          const data = fs.readFileSync(src);
          fs.writeFileSync(dest, data);
        } catch {
          // silently skip locked or unreadable files
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), safeCopyPublic()],
  build: {
    copyPublicDir: false,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
