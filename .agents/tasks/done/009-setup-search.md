---
id: 009
title: 接入全文搜索（MiniSearch）
owner: Codex Worker
type: feat
priority: P2
estimate: 1h
created: 2026-05-05
depends_on: 003
---

## 目标

完成工程 E4：接入 VitePress 内置的 MiniSearch 全文搜索，让读者能搜到中文内容。

## 上下文

- 对应 `mvp-scope.md` 工程清单 E4
- 依赖：任务 #003（sidebar 配置）已完成合入 main
- VitePress 1.x 内置 local search，基于 MiniSearch，无需额外安装 npm 包

## 产出物

修改 `docs/.vitepress/config.ts`，在 `themeConfig` 里新增 search 配置：

```ts
search: {
  provider: 'local'
}
```

如需中文分词优化，可在 search options 里配置，但 MVP 阶段能搜到内容即可，不强求分词精准度。

## 验收标准

- [ ] `pnpm dev` 后页面右上角或顶部出现搜索入口
- [ ] 能搜索到中文关键词并跳转到对应文章（用"Codex"、"安装"等词测试）
- [ ] `pnpm build` 成功，无报错
- [ ] 没有安装额外 npm 包（使用 VitePress 内置 local search）
- [ ] 任务卡进度日志里写明验证步骤

## 边界（不要做的事）

- 不要接入 Algolia 或其他第三方搜索服务（MVP 用内置即可）
- 不要修改 `.agents/` 下的任何文件

## 参考资料

- VitePress 搜索配置: https://vitepress.dev/reference/default-theme-search

## 进度日志

- 2026-05-06: 已在 `docs/.vitepress/config.ts` 的 `themeConfig` 中新增 VitePress 内置 local search 配置：`search: { provider: 'local' }`。
- 2026-05-06: 未修改 `package.json`，未安装额外 npm 包，未引入 Algolia 或第三方搜索服务。
- 2026-05-06: 运行 `corepack pnpm dev --host 127.0.0.1`，访问 `/` 与 `/getting-started/codex-overview` 均返回 200。
- 2026-05-06: 使用 Windows Chrome headless + DevTools Protocol 验证搜索入口存在；搜索 `Codex` 返回 `/getting-started/codex-overview.html`、`/beginner/install-codex-cli.html`、`/beginner/first-run.html` 等结果；搜索 `安装` 返回 `/beginner/install-codex-cli.html` 及相关章节锚点。
- 2026-05-06: 运行 `corepack pnpm build` 成功，VitePress build complete，无报错。

## 阻塞 / 问题（如有）
