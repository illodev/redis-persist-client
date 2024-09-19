import { resolve } from "path";
import { configDefaults, defineConfig, mergeConfig } from "vitest/config";

export default mergeConfig(
  {
    plugins: [],
    test: {
      environment: "jsdom",
    },
    resolve: {
      alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
    },
  },
  defineConfig({
    test: {
      exclude: [
        ...configDefaults.exclude,
        "**/node_modules/**",
        "**/cypress/**",
        "**/.db-data/**",
      ],
    },
  }),
);
