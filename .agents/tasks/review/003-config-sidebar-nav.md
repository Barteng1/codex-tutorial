---
id: 003
title: 配置侧边栏与顶部导航
owner: Codex Worker
type: feat
priority: P1
estimate: 1h
created: 2026-05-02
---

## 目标

按 `mvp-scope.md` 的章节结构，配置 VitePress 的侧边栏（sidebar）与顶部导航（nav），让读者从任意页面都能快速跳到任一章节。

## 上下文

- 对应 `mvp-scope.md` 工程清单 E2
- 依赖：任务 001 必须完成
- 章节结构必须与下面这套目录对齐：

  ```
  getting-started/    入门导引（含 codex-overview.md）
  beginner/           入门篇
  intermediate/       进阶篇（MVP 不写内容，但导航留入口）
  advanced/           高级篇（同上）
  reference/          参考（命令速查表）
  ```

## 产出物

- 修改 `docs/.vitepress/config.ts`，新增 `themeConfig.sidebar` 与 `themeConfig.nav` 配置
- 创建占位首页：`docs/{getting-started,beginner,intermediate,advanced,reference}/index.md`，每个 index.md 仅含 frontmatter + 一个标题 + 正文一行 "本章节内容建设中"
- 顶部 nav 至少包含：入门 / 进阶 / 高级 / 参考 / GitHub（GitHub 链接可暂时留 `#` 占位，由后续任务接入实际仓库地址）

## 验收标准

- [ ] `pnpm dev` 后侧边栏在所有页面可见
- [ ] 点击任意一级章节标题能进入对应章节占位首页
- [ ] 顶部 nav 五项均可点击且高亮当前章节
- [ ] 移动端折叠菜单正常工作
- [ ] 所有占位首页 frontmatter 完整（按 `style-guide.md` §7）
- [ ] 进度日志记录配置文件改动行数与本地验证步骤

## 边界（不要做的事）

- **不要往占位首页里塞实际内容**——内容由 CC-Worker 通过独立任务完成
- **不要做主题颜色定制、字体引入**——后续独立任务
- **不要配置 search**——独立任务 E4
- **不要修改任务 001 已产出的 `docs/index.md`**
- **不要给侧边栏或导航装 emoji 或图标**（违反 `style-guide.md` §11）

## 参考资料

- VitePress sidebar 配置: https://vitepress.dev/reference/default-theme-sidebar
- VitePress nav 配置: https://vitepress.dev/reference/default-theme-nav
- `mvp-scope.md`（章节结构来源）

## 进度日志

- 2026-05-05: 已在 `docs/.vitepress/config.ts` 新增 `themeConfig.nav` 与全局 `themeConfig.sidebar`，配置文件变更行数为 `+62/-1`。
- 2026-05-05: 已创建五个章节占位首页：`docs/getting-started/index.md`、`docs/beginner/index.md`、`docs/intermediate/index.md`、`docs/advanced/index.md`、`docs/reference/index.md`，均包含 `style-guide.md` §7 要求的 frontmatter 字段、一个 H1 标题和正文一行 `本章节内容建设中`。
- 2026-05-05: 本地启动 `corepack pnpm dev --host 127.0.0.1`，HTTP 验证 `/`、`/getting-started/`、`/getting-started/codex-overview`、`/beginner/`、`/intermediate/`、`/advanced/`、`/reference/` 均返回 200。
- 2026-05-05: 运行 `corepack pnpm build` 失败，原因是既有文章 `docs/getting-started/codex-overview.md` 链接到尚未存在的 `../beginner/install-codex-cli.md`。该文件属于后续 C2 内容任务，未在本任务中自行补写或修改文章内容。
- 2026-05-05: 尝试使用 Playwright 做移动端折叠菜单自动化验证，但当前环境未安装 `playwright` 模块，未继续引入额外依赖。

## 阻塞 / 问题（如有）

- 2026-05-05: `pnpm build` 被既有死链阻塞：`docs/getting-started/codex-overview.md` 中的 `../beginner/install-codex-cli.md` 尚不存在。修复需要修改 C1 文章或新增 C2 文章文件，超出本任务边界。
- 2026-05-05: 移动端折叠菜单未能完成真实浏览器自动化验证；环境缺少 Playwright，且本任务边界明确不要引入额外工具依赖。
