import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'
import colors from 'vuetify/lib/util/colors'

import { VDataTable, VDataTableServer } from 'vuetify/labs/VDataTable'

export default createVuetify({
  components: {
    ...components,
    VDataTable,
    VDataTableServer
  },
  directives,
  theme: {
    themes: {
      light: {
        primary: '#40545e',
        secondary: colors.purple.darken4,
        accent: colors.shades.black,
        error: colors.red.accent3
      }
    }
  }
})
