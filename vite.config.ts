import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import lingoCompiler from "lingo.dev/compiler";


const withLingo = lingoCompiler.vite({
  sourceRoot: "src",
  lingoDir: "lingo",
  sourceLocale: "en",
  targetLocales: ["es","es","hi","fr","de","ar", "zh", "ru"],
  rsc: false,
  useDirective: false,
  debug: false,
  models: "lingo.dev",
});

// https://vite.dev/config/
const viteConfig =  defineConfig({
  plugins: [react(),
    tailwindcss(),
],
})

export default withLingo(viteConfig);

