import type { StorybookConfig } from "@storybook/nextjs";
const path = require("path");

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  webpackFinal: async (config) => {
    /* Follow Next.js aliases */
    // @ts-ignore
    config.resolve.alias = {
      ...config?.resolve?.alias,
      "@": path.resolve(__dirname, "../src/"),
    };

    /* Use SVGR to handle svg files */
    // @ts-ignore
    config.module.rules.find((rule) => rule.test?.test(".svg")).exclude =
      /\.svg$/;
    config?.module?.rules?.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};

export default config;
