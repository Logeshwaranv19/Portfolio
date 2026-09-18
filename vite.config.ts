import { defineConfig, loadEnv } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    envPrefix: ['VITE_', 'GMAIL_'],
    define: {
      'process.env.GMAIL_USER': JSON.stringify(env.GMAIL_USER || 'logeshwaranv19@gmail.com'),
      'process.env.GMAIL_APP_PASS': JSON.stringify(env.GMAIL_APP_PASS || env.VITE_GMAIL_APP_PASS || ''),
    },
    resolve: { tsconfigPaths: true },
    plugins: [
      devtools(),
      nitro({ rollupConfig: { external: [/^@sentry\//] } }),
      tailwindcss(),
      tanstackStart(),
      viteReact(),
    ],
  };
})

