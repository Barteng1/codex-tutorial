---
id: 007
title: 写《命令速查表》参考文章
owner: CC-Worker
type: docs
priority: P1
estimate: 1.5h
created: 2026-05-05
---

## 目标

完成 MVP 第五篇文章 C5，提供 Codex CLI 所有常用斜杠命令、CLI 启动参数、审批模式的一站式速查手册，让有经验的读者不用翻官方文档就能快速查到需要的命令。

## 上下文

- 对应 `mvp-scope.md` 内容清单 C5
- 难度：参考，章节：reference
- 依赖：任务 001-006 均已完成
- 本文完成后，C4《用 Codex 修一个真实 bug》的"下一步"中"命令速查表（即将上线）"需改为真实链接

## 产出物

- 文件路径：`docs/reference/commands.md`
- frontmatter：
  ```yaml
  ---
  title: 命令速查表
  description: Codex CLI 所有常用命令一览：启动参数、会话内斜杠命令、审批模式、环境变量，附简要说明，速查即用。
  order: 1
  difficulty: 参考
  updated: 2026-05-05
  ---
  ```
- 参考类文章，不强制六段式结构，保持速查风格（简洁为主）

## 验收标准

按 `style-guide.md` 第十三条自检清单（适用项），外加以下硬性要求：

- [ ] frontmatter 五个字段都填了
- [ ] 标题层级不超过 H3
- [ ] 所有代码块都标了语言
- [ ] 命令行示例不带 `$` 前缀
- [ ] 术语用法符合 `glossary.md`（斜杠命令、审批模式等）
- [ ] 全文人称统一为"你"
- [ ] 覆盖三部分：CLI 启动参数、斜杠命令、审批模式
- [ ] 包含环境变量部分（至少 OPENAI_API_KEY）
- [ ] 每条命令/参数有简短说明
- [ ] `pnpm build` 通过

## 边界（不要做的事）

- **不要展开写详细教程**，速查表只给简洁说明，深度内容链接到对应文章
- **不要枚举所有可能的模型版本号**，容易过时
- **不要修改 `.agents/` 中受保护的文件**

## 参考资料

- `glossary.md`（斜杠命令、审批模式等术语定义）
- Codex CLI 官方仓库: https://github.com/openai/codex
- 已有文章（风格参考）：`docs/beginner/first-run.md`

## 进度日志

- 2026-05-05 CC-Worker 认领任务，创建任务卡并提交至 in-progress，基于 main 新建分支 docs/007-write-commands-reference
- 2026-05-05 完成文章 `docs/reference/commands.md`，覆盖四部分：CLI 启动命令（基本用法 + 参数表）、会话内斜杠命令、审批模式、环境变量，含两处 ::: tip/::: warning 补充说明
- 2026-05-05 同步将 C4（fix-a-bug.md）"下一步"中的占位文字改为真实链接 `[命令速查表](../reference/commands.md)`
- 2026-05-05 `pnpm build` 一次通过，build complete in 3.22s，无警告无报错

自检清单（style-guide.md §13，适用项）：
- [x] frontmatter 五个字段都填了（title / description / order / difficulty / updated）
- [x] 标题层级不超过 H3（H2、H3）
- [x] 参考类文章，未强制六段式，保持速查风格
- [x] 所有代码块都标了语言（bash）
- [x] 命令行示例不带 `$` 前缀
- [x] 术语用法符合 glossary.md（斜杠命令、审批模式、AGENTS.md）
- [x] 全文人称统一为"你"
- [x] 没有 SEO 黑话
- [x] 没有 emoji 堆叠或营销型 emoji

任务卡专属验收项：
- [x] 覆盖 CLI 启动参数（基本用法 + 参数表）
- [x] 覆盖斜杠命令（全部 6 条）
- [x] 覆盖审批模式（三种对比表 + 注意事项）
- [x] 包含环境变量（OPENAI_API_KEY 等 4 个）
- [x] `pnpm build` 通过

## 阻塞 / 问题（如有）
