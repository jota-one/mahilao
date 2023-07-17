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
      },
      colors: {
        primary: defaultTheme?.colors?.green,
        women: {
          50: '#faece6',
          100: '#f6e0d7',
          200: '#f6d1c1',
          300: '#f3bba4',
          400: '#f5aa8c',
          500: '#ea6e51',
          DEFAULT: '#ea6e51',
          600: '#e86648',
          700: '#ea502c'
        },
        farming: {
          50: '#f3fced',
          100: '#e7f8dc',
          200: '#bbd7a9',
          300: '#87a971',
          400: '#6f9158',
          500: '#3e7237',
          DEFAULT: '#3e7237',
          600: '#366b2f',
          700: '#2a7220',
        },
      }
    }
  },
  safelist: [
    {
      pattern: /(bg|text|ring)-(women|farming|stone|white)(-\d+)?/,
    },
    {
      pattern: /(bg)-(amber-300|orange-400|red-400)/,
    },
    {
      pattern: /grid-cols-\d/
    }
  ]
}
