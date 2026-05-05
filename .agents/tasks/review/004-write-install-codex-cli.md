---
id: 004
title: 写《安装 Codex CLI》文章
owner: CC-Worker
type: docs
priority: P1
estimate: 2h
created: 2026-05-05
---

## 目标

完成 MVP 第二篇文章 C2，让读者能在 macOS / Linux / Windows（含 WSL）三种环境下成功安装 Codex CLI，并解决国内网络常见问题。

## 上下文

- 对应 `mvp-scope.md` 内容清单 C2
- 难度：入门，章节：beginner
- 依赖：任务 001（VitePress 骨架）、002（C1 风格基准）、003（侧边栏配置）已完成
- 本文是 C1《Codex 是什么》"下一步"链接的目标页，路径须与 C1 占位链接对齐：`../beginner/install-codex-cli.md`
- 本文完成后 `pnpm build` 的死链错误（C1 → 本文）应消失

## 产出物

- 文件路径：`docs/beginner/install-codex-cli.md`
- frontmatter：
  ```yaml
  ---
  title: 安装 Codex CLI
  description: 手把手带你在 macOS、Linux、Windows（WSL）三种环境下安装 Codex CLI，包含国内网络常见问题的解决方法，10 分钟装好。
  order: 1
  difficulty: 入门
  updated: 2026-05-05
  ---
  ```

## 验收标准

按 `style-guide.md` 第十三条自检清单，外加以下硬性要求：

- [ ] frontmatter 五个字段都填了
- [ ] 标题层级不超过 H3
- [ ] 文章结构符合六段式
- [ ] 所有代码块都标了语言
- [ ] 命令行示例不带 `$` 前缀
- [ ] 至少列了 2 个常见坑
- [ ] "下一步"段落链接到 1-3 篇相关文章
- [ ] 术语用法符合 `glossary.md`
- [ ] 全文人称统一为"你"
- [ ] 没有 SEO 黑话
- [ ] 没有 emoji 堆叠或营销型 emoji
- [ ] 网络化表达 ≤ 2 处
- [ ] 覆盖 macOS / Linux / Windows（含 WSL）三种环境
- [ ] 包含国内网络注意事项（npm 镜像 / 代理）
- [ ] `pnpm build` 通过，C1 的死链错误消失

## 边界（不要做的事）

- **不要写"第一次使用"流程**——那是 C3 的内容
- **不要写 AGENTS.md、审批模式、MCP 等进阶概念**
- **不要写账号注册流程**
- **不要顺手修改 sidebar 配置或其他文章**
- **不要修改 `.agents/` 中受保护的文件**

## 参考资料

- `docs/getting-started/codex-overview.md`（风格基准，写前必读）
- Codex CLI 官方仓库: https://github.com/openai/codex
- `style-guide.md` 第十三条自检清单

## 进度日志

- 2026-05-05 CC-Worker 认领任务，创建任务卡并移入 in-progress，基于 main 新建分支 docs/004-write-install-codex-cli
- 2026-05-05 完成文章 `docs/beginner/install-codex-cli.md`，覆盖 macOS / Linux / Windows（WSL）三种环境，含国内网络镜像与代理两种方案，4 个常见坑
- 2026-05-05 首次 `pnpm build` 失败：文章"下一步"中链接了尚不存在的 C3（./first-run.md）和 C4（./fix-a-bug.md），产生 2 个新死链。将链接改为纯文字（"即将上线"），保留 C1 的回链
- 2026-05-05 第二次 `pnpm build` 通过，build complete in 2.79s，无警告无报错，原 C1 死链（→ install-codex-cli.md）已消除

自检清单（style-guide.md §13）：
- [x] frontmatter 五个字段都填了（title / description / order / difficulty / updated）
- [x] 标题层级不超过 H3（H2、H3）
- [x] 文章结构符合六段式（为什么读这篇 / 一句话结论 / 安装步骤 / 完整验证流程 / 常见坑 / 下一步）
- [x] 所有代码块都标了语言（bash）
- [x] 命令行示例不带 `$` 前缀
- [x] 至少列了 2 个常见坑（共 4 个）
- [x] "下一步"段落有指向相关文章的内容（含 C1 链接）
- [x] 术语用法符合 glossary.md（Codex CLI、API Key）
- [x] 全文人称统一为"你"
- [x] 没有 SEO 黑话
- [x] 没有 emoji 堆叠或营销型 emoji
- [x] 网络化表达 ≤ 2 处（本文无网络化表达）

任务卡专属验收项：
- [x] 覆盖 macOS / Linux / Windows（含 WSL）三种环境
- [x] 包含国内网络注意事项（npm 淘宝镜像 + 代理两种方案）
- [x] `pnpm build` 通过，C1 死链消除

## 阻塞 / 问题（如有）

- C3《第一次跑通 Codex》和 C4《用 Codex 修一个真实 bug》尚未写完，"下一步"暂用纯文字替代链接，待对应文章完成后需回来补链接。
