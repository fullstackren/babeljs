import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '文档', link: '/docs', activeMatch: '^/roadmap' },
]