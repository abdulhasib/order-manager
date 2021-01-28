module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ['prettier/vue', 'plugin:vue/recommended', 'eslint:recommended'],
	plugins: ['prettier', 'vue'],
	rules: {
		'no-useless-escape': 0,
		'comma-dangle': ['error', 'never'],
		'max-len': ['error', { code: 500, tabWidth: 4, ignoreStrings: true, ignoreComments: true, ignoreTemplateLiterals: true, ignoreRegExpLiterals: true, ignoreUrls: true }],
		'vue/max-attributes-per-line': [
			2,
			{
				singleline: 10,
				multiline: {
					max: 1,
					allowFirstLine: false
				}
			}
		],
		'vue/name-property-casing': ['error', 'kebab-case'],
		'vue/component-name-in-template-casing': ['error', 'kebab-case'],
		'vue/html-self-closing': [
			'error',
			{
				html: {
					void: 'never',
					normal: 'always',
					component: 'always'
				},
				svg: 'any',
				math: 'any'
			}
		],
		'vue/no-template-shadow': 'off',
		'vue/no-v-html': 'off',
		'no-shadow': 'off',
		'no-trailing-spaces': 'error',
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': 'error',
		'no-async-promise-executor': 'off'
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	globals: {
		axios: true,
		_: true,
		$zopim: true
	},
	settings: {
		'import/resolver': {
			node: {}
		}
	},
	overrides: [
		{
			files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
			env: {
				jest: true
			}
		}
	]
};
