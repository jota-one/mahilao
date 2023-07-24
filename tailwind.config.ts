import type { Config } from 'tailwindcss'
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons'
import flowbite from 'flowbite/plugin'

export default <Partial<Config>>{
  plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(['material-symbols']),
    }),
    flowbite
  ],
  content: [
    './node_modules/flowbite/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Tahoma'],
        'display': ['Verveine'],
        'subtitle': ['Georgia']
      },
      colors: {
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
          DEFAULT: '#968780',
          900: '#2a2625'
        },
        title: {
          DEFAULT: '#333333'
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
      pattern: /grid-cols-\d+/,
      variants: ['sm']
    }
  ]
}
