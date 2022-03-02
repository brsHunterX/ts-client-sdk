import dts from "rollup-plugin-dts";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

import { main, module, typings } from "./package.json";

export default [
  {
    input: "./lib/index.ts",
    output: [
      {
        file: module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [typescript()],
  },
  // somente para libs que vão rodar no node
  {
    input: "./lib/index.ts",
    output: [
      {
        file: main,
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [commonjs(), typescript()],
  },
  {
    input: "./lib/index.ts",
    output: {
      file: typings,
      format: "esm",
    },
    plugins: [dts()],
  },
];
