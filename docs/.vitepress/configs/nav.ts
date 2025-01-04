import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '开发者路线', link: '/roadmap', activeMatch: '^/roadmap' },
  { text: '技术文章',
    items: [
      { text: 'HTML', link: '/fe/web/html' },
      { text: 'CSS', link: '/fe/web/css' },
      { text: 'JavaScript', link: '/fe/web/javascript' },
      { text: 'ES6', link: '/fe/web/es6' },
      { text: 'Web API', link: '/fe/web/web-api' },
      { text: 'TypeScript', link: '/fe/web/typescript' },
      { text: 'Vue2', link: '/fe/web/framework/vue2' },
    ]
  },
  // { text: '付费课程', link: '/course/' },
  { text: '个人成长', link: '/grow/' },
  { text: '文档翻译', link: '/translation/' },
  { text: '工具提效', link: '/efficiency' },
  { text: '交个朋友', link: '/make-a-friend' },
  // { text: '打赏赞助', link: '/sponsors' },
]