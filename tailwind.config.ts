import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons'

export default <Partial<Config>>{
  plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(['material-symbols']),
    }),
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Tahoma'],
        'display': ['Verveine'],
        'subtitle': ['Georgia']
      },
      colors: {
        primary: defaultTheme?.colors?.green,
        women: {
          200: '#E49977',
          500: '#E85F3F',
          DEFAULT: '#E85F3F',
        },
        farming: {
          200: '#9CA59A',
          500: '#4D7F41',
          DEFAULT: '#4D7F41',
        },
        neutral: {
          50: '#F7F3F2',
          200: '#E5DCDA',
          500: '#968780',
          DEFAULT: '#968780'
        }
      }
    }
  },
  safelist: [
    {
      pattern: /(bg|text|ring|border)-(women|farming|neutral|white)(-\d+)?/,
    },
    {
      pattern: /(bg)-(amber-300|orange-400|red-400)/,
    },
    {
      pattern: /grid-cols-\d/
    }
  ]
}
