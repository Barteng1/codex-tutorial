---
id: 006
title: 写《用 Codex 修一个真实 bug》文章
owner: CC-Worker
type: docs
priority: P1
estimate: 3h
created: 2026-05-05
---

## 目标

完成 MVP 第四篇文章 C4，用一个完整、真实、可复现的案例展示用 Codex CLI 定位并修复 bug 的完整工作流，让读者能把这套流程套用到自己的项目上。

## 上下文

- 对应 `mvp-scope.md` 内容清单 C4
- 难度：入门，章节：beginner
- 依赖：任务 005（C3《第一次跑通 Codex》）已完成
- 本文是 C3 "下一步"中"用 Codex 修一个真实 bug（即将上线）"的目标页，路径须与 C3 占位文字对齐：`./fix-a-bug.md`
- 本文完成后需回 C3 把纯文字"即将上线"改为真实链接

## 产出物

- 文件路径：`docs/beginner/fix-a-bug.md`
- frontmatter：
  ```yaml
  ---
  title: 用 Codex 修一个真实 bug
  description: 用一个分页函数的 off-by-one bug 为例，完整演示如何用 Codex CLI 定位问题、确认修复方案、验证结果——这套流程可以直接套用到你自己的项目里。
  order: 3
  difficulty: 入门
  updated: 2026-05-05
  ---
  ```
- 案例使用真实具体的代码（分页函数 off-by-one bug），不能用虚构的"假设有个 bug"

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
- [ ] 案例代码真实可运行（读者 copy 后能复现 bug 和修复）
- [ ] 展示完整工作流：复现 bug → 描述给 Codex → 确认修复 → 验证
- [ ] `pnpm build` 通过

## 边界（不要做的事）

- **不要虚构场景**，案例必须用真实具体的代码
- **不要深讲 AGENTS.md、MCP、Skills**
- **不要写安装或入门流程**，这些在 C1-C3 已覆盖
- **不要顺手修改 sidebar 配置**
- **不要修改 `.agents/` 中受保护的文件**

## 参考资料

- `docs/beginner/first-run.md`（前置文章，衔接风格）
- `style-guide.md` 第十三条自检清单

## 进度日志

## 阻塞 / 问题（如有）
