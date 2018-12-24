module.exports = {
  root: true,
  extends: ['prettier', 'airbnb', 'plugin:lodash/recommended', 'plugin:import/errors', 'plugin:import/warnings'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  rules: {
    'import/default': ['error'],
    'import/named': ['error'],
    'import/namespace': ['error', { allowComputed: false }],
    'import/prefer-default-export': ['warn'],
    'linebreak-style': 'off',
    'comma-dangle': ['error', 'never'],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreUrls: true,
        ignoreRegExpLiterals: true
      }
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/forbid-prop-types': ['error', { forbid: ['any'] }],
    'react/no-array-index-key': ['warn'],
    'react/jsx-filename-extension': 'off',
    'lodash/prefer-lodash-method': 'off',
    'lodash/prefer-includes': 'off',
    'lodash/prefer-lodash-typecheck': 'off',
    'lodash/matches-prop-shorthand': 'off',
    'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
    'no-return-assign': [2, 'except-parens'],
    'react/prefer-stateless-function': [1, { ignorePureComponents: true }]
  },
  overrides: [
    {
      files: ['*.*'],
      rules: {
        'import/prefer-default-export': 'off'
      }
    }
  ]
};
