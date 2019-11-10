const path = require('path');
const { version } = require('./package.json');

module.exports = {
  title: 'Vue Components',
  version: version,
  pagePerSection: true,
  exampleMode: 'expand',
  usageMode: 'expand',
  defaultExample: false,
  ribbon: {
    url: 'https://github.com/AnnaBrakowska/VueComponents',
    text: 'Fork me on GitHub'
  },
  require: [path.join(__dirname, 'src/styles/main.scss')],
  sections: [
    {
      name: 'Installation',
      content: 'styleguide/pages/installation.md'
    },
    {
      name: 'Colors',
      content: 'styleguide/pages/colors.md'
    },
    {
      name: 'Components',
      components: ['src/components/Loader.vue']
    }
  ]
};
