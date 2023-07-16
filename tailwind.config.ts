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
          100: '#f6e0d7',
          DEFAULT: '#fc4801'
        },
        farming: {
          100: '#e7f8dc',
          DEFAULT: '#63fc00',
        },
      }
    }
  },
  safelist: [
    'safelisted',
    {
      pattern: /(bg|text)-(women|farming)/,
    },
    {
      pattern: /(bg)-(amber-300|orange-400|red-400)/,
    },
    {
      pattern: /grid-cols-\d/
    }
  ]
}
