// nav
module.exports = [
  { text: '首页', link: '/', icon: 'reco-home' },
  {
    text: '索引',
    icon: 'reco-api',
    items: [
      { text: '分类', link: '/categories/', icon: 'reco-category' },
      { text: '标签', link: '/tags/', icon: 'reco-tag' },
      { text: '归档', link: '/archives/', icon: 'reco-date' },
    ]
  },
  { text: '留言板', link: '/bookshop/message-board/', icon: 'reco-suggestion' },
  {
    text: '关于',
    icon: 'reco-message',
    items: [
      {
        text: '联系',
        items: [
          { text: 'GitHub', link: 'https://github.com/chenlei-17', icon: 'reco-github' },
          { text: '关于我', link: '/bookshop/linkme/', icon: 'reco-account' },
        ]
      },{
        text: '博客',
        items: [
          { text: '本站源码', link: 'https://github.com/chenlei-17/chenlei-17.github.io', icon: 'reco-document' }
        ]
      },{
        text: '其他',
        items: [
          { text: '友情链接', link: '/bookshop/friendslink/', icon: 'reco-friend' },
        ]
      },
    ]
  }
]
