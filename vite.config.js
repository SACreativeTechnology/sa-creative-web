import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs-extra'

// Custom plugin to copy assets folder to dist
const copyAssetsPlugin = () => {
  return {
    name: 'copy-assets-plugin',
    closeBundle: async () => {
      // Ensure the assets folder exists
      if (fs.existsSync('assets')) {
        // Copy the entire assets folder to the dist directory
        await fs.copy('assets', 'dist/assets')
        console.log('✓ Assets folder copied to dist/assets')
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copyAssetsPlugin()
  ],
  base: './', // Use relative paths in production build
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Where processed assets will go
    // Keep other asset settings default for normal operation
  }
})