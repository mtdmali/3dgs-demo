// @ts-check
import { defineConfig } from 'astro/config'
import crossOriginIsolation from 'vite-plugin-cross-origin-isolation'

// https://astro.build/config
export default defineConfig({
  vite: {
    // Example: Add custom vite plugins directly to your Astro project
    plugins: [crossOriginIsolation()],
  },
})
