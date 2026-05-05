# 术语表

确保四个 Agent 用同一套词汇说同一件事。任何 Agent 写作或写代码注释时遇到本表内的术语，必须按本表用法。

## Codex 家族

| 术语 | 含义 | 不要写成 |
|------|------|---------|
| Codex | OpenAI 2025 年回归后的整个 AI 编程代理产品家族 | OpenAI Codex（首次明确出处时除外） |
| Codex CLI | Codex 的终端版本，开源、Rust 实现 | codex 终端 / Codex 命令行 |
| Codex App | Codex 的桌面客户端（macOS / Windows） | Codex 桌面版 |
| Codex Web | chatgpt.com/codex 上的云端代理 | Codex 网页 / Codex Cloud |
| Codex IDE 扩展 | VS Code、Cursor、Windsurf 等编辑器的扩展 | Codex 插件（避免与 MCP 工具混淆） |
| Codex iOS | iOS 端 App | Codex 手机版 |

注：历史上的 OpenAI Codex（2021-2023 年版本）在内容中如需提及，写作"初代 Codex"或"早期 Codex"。

## 核心概念

| 术语 | 含义 |
|------|------|
| AGENTS.md | 项目根目录下的配置文件，告诉 Codex 项目规范、构建命令、约定。读者首次接触必须解释 |
| 斜杠命令 | Codex CLI 中以 `/` 开头的内置命令，如 `/init`、`/review`、`/compact` |
| 审批模式 | Codex 执行有副作用动作前的确认机制，分 untrusted / on-request / never |
| MCP | Model Context Protocol，Codex 接入外部工具和上下文的协议。首次出现写"MCP（Model Context Protocol）" |
| Skill | Codex 的能力模块，可以扩展或自定义。和 MCP 工具不同，必要时区分说明 |

## 网站内部分类

| 术语 | 含义 |
|------|------|
| 入门 / 进阶 / 高级 / 参考 | 四个难度 / 类别。frontmatter 的 `difficulty` 字段必须是这四个之一 |
| 章节 | 网站侧边栏的顶级目录，对应 `getting-started/`、`beginner/`、`intermediate/`、`advanced/`、`reference/` |

## 内部 Agent 角色（仅 `.agents/` 文档使用）

| 术语 | 含义 |
|------|------|
| Cowork | 用户的 Claude Desktop Cowork 模式，承担战略 + 协调双重职责 |
| CC-Worker | 独立 Claude Code session，写文章和文档 |
| Codex Worker | 独立 Codex CLI session，写代码、配置、部署 |

注：在用户可见的内容中，**从不出现** "CC-Worker"、"Codex Worker"、"Cowork" 等内部代号。

## 容易混淆的对照

- **agent / Agent**: 写给读者的内容用小写 "agent" 或译为"代理"；内部 `.agents/` 文档用大写 "Agent" 指代项目内的角色。
- **Codex Worker（项目内 Agent 角色） vs Codex（产品名）**: 在面向读者内容中只能出现 "Codex" 指产品；项目内部沟通才出现 "Codex Worker"。
- **AGENTS.md（产品里的项目配置文件） vs .agents/（本项目的治理目录）**: 写给读者的所有内容只能提到 AGENTS.md，**不暴露 `.agents/` 的存在**。
- **Cowork（项目内角色） vs Cowork（产品功能）**: `.agents/` 中提到 "Cowork" 指本项目里担任战略 + 协调的 Agent 角色；面向读者的内容如需提及该产品，称 "Claude Cowork"。
