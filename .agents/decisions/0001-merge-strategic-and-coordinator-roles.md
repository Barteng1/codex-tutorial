# ADR 0001 · 合并"对话 Claude"与"CC-Lead"为统一的 Cowork 角色

- **状态**: 已通过
- **日期**: 2026-05-02
- **决策者**: 用户

## 背景

初版 `charter.md` 设计了四角色架构：

- 对话 Claude（战略层，在网页 chat 里）
- CC-Lead（协调层，在用户本地的 Claude Code）
- CC-Worker（内容执行）
- Codex Worker（工程执行）

这是基于"对话 Claude 不能直接读写仓库"的限制做的妥协设计。

用户决定将协作迁移到 Claude Cowork（Claude Desktop 内的 Cowork 模式）。Cowork 同时具备战略对话能力、本地文件读写能力、调用 Claude Code 与 CLI 的能力，使原本的两层中转变得多余。

## 决策

转入 Cowork 后，"对话 Claude"与"CC-Lead"两个角色**合并为单一角色 Cowork**。

## 新角色架构

| 角色 | 运行环境 | 职责 |
|------|---------|------|
| Cowork | 用户的 Claude Desktop | 战略规划、任务拆解、派发、PR review、合并、维护项目状态 |
| CC-Worker | 独立的 Claude Code session | 写文章、写文档、按任务卡产出内容 |
| Codex Worker | 独立的 Codex CLI session | 脚手架、配置、构建、部署、代码示例 |

**用户的角色**:

- 与 Cowork 主对话
- 启停 CC-Worker、Codex Worker 的独立 session
- 对涉及风格基线的 PR 做最终拍板

## 决策理由

- 减少层级中转：原本对话 Claude → CC-Lead 之间靠用户搬运上下文，双源容易失同步
- 充分利用 Cowork 的本地文件访问能力，治理文档和任务卡可以由 Cowork 直接维护
- 决策路径变短，遇到边缘情况能立刻处理

## 影响范围

**需要更新的文档**:

- `charter.md` — 角色表、review 规则
- `README.md` — 项目角色快览
- `glossary.md` — 内部 Agent 角色定义
- 后续所有任务卡的 owner 字段（之前提到 CC-Lead 的地方改为 Cowork）

**不变的部分**:

- 七条铁律全部保留
- 风格指南全部保留
- MVP 范围与验收标准
- 任务卡格式与状态流转
- 文件保护清单

## 备选方案与否决理由

**保留四角色架构**：会让 Cowork 的能力空转一半，且持续存在状态同步成本。否决。

**让 Cowork 完全替代所有 Agent（包括 worker）**：失去并行执行优势，且 worker 角色的 context 隔离对避免风格漂移仍有价值。否决。
