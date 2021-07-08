module.exports = {
  title: 'Spark UI',
  description: 'ui文档',
  themeConfig: {
    search: true, //搜索
    searchMaxSuggestions: 10,
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/page1/button' },
      { text: '个人文章', items: [
        { text: '掘金', link: 'https://juejin.cn/user/1011206427002062' },
        { text: '知乎', link: 'https://www.zhihu.com/people/beliefs1995' },
      ]},
      { text: 'github', link: 'https://github.com/zhengzhuang96/spark-ui' }
    ],
    // 侧边栏
    sidebar: [{
      title: '基本组建',
      collapsable: true,
      children: [
        'page1/Button',
      ]
    }],
  },
}
