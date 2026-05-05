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

## 阻塞 / 问题（如有）
