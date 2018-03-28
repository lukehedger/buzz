import babel from 'rollup-plugin-babel'
import butternut from 'rollup-plugin-butternut'

import pkg from './package.json'

const isTest = process.env.TEST

export default {
  input: './lib/index.js',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: pkg.name,
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    !isTest && butternut(),
  ],
}
