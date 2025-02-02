import base from './rollup.config.base'
import { terser } from 'rollup-plugin-terser'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'VueVirtualScroller',
    file: 'dist/vue-virtual-scroller-classic.min.js',
    format: 'iife',
    sourcemap: true,
    globals: {
      vue: 'Vue',
    },
  },
})

config.plugins.push(terser())

export default config
