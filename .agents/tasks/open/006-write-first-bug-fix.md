---
id: 006
title: 写《用 Codex 修一个真实 bug》文章
owner: CC-Worker
type: docs
priority: P1
estimate: 3h
created: 2026-05-05
depends_on: 005
---

## 目标

完成 MVP 文章 C4，通过一个完整的真实 bug 修复案例，让读者体验 Codex 在实际项目中的完整工作流。这是 MVP 中最有说服力的一篇。

## 上下文

- 对应 `mvp-scope.md` 内容清单 C4
- 难度：入门，章节：beginner
- 依赖：任务 #005（C3）完成后再认领
- 风格基准：对齐 `docs/getting-started/codex-overview.md`

## 产出物

- 文件路径：`docs/beginner/first-bug-fix.md`
- frontmatter：

  ```yaml
  ---
  title: 用 Codex 修一个真实 bug
  description: 60-100 字真实摘要
  order: 3
  difficulty: 入门
  updated: 2026-05-05
  ---
  ```

## 验收标准

- [ ] frontmatter 五个字段完整，description 是真实摘要（60-100 字）
- [ ] 案例必须是真实可复现的场景（不能是"假设有个 bug"，要有具体代码）
- [ ] 完整展示从"发现 bug → 告诉 Codex → 查看 diff → 确认结果"的全流程
- [ ] 超过 20 行的代码块前有说明文字
- [ ] 至少列出 2 个常见坑（如 Codex 改错了怎么办、diff 太大怎么看）
- [ ] 所有代码块标了语言，命令行示例不带 `$` 前缀
- [ ] "下一步"链接到 C5《命令速查表》和 C1《Codex 是什么》
- [ ] 术语符合 glossary.md，人称统一为"你"
- [ ] 无 SEO 黑话，网络化表达 ≤ 2 处

## 边界（不要做的事）

- 不要写 AGENTS.md 深度配置，那是进阶内容
- 不要写多文件大重构场景，保持案例简单聚焦
- 不要修改 `.agents/` 下的任何文件

## 参考资料

- 风格基准文: `docs/getting-started/codex-overview.md`
- `style-guide.md` 第十三条自检清单

## 进度日志

## 阻塞 / 问题（如有）
