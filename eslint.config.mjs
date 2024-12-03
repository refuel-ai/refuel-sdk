// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import tsdoc from "eslint-plugin-tsdoc";

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.strict,
    {
        files: ["./src/**/*.ts"],
        ignores: ["./dist/"],
        plugins: {
            tsdoc: tsdoc,
        },
        rules: {
            "tsdoc/syntax": "error",
        },
    }
);
