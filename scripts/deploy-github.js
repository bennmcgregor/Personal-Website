const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'git@github.com:bennmcgregor/bennmcgregor.github.io.git',//'https://github.com/bennmcgregor/bennmcgregor.github.io',
    message: 'Auto-generated commit, please see https://github.com/bennmcgregor/Personal-Website for source code.'
  },
  () => {
    console.log('Deploy Complete!')
  }
);
