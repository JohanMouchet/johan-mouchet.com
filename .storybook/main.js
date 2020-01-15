module.exports = {
  stories: ["../src/views/**/*.stories.(js|mdx)"],
  addons: [
    "@storybook/addon-knobs",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    {
      name: "@storybook/addon-docs",
      options: { configureJSX: true }
    },
    {
      name: "@storybook/preset-create-react-app"
    }
  ]
};
