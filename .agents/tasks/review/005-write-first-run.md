---
id: 005
title: 写《第一次跑通 Codex》文章
owner: CC-Worker
type: docs
priority: P1
estimate: 2h
created: 2026-05-05
---

## 目标

完成 MVP 第三篇文章 C3，让刚装好 Codex CLI 的读者能在 10 分钟内完成第一次真实对话，建立"Codex 能帮我干活"的直觉。

## 上下文

- 对应 `mvp-scope.md` 内容清单 C3
- 难度：入门，章节：beginner
- 依赖：任务 004（C2《安装 Codex CLI》）已完成
- 本文是 C2 "下一步"中"第一次跑通 Codex（即将上线）"的目标页，路径须与 C2 占位文字对齐：`./first-run.md`
- 本文完成后需回 C2 把纯文字"即将上线"改为真实链接

## 产出物

- 文件路径：`docs/beginner/first-run.md`
- frontmatter：
  ```yaml
  ---
  title: 第一次跑通 Codex
  description: 装好 Codex CLI 后，用一个真实的小任务跑通第一次完整对话——从启动、输入指令、确认操作，到看懂 Codex 的输出。
  order: 2
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
- [ ] 包含完整可复现的第一次对话示例（从 `codex` 启动到完成一个小任务）
- [ ] 解释审批模式（untrusted / on-request / never）的基本概念
- [ ] `pnpm build` 通过

## 边界（不要做的事）

- **不要写完整项目实战**——那是 C4 的内容
- **不要深讲 AGENTS.md、MCP、Skills**——概览点到为止
- **不要写账号注册或安装步骤**——指向 C1 / C2
- **不要顺手修改 sidebar 配置或其他文章**（C2 的链接更新除外，写完本文要补上）
- **不要修改 `.agents/` 中受保护的文件**

## 参考资料

- `docs/getting-started/codex-overview.md`（风格基准）
- `docs/beginner/install-codex-cli.md`（前置文章，衔接风格）
- Codex CLI 官方仓库: https://github.com/openai/codex

## 进度日志

- 2026-05-05 CC-Worker 认领任务，创建任务卡并提交至 in-progress，基于 main 新建分支 docs/005-write-first-run
- 2026-05-05 完成文章 `docs/beginner/first-run.md`，内容含：启动流程、审批模式三种对比表、完整可复现例子（为函数加 JSDoc 注释）、4 个常见坑
- 2026-05-05 同步将 C2（install-codex-cli.md）"下一步"中的占位文字改为真实链接 `[第一次跑通 Codex](./first-run.md)`
- 2026-05-05 首次 `pnpm build` 失败：C4 占位链接 `./fix-a-bug.md` 尚不存在，产生死链；改为纯文字"即将上线"
- 2026-05-05 第二次 `pnpm build` 通过，build complete in 2.56s，无警告无报错

自检清单（style-guide.md §13）：
- [x] frontmatter 五个字段都填了（title / description / order / difficulty / updated）
- [x] 标题层级不超过 H3（H2、H3）
- [x] 文章结构符合六段式（为什么读这篇 / 一句话结论 / 启动与基本操作 / 完整可复现例子 / 常见坑 / 下一步）
- [x] 所有代码块都标了语言（bash / javascript）
- [x] 命令行示例不带 `$` 前缀
- [x] 至少列了 2 个常见坑（共 4 个）
- [x] "下一步"段落链接到 C2 和 C1，C4 暂为纯文字
- [x] 术语用法符合 glossary.md（审批模式、Codex CLI、AGENTS.md）
- [x] 全文人称统一为"你"
- [x] 没有 SEO 黑话
- [x] 没有 emoji 堆叠或营销型 emoji
- [x] 网络化表达 ≤ 2 处（本文无网络化表达）

任务卡专属验收项：
- [x] 包含完整可复现的第一次对话示例（从 `codex` 启动到看到结果）
- [x] 解释审批模式（untrusted / on-request / never）并用对比表呈现
- [x] `pnpm build` 通过

## 阻塞 / 问题（如有）

- C4《用 Codex 修一个真实 bug》尚未完成，"下一步"中 C4 链接暂用纯文字"即将上线"，待 C4 完成后需回来补链接。
