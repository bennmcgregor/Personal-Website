const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/bennmcgregor/bennmcgregor.github.io',
    add: true,
  },
  () => {
    console.log('Deploy Complete!')
  }
);
