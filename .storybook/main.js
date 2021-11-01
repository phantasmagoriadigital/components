module.exports = {
  "stories": [
    '../src/stories/**/*.stories.mdx',
    '../src/stories/*.stories.@(js|jsx|ts|tsx)'
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@pxtrn/storybook-addon-docs-stencil',
    '@storybook/addon-a11y'
  ]
}