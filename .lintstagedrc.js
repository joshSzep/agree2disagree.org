module.exports = {
  // Run ESLint on JS, TS, JSX, and TSX files
  "**/*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  // Format other file types with Prettier
  "**/*.{json,md,mdx,css,html,yml,yaml}": [
    "prettier --write"
  ],
  // Run type checking on TypeScript files
  "**/*.{ts,tsx}": () => "pnpm type-check"
};
