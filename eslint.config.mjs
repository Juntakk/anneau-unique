// eslint.config.js
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import("eslint").Linter.FlatConfig[]} */
const eslintConfig = [
  {
    ignores: [
      "node_modules/",
      "app/generated/prisma/", // 👈 ignore Prisma generated client
      ".next/",
      "dist/",
    ],
  },

  // Extend base ESLint rules from Next.js and TypeScript
  ...compat.extends("next/core-web-vitals", "next", "next/typescript"),

  // Add your custom rules or overrides here
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      "@typescript-eslint/no-this-alias": "off", // 👈 allow const self = this;
      "@typescript-eslint/no-unused-expressions": "off", // 👈 allow condition && doSomething();
      // you can add more overrides here
    },
  },
];

export default eslintConfig;
