import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import stylisticJs from '@stylistic/eslint-plugin-js'


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
  {
    plugins: { "@stylistic/js": stylisticJs },
    rules: {
      "semi": ["error", "always"],
      "indent": ["error", 2],
      "@stylistic/js/array-bracket-newline": ["error", "always"]

    }
  }
]);