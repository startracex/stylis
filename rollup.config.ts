import { globSync } from "node:fs";
import type { RollupOptions } from "rollup";
import oxc from "rollup-plugin-oxc";

export default {
  input: Object.fromEntries(
    globSync("src/**/*.ts", {
      exclude: ["**/*.test.*"]
    }).map((path) => {
      return [path.slice(4, -3), path];
    }),
  ),
  plugins: [oxc()],
  output: [
    {
      dir: "dist",
      format: "esm",
      sourcemap: true,
    },
    {
      dir: "dist",
      format: "cjs",
      sourcemap: true,
      entryFileNames: "[name].cjs",
    },
  ],
} as RollupOptions;
