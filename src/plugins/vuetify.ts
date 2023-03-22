/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          darkBlue: '#2D314D',
          limeGreen: '#31D35C',
          brightCyan: '#2BB7DA',
          grayishBlue: '#9698A6',
          lightGrayishBlue: '#F3F4F6',
          veryLightGray: '#FAFAFA',
          white: '#FFFFFF'
        },
      },
    },
  },
})
