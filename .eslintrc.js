export default {
  // { ignores: ['node_modules/', 'dist/', '*.js'] },
  env: {
    browser: true, // Enables browser global variables like `window` and `document`
    es2021: true, // Enables modern ECMAScript features
    node: true, // Enables Node.js global variables like `process`
  },
  extends: [
    'eslint:recommended', // Base ESLint recommendations
    'plugin:react/recommended', // Recommended React rules
    'plugin:@typescript-eslint/recommended', // Recommended TypeScript rules
    'plugin:prettier/recommended', // Integrates Prettier with ESLint
  ],
  parser: '@typescript-eslint/parser', // Uses TypeScript parser
  parserOptions: {
    ecmaVersion: 12, // Latest ECMAScript version
    sourceType: 'module', // Use ESM syntax
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing for React
    },
  },
  plugins: [
    'react', // Enables React-specific rules
    '@typescript-eslint', // Enables TypeScript-specific rules
    'prettier', // Enables Prettier linting
  ],
  rules: {
    // **General ESLint Rules**
    'no-unused-vars': 'warn', // Warns on unused variables
    'no-console': 'warn', // Warns on `console.log` usage
    eqeqeq: 'error', // Enforces strict equality (`===`)

    // **React Rules**
    'react/prop-types': 'off', // Disables prop-types checks (TypeScript is used)
    'react/react-in-jsx-scope': 'off', // Not needed with React 17+
    'react/jsx-uses-react': 'off', // Not needed with React 17+

    // **TypeScript Rules**
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Ignore unused vars starting with `_`
    '@typescript-eslint/no-explicit-any': 'error', // Avoid using `any` type
    '@typescript-eslint/explicit-function-return-type': 'off', // Optional function return types

    // **Prettier Integration**
    'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }], // Enforces Prettier formatting

    // **Code Quality**
    curly: 'error', // Enforce consistent use of curly braces
    'no-multiple-empty-lines': ['error', { max: 1 }], // Limits consecutive blank lines
    'newline-before-return': 'error', // Enforce a blank line before return statements
  },
  settings: {
    react: {
      version: 'detect', // Automatically detects the React version
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Applies only to TypeScript files
      rules: {
        'no-undef': 'off', // Disables `no-undef` for TS (TS handles this)
      },
    },
  ],
};
