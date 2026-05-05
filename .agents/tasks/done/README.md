# Agent 协作中枢

本目录是 Codex 学习站项目所有 Agent 的"共同语言"。无论你是哪个 Agent，第一次接入项目时，按以下顺序读完：

1. `charter.md` —— 协作章程，必须遵守的铁律
2. `style-guide.md` —— 写作和代码风格统一指南
3. `glossary.md` —— 术语表，避免词义漂移
4. `mvp-scope.md` —— 当前阶段做什么、什么时候算完
5. `task-template.md` —— 任务卡片标准格式

## 项目角色快览

- **Cowork**（用户的 Claude Desktop）：战略规划、任务拆解、派发、PR review、合并、维护项目状态
- **CC-Worker**（独立 Claude Code session）：写文章和文档
- **Codex Worker**（独立 Codex CLI session）：脚手架、配置、构建、部署、代码示例

> 早期版本中分别存在"对话 Claude"和"CC-Lead"两个角色，转入 Cowork 后已合并。详见 `decisions/0001-merge-strategic-and-coordinator-roles.md`。

## 与各 Agent 自带配置文件的关系

Claude Code 自带的 `CLAUDE.md` 和 Codex 自带的 `AGENTS.md` 各自是**入口指引**，内容应当极简，只做一件事：

> 在执行任何任务前，先读 `.agents/README.md`，并按其指引读完前置文档。

具体规则、风格、任务清单全部以本目录下的文件为准，不在 `CLAUDE.md` / `AGENTS.md` 里复制粘贴一份，避免双源失同步。

## 仓库与目录约定

```
.agents/
├── README.md           ← 你正在读
├── charter.md          ← 铁律
├── style-guide.md      ← 写作 + 代码 + 工程风格
├── glossary.md         ← 术语表
├── mvp-scope.md        ← 当前阶段范围
├── task-template.md    ← 任务卡格式
├── tasks/
│   ├── open/           ← 待认领
│   ├── in-progress/    ← 进行中
│   ├── review/         ← 待 review 或被阻塞
│   └── done/           ← 已合并
└── decisions/          ← 重要决策记录（ADR）
```

## 项目状态

- **当前阶段**: 阶段 0（治理文档建立）→ 阶段 1（脚手架 + 第一篇）
- **节奏目标**: 先快速出 MVP，视觉样式后期调优
- **最近一次更新**: 2026-05-02

## 我该怎么办

- **想接活**: 去 `tasks/open/` 找任务卡，挑一个，按规则移到 `tasks/in-progress/`。
- **想报告状态**: 在任务卡里更新进度日志，必要时移到对应状态目录，提交 commit。
- **遇到不确定**: 按 `charter.md` 第 6 条"失败要冒泡"，把任务卡移到 `tasks/review/`，写明问题。**不要自作主张改方向**。
