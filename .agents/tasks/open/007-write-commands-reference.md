---
id: 007
title: 写《命令速查表》文章
owner: CC-Worker
type: docs
priority: P2
estimate: 2h
created: 2026-05-05
depends_on: 004
---

## 目标

完成 MVP 文章 C5，提供一份结构清晰、可快速查阅的 Codex CLI 命令速查表，让用过的读者能随时回来查。

## 上下文

- 对应 `mvp-scope.md` 内容清单 C5
- 难度：参考，章节：reference
- 依赖：任务 #004（C2）完成即可认领，不需要等 C3/C4
- 本文是参考类文章，结构与其他文章不同，不强制六段式

## 产出物

- 文件路径：`docs/reference/commands.md`
- frontmatter：

  ```yaml
  ---
  title: 命令速查表
  description: 60-100 字真实摘要
  order: 1
  difficulty: 参考
  updated: 2026-05-05
  ---
  ```

## 验收标准

- [ ] frontmatter 五个字段完整，description 是真实摘要（60-100 字）
- [ ] 覆盖所有常用斜杠命令（/init、/review、/compact 等），每条附简短说明
- [ ] 覆盖常用 CLI 启动参数和 flag
- [ ] 覆盖审批模式（untrusted / on-request / never）说明
- [ ] 所有代码块标了语言，命令行示例不带 `$` 前缀
- [ ] 表格用于结构化对比，格式整齐
- [ ] 术语符合 glossary.md

## 边界（不要做的事）

- 不要把每个命令都展开写成教程，保持速查风格（简洁为主）
- 不要写 MCP、Skills 的详细配置（进阶内容）
- 不要修改 `.agents/` 下的任何文件

## 参考资料

- Codex CLI 官方文档: https://github.com/openai/codex
- `style-guide.md`（术语、代码块规范）
- `glossary.md`（斜杠命令、审批模式等术语定义）

## 进度日志

## 阻塞 / 问题（如有）
