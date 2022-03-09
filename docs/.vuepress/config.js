module.exports = {
  // 站点配置
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  lang: 'zh-CN',
  title: '代码搬运工',
  description: '我们不生产轮子，我们只是代码的搬运工',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/images/title.jpg',
    navbar: [
      {
        text: '常用工具',
        link: '/foo/',
      },
      {
        text: '常用文档',
        children: ['vue', 'mdn'],
      },
      {
        text: '开发中',
        link: '/foo/',
      },
      {
        text: '维护中',
        link: '/foo/',
      },
      {
        text: '尽请期待',
        link: '/foo/',
      },

    ],
  },

}