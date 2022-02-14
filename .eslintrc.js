module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  "rules": {
    "comma-dangle": ["error", "only-multiline"],
    "semi": ["error", "always"],
    "vue/multi-word-component-names": 0,
    // "max-len": ["error", { "code": 80 }],
    // "max-len": [2, "error", {
    //   "code": 80,
    //   "tabWidth": 4,
    //   "ignoreUrls": true
    // }]
  }
}
