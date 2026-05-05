---
title: 命令速查表
description: Codex CLI 所有常用命令一览：启动参数、会话内斜杠命令、审批模式、环境变量，附简要说明，速查即用。
order: 1
difficulty: 参考
updated: 2026-05-05
---

这里汇总了 Codex CLI 的所有常用命令和参数。需要详细教程的话，右边的"相关文章"是入口。

## CLI 启动命令

在终端里调用 `codex` 时可以用的参数。

### 基本用法

```bash
# 进入交互对话模式（最常用）
codex

# 直接执行单条指令，完成后退出
codex "帮我给 utils.js 里的所有函数加 JSDoc 注释"

# 指定审批模式启动
codex --approval-mode never

# 指定模型启动
codex --model o4-mini

# 查看版本号
codex --version

# 查看所有参数说明
codex --help
```

### 参数一览

| 参数 | 简写 | 说明 | 示例 |
|------|------|------|------|
| `--approval-mode` | `-a` | 设置审批模式（见下方说明） | `-a never` |
| `--model` | `-m` | 指定使用的模型 | `-m o4-mini` |
| `--quiet` | `-q` | 减少额外输出，只显示结果 | `codex -q "..."` |
| `--no-ansi` | — | 关闭颜色和 ANSI 转义码 | `--no-ansi` |
| `--full-context` | — | 把文件完整内容放入上下文（默认只放结构） | `--full-context` |
| `--version` | — | 显示版本号 | `codex --version` |
| `--help` | `-h` | 显示帮助信息 | `codex --help` |

## 会话内斜杠命令

进入交互模式之后，在提示符里输入的命令。以 `/` 开头。

| 命令 | 说明 |
|------|------|
| `/help` | 显示所有可用的斜杠命令 |
| `/init` | 读取当前项目，生成 `AGENTS.md` 配置文件 |
| `/review` | 让 Codex 审查当前 `git diff`，指出潜在问题 |
| `/compact` | 压缩对话历史，腾出上下文空间（长对话时用） |
| `/clear` | 清空当前会话的对话历史，从头开始 |
| `/exit` | 退出 Codex（也可以用 `Ctrl+C`） |

::: tip /init 的典型用法
在一个新项目里第一次用 Codex 时，先跑一次 `/init`。Codex 会读取你的目录结构、package.json、README 等文件，生成一份 `AGENTS.md`，把项目的构建命令、测试命令、代码约定写进去。之后每次启动 Codex 都会自动读这个文件作为上下文。
:::

## 审批模式

用 `--approval-mode`（或 `-a`）启动时指定，也可以用环境变量 `CODEX_APPROVAL_MODE` 设置默认值。

| 模式 | 含义 | 适合场景 |
|------|------|---------|
| `on-request` | 每次有副作用操作（写文件、跑命令）前都询问 | **默认值**，新手和不熟悉的项目 |
| `never` | 全部自动执行，不询问 | 完全信任、重复性批量任务 |
| `untrusted` | 每一步都询问，包括只读操作 | 对代码库内容高度敏感时 |

```bash
# 全自动模式（危险，谨慎使用）
codex --approval-mode never "把所有 console.log 删掉"

# 最保守模式
codex --approval-mode untrusted
```

::: warning 关于 never 模式
`never` 模式下 Codex 会直接修改文件、执行命令，没有确认步骤。建议只在你明确知道它会做什么的情况下使用，或者配合 git 工作流（改完就能 `git diff` 看变化）。
:::

## 环境变量

| 变量 | 是否必填 | 说明 |
|------|---------|------|
| `OPENAI_API_KEY` | **必填** | OpenAI API Key，没有就跑不起来 |
| `CODEX_MODEL` | 可选 | 设置默认使用的模型，省去每次 `--model` 的麻烦 |
| `CODEX_APPROVAL_MODE` | 可选 | 设置默认审批模式，省去每次 `-a` 的麻烦 |
| `OPENAI_BASE_URL` | 可选 | 自定义 API 地址，用于接入第三方兼容服务或代理 |

```bash
# 写入 ~/.zshrc 或 ~/.bashrc，永久生效
export OPENAI_API_KEY="sk-..."
export CODEX_MODEL="o4-mini"
export CODEX_APPROVAL_MODE="on-request"
```

## 相关文章

- [安装 Codex CLI](../beginner/install-codex-cli.md)——API Key 配置和安装步骤
- [第一次跑通 Codex](../beginner/first-run.md)——审批模式详解和第一次对话
- [用 Codex 修一个真实 bug](../beginner/fix-a-bug.md)——完整工作流实战案例
