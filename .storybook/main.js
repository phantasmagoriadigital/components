module.exports = {
  "stories": [
    '../src/stories/**/*.stories.mdx',
    '../src/stories/*.stories.@(js|jsx|ts|tsx)'
  ],
  "addons": [
    // '@storybook-design-token',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@pxtrn/storybook-addon-docs-stencil',
    '@storybook/addon-a11y',
    // '@storybook/addon-storysource',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          // test: [/\.stories\.jsx?$/], This is default
          // include: [path.resolve(__dirname, '../src')], // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
  ]
}