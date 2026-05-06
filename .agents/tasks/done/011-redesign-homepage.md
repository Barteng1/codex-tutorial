---
id: 011
title: 重设计首页 Hero 区与介绍内容
owner: Codex Worker
type: feat
priority: P1
estimate: 2h
created: 2026-05-06
---

## 目标

把当前空白的首页改造成有视觉吸引力的 landing page，包含 Hero 区、产品介绍、快速入口三个模块，整体配色采用紫蓝渐变风格（参考 Codex 产品图标色调：#6366f1 → #3b82f6）。

## 上下文

- MVP 后视觉优化阶段第一张卡
- 当前 `docs/index.md` 只有 `layout: home` 和一个占位标题，几乎是空白
- 风格基调：简洁现代，主色 `#6366f1`（靛紫）到 `#3b82f6`（蓝），白底，干净有品牌感

## 产出物

修改 `docs/index.md`，使用 VitePress 默认 home layout 的 hero + features 结构：

**Hero 区要求：**
- `name`: "Codex 学习站"
- `text`: 一句话点出价值，例如"从零上手 OpenAI Codex，10 分钟完成第一次 AI 编程"
- `tagline`: 副标题，说明面向人群和收益
- `actions`: 两个按钮——"开始学习"（指向 `/getting-started/codex-overview`，theme: brand）和"查看命令速查"（指向 `/reference/commands`，theme: alt）
- hero 背景加紫蓝渐变（通过 `custom.css` 覆盖 VitePress 的 `--vp-home-hero-name-color` 和相关变量）

**Features 区要求（3个卡片）：**
1. 图标 🤖，标题"AI 代理，不只是补全"，描述 Codex 和普通 AI 补全工具的区别
2. 图标 ⚡，标题"终端原生，融入工作流"，描述 CLI 的优势
3. 图标 📖，标题"中文教程，从入门到实战"，描述网站内容覆盖

**CSS 变量覆盖（在 `docs/.vitepress/theme/custom.css` 追加）：**
```css
/* Hero 渐变主色 */
.VPHero .name {
  background: linear-gradient(120deg, #6366f1, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* brand 按钮配色 */
:root {
  --vp-c-brand-1: #6366f1;
  --vp-c-brand-2: #4f46e5;
  --vp-c-brand-3: #818cf8;
  --vp-c-brand-soft: rgba(99, 102, 241, 0.1);
}
```

## 验收标准

- [ ] 首页有完整的 Hero 区（标题、副标题、两个按钮）
- [ ] Hero 标题呈现紫蓝渐变色
- [ ] "开始学习"按钮点击后跳转到 `codex-overview` 页面
- [ ] Features 区有三个卡片，内容准确
- [ ] brand 色（按钮、链接高亮）统一为紫色系
- [ ] `pnpm build` 成功，无报错
- [ ] 移动端首页布局正常，不错位

## 边界（不要做的事）

- 不要引入额外 npm 包或图片资源
- 不要改动文章页的任何内容
- 不要修改 `.agents/` 下的任何文件

## 参考资料

- VitePress Home 页配置: https://vitepress.dev/reference/default-theme-home-page
- VitePress 自定义主题色: https://vitepress.dev/guide/extending-default-theme#customizing-css

## 进度日志

- 2026-05-06: 已将 `docs/index.md` 改为 VitePress 默认 home layout 的 `hero` + `features` 结构，包含站点名、价值说明、副标题、两个 action 按钮和三张 feature 卡片。
- 2026-05-06: 已在 `docs/.vitepress/theme/custom.css` 追加紫蓝渐变 Hero 标题样式，并覆盖 brand 变量：`#6366f1`、`#4f46e5`、`#818cf8`、`rgba(99, 102, 241, 0.1)`。
- 2026-05-06: 未引入额外 npm 包、图片资源或字体资源；未改动文章页内容。
- 2026-05-06: 运行 `corepack pnpm dev --host 127.0.0.1`，访问 `/`、`/getting-started/codex-overview`、`/reference/commands` 均返回 200。
- 2026-05-06: 使用 Windows Chrome headless + DevTools Protocol 验证首页：Hero 标题、text、tagline、两个按钮、三张 feature 卡片均渲染；`开始学习` 链接到 `/getting-started/codex-overview.html`，`查看命令速查` 链接到 `/reference/commands.html`；Hero 标题计算样式为 `linear-gradient(120deg, rgb(99, 102, 241), rgb(59, 130, 246))`；brand 变量为 `#6366f1`。
- 2026-05-06: 移动端宽度 390px 验证无横向溢出，Hero、features、actions 宽度均在视口内。
- 2026-05-06: 运行 `corepack pnpm build` 成功，VitePress build complete，无报错。

## 阻塞 / 问题（如有）
