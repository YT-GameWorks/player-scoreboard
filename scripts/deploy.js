var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/YT-GameWorks/player-scoreboard.git',
        user: {
            name: 'YT-GameWorks',
            email: 'sinha.soham@outlook.com'
        }
    },
    () => {
        console.log(' 🚀 This app has been deployed to Gh-Pages!')
    }
)