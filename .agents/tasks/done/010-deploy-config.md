---
id: 010
title: 部署配置（Cloudflare Pages）
owner: Codex Worker
type: feat
priority: P2
estimate: 1h
created: 2026-05-05
depends_on: 003
---

## 目标

完成工程 E5：配置 Cloudflare Pages 部署，让网站能从 GitHub 仓库自动构建并发布到公网。

## 上下文

- 对应 `mvp-scope.md` 工程清单 E5，备选方案是 Vercel
- 依赖：任务 #003 已完成，仓库结构稳定
- 需要先有 GitHub remote（用户需要先建仓库并推送）

## 产出物

1. 在项目根目录新增 `.github/workflows/deploy.yml`（可选，如果用 Cloudflare Pages GitHub Actions 方式）
   **或** 在 `README.md` 里补充 Cloudflare Pages 控制台手动配置步骤（如果用控制台直连 GitHub 方式）

2. 确认 `docs/.vitepress/config.ts` 里 `base` 配置正确（如部署到子路径需要设置，根域名部署保持默认即可）

3. 在 `README.md` 里新增"部署"章节，说明：
   - Cloudflare Pages 控制台配置方式（build command: `pnpm build`，output dir: `docs/.vitepress/dist`）
   - 如何绑定自定义域名（可选步骤）

## 验收标准

- [ ] README.md 有清晰的部署说明，build command 和 output dir 正确
- [ ] `pnpm build` 输出目录确认是 `docs/.vitepress/dist`
- [ ] `base` 配置已确认（根域名部署无需修改）
- [ ] `pnpm build` 成功，无报错
- [ ] 任务卡进度日志里说明选择了哪种部署方式及原因

## 边界（不要做的事）

- 不要真正执行部署（没有 GitHub remote 和 Cloudflare 账号权限）
- 不要修改 `.agents/` 下的任何文件
- 不要引入额外 npm 包

## 参考资料

- Cloudflare Pages 部署 VitePress: https://vitepress.dev/guide/deploy#cloudflare-pages
- VitePress base 配置: https://vitepress.dev/reference/site-config#base

## 进度日志

- 2026-05-06: 选择 Cloudflare Pages 控制台直连 GitHub 的部署方式；原因是本任务不需要真正部署，且当前没有 GitHub remote 和 Cloudflare 账号权限，README 说明比新增 GitHub Actions workflow 更符合 MVP 边界。
- 2026-05-06: 已在 `README.md` 新增"部署"章节，写明 Cloudflare Pages 配置：build command 为 `pnpm build`，output dir 为 `docs/.vitepress/dist`，并补充自定义域名绑定步骤。
- 2026-05-06: 已确认 `docs/.vitepress/config.ts` 未设置 `base`，保持 VitePress 默认根路径，适用于根域名或 Cloudflare Pages 默认域名部署；若未来部署到子路径，再设置对应 `base`。
- 2026-05-06: 运行 `corepack pnpm build` 成功，VitePress build complete，无报错；已确认输出目录 `docs/.vitepress/dist` 存在并包含 `index.html`、`404.html`、`assets/` 等构建产物。

## 阻塞 / 问题（如有）
