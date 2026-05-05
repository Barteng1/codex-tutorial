---
title: 第一次跑通 Codex
description: 装好 Codex CLI 后，用一个真实的小任务跑通第一次完整对话——从启动、输入指令、确认操作，到看懂 Codex 的输出。
order: 2
difficulty: 入门
updated: 2026-05-05
---

## 为什么读这篇

装好 Codex CLI、配好 API Key，然后呢？很多人第一次打开 `codex` 就懵了——它和 ChatGPT 的交互方式完全不同，它会主动修改你的文件、执行命令，还会一直问你"这个操作要不要允许"。

这篇文章用一个真实的小任务，带你完整走一遍第一次对话，搞清楚审批模式是什么、怎么给它下指令、看到输出后该怎么处理。

## 一句话结论

在项目目录里运行 `codex`，给它一个具体的小任务，按提示确认操作——整个流程 10 分钟能走完。

## 启动与基本操作

### 第一步：进入一个真实项目目录

Codex 会读取当前目录的文件来理解项目上下文，随便 `cd` 进去什么都行——你自己的项目最好，没有的话新建一个测试目录也可以：

```bash
# 用你自己的项目目录，或新建一个
mkdir my-test-project
cd my-test-project

# 建几个测试文件，让 Codex 有东西可以操作
echo "hello world" > hello.txt
echo "console.log('hi')" > index.js
```

### 第二步：启动 Codex

```bash
codex
```

第一次启动会看到一个交互提示符，类似这样：

```
Codex ›
```

Codex 此时已经在读你当前目录的文件结构了。

### 第三步：理解审批模式

启动 Codex 时，可以用 `--approval-mode` 参数指定它执行有副作用操作（写文件、跑命令）前是否需要你确认：

| 模式 | 含义 | 适合场景 |
|------|------|---------|
| `on-request`（默认） | 每次有副作用操作都问你 | 新手、不熟悉的项目 |
| `never` | 全部自动执行，不问 | 完全信任它的情况 |
| `untrusted` | 每一步都问，包括只读操作 | 对代码库特别敏感时 |

第一次用，默认的 `on-request` 最合适——它会在要写文件或跑命令之前暂停并问你，让你有机会看清楚它打算做什么。

```bash
# 显式指定默认模式启动（和直接 codex 效果一样）
codex --approval-mode on-request
```

### 第四步：输入第一个指令

进入交互提示符后，直接用中文或英文描述任务就行。指令越具体，结果越好。

**太模糊（效果差）：**
```
帮我改一下代码
```

**具体（效果好）：**
```
帮我在当前目录创建一个 README.md，内容包括项目名称"my-test-project"、一行描述"学习 Codex 的测试项目"、以及一个本地运行说明
```

输入后按 Enter，Codex 开始分析任务，你会看到它的思考过程。

### 第五步：确认操作

当 Codex 准备写文件或执行命令时，它会在 `on-request` 模式下暂停，显示它要做的事：

```
Codex wants to create file: README.md
Content:
---
# my-test-project

学习 Codex 的测试项目

## 本地运行

...
---
Allow? [y/n/e]
```

- 输入 `y`：允许这一步操作
- 输入 `n`：拒绝，Codex 会想别的办法或停下来问你
- 输入 `e`：在编辑器里先看一遍再决定

大多数情况下看一眼确认没问题就 `y`，第一次用建议每一步都看一下，培养感觉。

## 完整可复现的例子

从零跑通第一次对话的完整流程：

```bash
# 1. 准备测试目录
mkdir codex-first-run
cd codex-first-run
echo "function add(a, b) { return a + b }" > utils.js

# 2. 启动 Codex
codex

# 3. 在提示符里输入（按 Enter 发送）
# 帮我给 utils.js 里的 add 函数加上 JSDoc 注释，说明参数类型和返回值类型

# 4. Codex 分析后会提示确认修改 utils.js
# 看一下改动内容，输入 y 确认

# 5. 确认后 Codex 完成修改，你可以查看结果
cat utils.js
```

修改后的 `utils.js` 大致会是：

```javascript
/**
 * 将两个数字相加
 * @param {number} a - 第一个加数
 * @param {number} b - 第二个加数
 * @returns {number} 两数之和
 */
function add(a, b) {
  return a + b
}
```

这就是完整的一次对话——你描述任务，Codex 执行，你确认结果。

## 常见坑

**坑 1：指令太抽象，Codex 猜错了方向**

"帮我优化一下代码"会让 Codex 自己决定优化什么，结果可能不是你想要的。换成"帮我把 utils.js 里的 add 函数改成支持任意数量的参数"这样具体的描述，它才能精准执行。如果结果不对，不用退出重来——直接在提示符里说"不对，我想要的是……"，Codex 支持多轮对话修正。

**坑 2：审批模式选了 `never`，结果 Codex 改了不该改的文件**

`never` 模式下 Codex 会全速执行，不问你确认。在不熟悉的项目或第一次用时，用默认的 `on-request` 更安全，每一步都看清楚再允许。等熟悉它的行为模式之后，再考虑要不要切到 `never`。

**坑 3：Codex 卡住不动，一直在"思考"**

网络超时是最常见的原因——Codex 每次对话都要连 OpenAI API。遇到这种情况，按 `Ctrl+C` 中断，检查网络，然后重新启动。国内环境建议配好代理再用。

**坑 4：退出后上下文消失，再进去 Codex 不记得刚才说的了**

Codex 没有跨会话记忆，每次启动都是全新对话。如果你有项目级的约定想让它记住（比如"这个项目用 TypeScript，所有函数都要加类型"），把这些写进项目根目录的 `AGENTS.md` 文件——Codex 每次启动都会读这个文件作为上下文（后续专文讲解）。

## 下一步

跑通第一次对话之后，可以去看：

- **用 Codex 修一个真实 bug**（即将上线）——一个完整的实战案例，从发现 bug 到提交修复
- [安装 Codex CLI](./install-codex-cli.md)——如果还没装好，先从这里开始
- [Codex 是什么](../getting-started/codex-overview.md)——想了解 Codex 各入口的区别，看这里
