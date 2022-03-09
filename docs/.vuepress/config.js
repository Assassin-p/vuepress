module.exports = {
  // 站点配置
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  lang: 'zh-CN',
  title: '代码搬运工',
  description: '我们不生产轮子，我们只是代码的搬运工',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    navbar: [
      // NavbarItem
      {
        text: 'Foo',
        link: '/foo/',
      },
      // NavbarGroup
      {
        text: 'Group',
        children: ['/group/foo.md', '/group/bar.md'],
      },
      // 字符串 - 页面文件路径
      '/text/README.md',
    ],
  },

}