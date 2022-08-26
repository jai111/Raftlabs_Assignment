module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        'arrow-parens': ['error', 'as-needed'],
        'comma-dangle': ['error', 'only-multiline'],
        'consistent-return': 'off',
        'global-require': 'off',
        indent: ['error', 4, { SwitchCase: 2 }],
        'max-len': ['warn', 130],
        'no-alert': 'off',
        'no-confusing-arrow': 'off',
        'no-console': 'off',
        'no-param-reassign': 'off',
        'no-underscore-dangle': 'off',
        'prefer-promise-reject-errors': 'warn',
        'prefer-template': 'warn',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/forbid-prop-types': 'warn',
        'react/jsx-closing-tag-location': 'error',
        'react/jsx-filename-extension': 'off',
        'react/jsx-no-target-blank': 'warn',
        'react/jsx-one-expression-per-line': 'off',
        'react/no-multi-comp': 'off',
        'react/no-unescaped-entities': 'off',
        'react/prefer-stateless-function': 'warn',
        'react/destructuring-assignment': 'off',
        'react/prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        'jsx-a11y/label-has-for': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['to'],
                aspects: ['noHref', 'invalidHref', 'preferButton'],
            },
        ],
        'import/default': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-named-as-default': 'error',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': [
            'error',
            { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
        ],
        'react/no-array-index-key': 'off'
    },
};
