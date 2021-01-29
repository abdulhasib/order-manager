import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
	icons: {
		iconfont: 'mdi'
	},
	theme: {
    themes: {
      light: {
        primary: '#40545e',
        secondary: colors.purple.darken4,
        accent: colors.shades.black,
        error: colors.red.accent3,
      }
    }
  }
})
