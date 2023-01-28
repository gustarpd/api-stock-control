export const parser = '@typescript-eslint/parser';
export const extend = ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'];
export const parserOptions = {
    ecmaVersion: 2020,
    sourceType: 'module',
};
export const env = {
    es6: true,
    node: true,
};
export const rules = {
    'no-var': 'error',
    semi: 'error',
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-multi-spaces': 'error',
    'space-in-parens': 'error',
    'no-multiple-empty-lines': 'error',
    'prefer-const': 'error',
};