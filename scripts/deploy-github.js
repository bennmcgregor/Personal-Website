const ghpages = require('gh-pages')

// replace with your repo url
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
