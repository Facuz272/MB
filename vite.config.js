import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config — single-page app with the existing index.html as the entry.
// The React plugin handles JSX compilation at BUILD time (not in the browser),
// which is the entire reason for this build step.
//
// `base: './'` produces relative asset paths in dist/index.html so the build
// can be deployed to a sub-path or opened from a static host without rewrite.
//
// `build.minify: 'esbuild'` (the default) keeps the bundle small and the build
// fast. `build.target: 'es2020'` matches modern browsers + iOS Safari 14+.
//
// `build.assetsInlineLimit: 0` keeps all assets as external files (no base64
// inlining) so the existing /images/ structure stays intact.

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    target: 'es2020',
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        // Predictable filenames help when wiring up CDN cache headers.
        entryFileNames: 'assets/main-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
  server: {
    port: 5173,
    strictPort: false,
  },
});
