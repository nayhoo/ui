import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

export const entry = "./src/index.ts";

export const mode = "development";

export const output = {
  filename: "bundle.js",
};

export const resolve = {
  extensions: [".ts", ".tsx", ".js"],
  plugins: [new TsconfigPathsPlugin()],
};

export const module = {
  rules: [
    {
      test: /\.tsx?$/,
      loader: "ts-loader",
      options: { configFile: "tsconfig.build.json" },
    },
  ],
};
