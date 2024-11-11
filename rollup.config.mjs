import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json" assert { type: "json" };

const plugins = [
    resolve(),
    commonjs(),
    typescript({
        useTsconfigDeclarationDir: true,
        tsconfigOverride: { compilerOptions: { module: "ESNext" } },
    }),
];

export default [
    // CommonJS (CJS) build configuration
    {
        input: "src/index.ts",
        output: {
            file: pkg.main || "dist/index.cjs.js",
            format: "cjs",
            sourcemap: true,
        },
        plugins,
    },
    // ES Module (ESM) build configuration
    {
        input: "src/index.ts",
        output: {
            file: pkg.module || "dist/index.mjs",
            format: "esm",
            sourcemap: true,
        },
        plugins,
    },
];
