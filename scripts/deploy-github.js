const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/ghoti143/gatsby-hello.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)