import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Codex 学习站',
  description: '面向初次使用者的 Codex 实操教程',
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      {
        text: '入门',
        link: '/getting-started/',
        activeMatch: '^/(getting-started|beginner)/'
      },
      {
        text: '进阶',
        link: '/intermediate/',
        activeMatch: '^/intermediate/'
      },
      {
        text: '高级',
        link: '/advanced/',
        activeMatch: '^/advanced/'
      },
      {
        text: '参考',
        link: '/reference/',
        activeMatch: '^/reference/'
      },
      {
        text: 'GitHub',
        link: '#'
      }
    ],
    sidebar: [
      {
        text: '入门导引',
        items: [
          { text: '章节首页', link: '/getting-started/' },
          { text: 'Codex 是什么', link: '/getting-started/codex-overview' }
        ]
      },
      {
        text: '入门篇',
        items: [
          { text: '章节首页', link: '/beginner/' }
        ]
      },
      {
        text: '进阶篇',
        items: [
          { text: '章节首页', link: '/intermediate/' }
        ]
      },
      {
        text: '高级篇',
        items: [
          { text: '章节首页', link: '/advanced/' }
        ]
      },
      {
        text: '参考',
        items: [
          { text: '章节首页', link: '/reference/' }
        ]
      }
    ]
  }
})
