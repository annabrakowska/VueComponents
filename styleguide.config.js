const { version } = require('./package.json');

module.exports = {
  title: 'Vue Components',
  version: version,
  pagePerSection: true,
  exampleMode: 'expand',
  usageMode: 'expand',
  defaultExample: false,
  sections: [
    {
      name: 'Installation',
      components: 'styleguide/pages/installation.md'
    },
    {
      name: 'Colors',
      components: 'styleguide/pages/colors.md'
    },
    {
      name: 'Components',
      components: ['src/components/Loader.vue']
    }
  ]
  // webpackConfig: {
  //   // custom config goes here
  // }
};
