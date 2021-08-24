import basicConfig, { name, file } from './rollup.config'
export default {
  ...basicConfig,
  output: {
    name: 'vueComponents',
    file: file('umd'),
    format: 'umd',
    globals: {
      'vue': 'Vue',
      'lodash-es': '_'
    },
    exports: 'named'
  }
}