import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import postcssImport from 'postcss-import'

export default {
  plugins: [postcssImport(), tailwind(), autoprefixer()]
}
