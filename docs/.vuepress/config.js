module.exports = {
    configureWebpack: {
        resolve: {
          alias: {
            '@images': './images'
          }
        }
    },
    title: 'aries-logger',
    description: 'log for aries-services',
    head: [
        ['link', { rel: 'icon', href: 'http://www.semantic-ui.cn/images/logo.png' }]
    ],
    themeConfig: {
        nav: [{
                text: 'siwi',
                link: 'https://siwi.me'
            },
            {
                text: 'Github',
                link: 'https://github.com/siwilizhao'
            }
        ]
    }
}