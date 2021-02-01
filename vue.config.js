module.exports = {
	lintOnSave: true,
	transpileDependencies: ['vuetify'],
	productionSourceMap: false,
	css: {
		extract: false
	},
	configureWebpack: {
		mode: process.env.NODE_ENV === 'development' ? 'development' : 'production'
	},
	filenameHashing: process.env.NODE_ENV === 'development',
	assetsDir: process.env.DIST_PATH
}
