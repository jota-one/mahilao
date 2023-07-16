import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
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
