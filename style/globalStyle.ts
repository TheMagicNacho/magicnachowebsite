import { tw } from 'twind'
import { css, apply, theme } from 'twind/css'

export const globalStyles = css({
  ':global': {
    body: {
        backgroundColor: 'white',
    },

    a: {
      color: theme('colors.blue.500'),
      '&:hover': apply`text-blue-700`,
    },



    

  },
})