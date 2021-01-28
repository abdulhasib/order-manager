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
				primary: colors.green.base,
				secondary: colors.blue.darken3,
				accent: colors.yellow.darken2,
				info: colors.purple.darken2,
				success: colors.green.darken3,
				warning: '#FA7921',
				error: colors.red.darken2
			}
		}
	}
})
