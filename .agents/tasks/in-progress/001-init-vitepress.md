---
id: 001
title: 初始化 VitePress 项目骨架
owner: Codex Worker
type: feat
priority: P0
estimate: 1h
created: 2026-05-02
---

## 目标

让 `pnpm dev` 能在本地启动一个空白但结构完整的 VitePress 站点，作为后续所有内容和工程任务的基底。

## 上下文

- 对应 `mvp-scope.md` 工程清单 E1
- 无前置依赖，最高优先级
- 后续任务 002（首篇文章）和 003（侧边栏配置）都依赖本任务完成

## 产出物

- `package.json`（含 vitepress 依赖、`dev` / `build` / `preview` 脚本）
- `docs/.vitepress/config.ts`（最简配置：title、description、`lang: zh-CN`）
- `docs/index.md`（占位首页：仅 frontmatter + 一个 H1 标题）
- `.gitignore`（标准 Node 项目）
- 项目根目录 `README.md`（含本地启动说明：clone、install、dev、build、preview）
- `.nvmrc` 或 `package.json` `engines` 字段（锁定 Node 版本范围）

## 验收标准

- [ ] `pnpm install` 成功，无报错
- [ ] `pnpm dev` 启动后浏览器访问 http://localhost:5173 能看到首页
- [ ] `pnpm build` 成功，输出在 `docs/.vitepress/dist/`
- [ ] `pnpm preview` 能预览构建产物
- [ ] 在任务卡进度日志写明使用的 Node、pnpm 版本号

## 边界（不要做的事）

- **不要现在就配置 sidebar、nav、search**——那是后续独立任务（003、E4）
- **不要引入额外样式或组件库**（如 Tailwind、Vitest、Playwright），保持极简
- **不要做部署配置**——独立任务 E5
- **不要写任何教程内容到 index.md**，只放占位
- **不要修改 `.agents/` 中受保护的文件**

## 参考资料

- VitePress 官方文档: https://vitepress.dev
- VitePress 配置参考: https://vitepress.dev/reference/site-config

## 进度日志

## 阻塞 / 问题（如有）
