---
id: 002
title: 写《Codex 是什么》（风格基准文）
owner: CC-Worker
type: docs
priority: P0
estimate: 3h
created: 2026-05-02
---

## 目标

完成 MVP 第一篇文章 C1。这篇文章除了让读者理解 Codex 是什么、有哪几个产品入口、能做什么不能做什么，**更关键的作用是作为整个网站的写作风格基准**——后面所有文章都对齐这一篇。

因此本篇要求高于普通文章：写完后 Cowork 一审、用户终审，确认调性立得住才合入。

## 上下文

- 对应 `mvp-scope.md` 内容清单 C1
- 难度：入门
- 章节：getting-started
- 依赖：任务 001（VitePress 骨架）必须先完成
- 风格指南刚定为"B 站 up 主风"，本篇的核心使命是把这个调性立起来给后面四篇文章对齐

## 产出物

- 文件路径：`docs/getting-started/codex-overview.md`
- frontmatter：

  ```yaml
  ---
  title: Codex 是什么
  description: 一句话讲清 Codex 这个名字到底指什么、和 ChatGPT 网页版的区别、新手该从哪里开始
  order: 1
  difficulty: 入门
  updated: 2026-05-02
  ---
  ```

## 验收标准

按 `style-guide.md` 第十三条逐条核对，外加以下针对本文的硬性要求：

- [ ] 在前 100 字内回答"Codex 这名字到底指啥？"
- [ ] 明确区分 Codex 家族下的 5 个入口（CLI / App / Web / IDE 扩展 / iOS），用一个简表呈现
- [ ] 用至少一处类比解释"代理 / agent"的概念（参考 `glossary.md`）
- [ ] 用至少一处第一人称分享建立调性（"我第一次……"）
- [ ] 网络化表达不超过 2 处，禁止任何 SEO 黑话
- [ ] 章节标题无 emoji，正文 emoji ≤ 5 处
- [ ] 概念类文章可使用 `style-guide.md` §3 的例外结构（"它能做什么 / 不能做什么"合并第 3、4 段）
- [ ] "下一步"段落链接到《安装 Codex CLI》（任务 C2）。该文章尚未存在时，可暂用相对路径占位 + 注释说明
- [ ] 不引用具体模型版本号、定价、API 价格细节（容易过时）

## 边界（不要做的事）

- **不要写安装步骤**——那是 C2 的内容
- **不要写 AGENTS.md 详解、MCP、Skills 这类进阶概念**——概览只点到为止
- **不要把 5 个入口的每个都展开讲深度功能**——只是引介，详细使用各自有专文
- **不要罗列模型版本号、定价、API 细节**——保持高层次、抗时效
- **不要修改 `.agents/` 中受保护的文件**
- **不要顺手改 sidebar 或 nav**——独立任务负责

## 参考资料

- `glossary.md`（必读，确保术语准确）
- `style-guide.md` 第一节"写作调性"（必读，新调性）
- OpenAI Codex 官方介绍页: https://openai.com/codex
- Codex CLI 仓库: https://github.com/openai/codex

## 进度日志

- 2026-05-05 CC-Worker 认领任务，移入 in-progress，创建分支 docs/002-write-codex-overview
- 2026-05-05 完成文章 docs/getting-started/codex-overview.md，按 style-guide.md §13 自检清单逐条核对通过，提交至工作分支，任务卡移入 review

自检清单（style-guide.md §13）：
- [x] frontmatter 五个字段都填了（title / description / order / difficulty / updated）
- [x] 标题层级不超过 H3（仅用 H2、H3）
- [x] 文章结构符合六段式概念类例外（第 3、4 段合并为"能做什么 / 不能做什么"）
- [x] 所有代码块都标了语言（本文无代码块，不适用）
- [x] 命令行示例不带 $ 前缀（本文无命令行示例，不适用）
- [x] 至少列了 2 个常见坑（坑 1：初代 Codex 混淆；坑 2：入口选错）
- [x] "下一步"段落链接到 1-3 篇相关文章（链接到 C2，含路径占位注释）
- [x] 术语用法符合 glossary.md（Codex CLI / App / Web / IDE 扩展 / iOS，agent 译为"代理"）
- [x] 全文人称统一为"你"
- [x] 没有 SEO 黑话
- [x] 没有 emoji 堆叠或营销型 emoji（正文无 emoji）
- [x] 网络化表达 ≤ 2 处（本文无显式网络化表达）

任务卡专属验收项：
- [x] 前 ~100 字内通过"一句话结论"明确回答 Codex 定义
- [x] 5 个入口以简表呈现（CLI / App / Web / IDE 扩展 / iOS）
- [x] 顾问 vs 实习生类比解释"代理（agent）"概念
- [x] 第一人称分享（"我第一次看到这个表格时有点懵"）
- [x] 未引用模型版本号、定价、API 细节
- [x] 未修改 .agents/ 受保护文件，未改 sidebar / nav

## 阻塞 / 问题（如有）

- 2026-05-05 **仓库未配置远程**：本地仓库没有 git remote，CC-Worker 无法直接推送分支并创建 GitHub PR。需要 Cowork / 用户：
  1. 在 GitHub 新建仓库
  2. `git remote add origin <repo-url>`
  3. `git push -u origin docs/002-write-codex-overview`
  4. 在 GitHub 开 PR，描述中链接任务卡：`.agents/tasks/review/002-write-codex-overview.md`
  工作分支 `docs/002-write-codex-overview` 已本地就绪，所有 commit 已完成。
