import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { lingui } from "@lingui/vite-plugin"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
        preact({
            babel: {
                plugins: ['macros']
            }
        }),
        lingui()
    ],
})
