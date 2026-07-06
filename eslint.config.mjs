// @ts-check
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig(
  {
    files: ['**/*.ts'],
    ignores: ['**/*.spec.ts', '**/*.specx.ts'],
    extends: [...tseslint.configs.recommended, ...tseslint.configs.stylistic, ...angular.configs.tsRecommended, eslintPluginPrettierRecommended],
    processor: angular.processInlineTemplates,
    rules: {
      'prettier/prettier': ['error'],
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': ['error', { parser: 'angular' }],
    },
  },
  prettierConfig
);
