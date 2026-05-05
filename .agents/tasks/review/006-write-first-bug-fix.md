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

- 2026-05-05 CC-Worker 认领任务，创建任务卡并提交至 in-progress，基于 main 新建分支 docs/006-write-first-bug-fix
- 2026-05-05 完成文章 `docs/beginner/fix-a-bug.md`，使用分页函数 off-by-one 真实案例，覆盖完整工作流：复现 bug → 描述给 Codex → 分析输出 → 确认修复 → 验证，4 个常见坑
- 2026-05-05 同步将 C3（first-run.md）"下一步"中的占位文字改为真实链接 `[用 Codex 修一个真实 bug](./fix-a-bug.md)`
- 2026-05-05 `pnpm build` 一次通过，build complete in 3.54s，无警告无报错

自检清单（style-guide.md §13）：
- [x] frontmatter 五个字段都填了（title / description / order / difficulty / updated）
- [x] 标题层级不超过 H3（H2、H3）
- [x] 文章结构符合六段式（为什么读这篇 / 一句话结论 / 案例步骤 / 完整可复现例子 / 常见坑 / 下一步）
- [x] 所有代码块都标了语言（javascript / bash）
- [x] 命令行示例不带 `$` 前缀
- [x] 至少列了 2 个常见坑（共 4 个）
- [x] "下一步"段落包含 C3 链接、C1 链接，C5 暂为纯文字
- [x] 术语用法符合 glossary.md（Codex CLI、审批模式、off-by-one）
- [x] 全文人称统一为"你"
- [x] 没有 SEO 黑话
- [x] 没有 emoji 堆叠或营销型 emoji
- [x] 网络化表达 ≤ 2 处（本文无网络化表达）

任务卡专属验收项：
- [x] 案例使用真实具体代码（分页函数），可直接 copy 复现
- [x] 展示完整工作流（复现 → 描述 → 分析 → 确认 → 验证）
- [x] `pnpm build` 通过

## 阻塞 / 问题（如有）

- C5《命令速查表》尚未完成，"下一步"中 C5 链接暂用纯文字"即将上线"，待 C5 完成后需回来补链接。
