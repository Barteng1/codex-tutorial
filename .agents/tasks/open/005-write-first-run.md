---
id: 005
title: 写《第一次跑通 Codex》文章
owner: CC-Worker
type: docs
priority: P1
estimate: 2h
created: 2026-05-05
depends_on: 004
---

## 目标

完成 MVP 文章 C3，带读者从装好 Codex CLI 到真正跑通第一个任务，建立"原来就是这样用的"的初体验感。

## 上下文

- 对应 `mvp-scope.md` 内容清单 C3
- 难度：入门，章节：beginner
- 依赖：任务 #004（C2 安装文章）完成后再认领
- 风格基准：对齐 `docs/getting-started/codex-overview.md`

## 产出物

- 文件路径：`docs/beginner/first-run.md`
- frontmatter：

  ```yaml
  ---
  title: 第一次跑通 Codex
  description: 60-100 字真实摘要
  order: 2
  difficulty: 入门
  updated: 2026-05-05
  ---
  ```

## 验收标准

- [ ] frontmatter 五个字段完整，description 是真实摘要（60-100 字）
- [ ] 有一个完整可复现的例子（从启动 Codex CLI 到完成一个简单任务的全流程）
- [ ] 覆盖审批模式（untrusted / on-request / never）的基本说明
- [ ] 至少列出 2 个新手常见坑
- [ ] 所有代码块标了语言，命令行示例不带 `$` 前缀
- [ ] "下一步"链接到 C4《用 Codex 修一个真实 bug》（占位即可）
- [ ] 术语符合 glossary.md，人称统一为"你"
- [ ] 无 SEO 黑话，网络化表达 ≤ 2 处

## 边界（不要做的事）

- 不要写安装步骤，那是 C2 的内容
- 不要深入讲 AGENTS.md 配置，那是进阶内容
- 不要修改 `.agents/` 下的任何文件

## 参考资料

- 风格基准文: `docs/getting-started/codex-overview.md`
- `style-guide.md` 第十三条自检清单
- Codex CLI 官方文档: https://github.com/openai/codex

## 进度日志

## 阻塞 / 问题（如有）
