---
id: 012
title: 优化侧边栏与导航样式
owner: Codex Worker
type: feat
priority: P1
estimate: 1.5h
created: 2026-05-06
---

## 目标

让侧边栏和顶部导航有更强的层次感和品牌感，与任务 #011 建立的紫蓝主色系保持一致。

## 上下文

- 依赖任务 #011（品牌色变量已在 custom.css 定义）
- 当前侧边栏分组标题和条目样式完全一样，缺乏层次
- 顶部导航激活状态不够明显

## 产出物

在 `docs/.vitepress/theme/custom.css` 追加以下样式优化：

**侧边栏层次感：**
- 分组标题（`.VPSidebarItem.level-0 > .item .text`）加粗，颜色用主色 `#6366f1`，字号略大
- 条目激活状态左侧加彩色竖线指示器（`border-left: 2px solid #6366f1`）
- 条目 hover 状态背景用 `--vp-c-brand-soft`

**顶部导航：**
- 激活项文字颜色用 `--vp-c-brand-1`
- 导航栏底部加一条细线与内容区分隔

**整体细节：**
- 链接 hover/active 颜色统一为品牌色
- 滚动条样式微调（细、圆角、品牌色）

## 验收标准

- [ ] 侧边栏分组标题视觉上明显区别于条目
- [ ] 当前激活的侧边栏条目有左侧彩色指示线
- [ ] 顶部导航激活项颜色为紫色系
- [ ] 整体链接颜色与品牌色一致
- [ ] `pnpm build` 成功，无报错
- [ ] 移动端侧边栏折叠菜单正常

## 边界（不要做的事）

- 不要改动任何 md 文章内容
- 不要引入额外 npm 包
- 不要修改 `.agents/` 下的任何文件

## 参考资料

- VitePress CSS 变量: https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/styles/vars.css
- 任务 #011 产出的 `docs/.vitepress/theme/custom.css`

## 进度日志

## 阻塞 / 问题（如有）
