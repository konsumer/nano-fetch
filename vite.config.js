import { defineConfig } from 'vite'
import { resolve } from 'path'

const { NODE_ENV = 'dev' } = process.env

const options = {
  build: {
    target: 'esnext',
    lib: {
      entry: resolve('./src/index.js'),
      name: 'NanoFetch',
      formats: ['es', 'umd']
    }
  }
}

if (NODE_ENV === 'production') {
  options.esbuild = { minify: true }
}

export default defineConfig(options)
