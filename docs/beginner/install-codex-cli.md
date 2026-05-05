---
title: 安装 Codex CLI
description: 手把手带你在 macOS、Linux、Windows（WSL）三种环境下安装 Codex CLI，包含国内网络常见问题的解决方法，10 分钟装好。
order: 1
difficulty: 入门
updated: 2026-05-05
---

## 为什么读这篇

Codex CLI 是 Codex 家族里最适合日常开发的入口，能直接在终端里读写你的代码、跑命令、完成多步骤任务。但装好它需要先搞定 Node.js 版本，国内用户还经常卡在网络上——这篇文章把这两个坑都提前帮你踩掉。

## 一句话结论

Codex CLI 通过 npm 一行命令安装，前提是 Node.js 20 以上，国内用户建议先切换 npm 镜像。

## 安装步骤

### 第一步：确认 Node.js 版本

Codex CLI 要求 Node.js **20 或以上**。先检查当前版本：

```bash
node --version
```

输出类似 `v20.19.0` 或更高就没问题。如果低于 20，或者提示命令找不到，按下面的方法安装/升级：

**macOS / Linux（推荐用 nvm 管理版本）**

```bash
# 安装 nvm（已有可跳过）
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# 重新加载终端配置
source ~/.bashrc   # bash 用户
# 或
source ~/.zshrc    # zsh 用户（macOS 默认）

# 安装并切换到 Node.js 22（LTS）
nvm install 22
nvm use 22
```

**Windows（不用 WSL 的情况）**

去 [nodejs.org](https://nodejs.org) 下载 LTS 版本安装包，一路下一步即可。装完打开新的命令提示符或 PowerShell 验证版本。

**Windows + WSL（推荐）**

Codex CLI 在 WSL 里体验更接近 Linux，推荐用这个方式。在 WSL 终端里按 macOS / Linux 的 nvm 方法安装即可。

---

### 第二步（国内用户）：切换 npm 镜像

直接用官方源装 `@openai/codex` 在国内经常超时。建议先切到淘宝镜像：

```bash
# 切换到淘宝 npm 镜像
npm config set registry https://registry.npmmirror.com

# 确认切换成功
npm config get registry
# 输出：https://registry.npmmirror.com
```

如果你有科学上网工具，也可以直接给 npm 配代理（假设本地代理端口是 7890）：

```bash
npm config set proxy http://127.0.0.1:7890
npm config set https-proxy http://127.0.0.1:7890
```

二选一即可，不需要两种都配。

---

### 第三步：全局安装 Codex CLI

```bash
# 全局安装 Codex CLI
npm install -g @openai/codex

# 安装完成后验证版本号
codex --version
```

看到版本号输出（如 `0.1.x`）就说明安装成功了。

---

### 第四步：配置 API Key

Codex CLI 需要 OpenAI API Key 才能运行。把 Key 写进环境变量：

**macOS / Linux / WSL**

```bash
# 临时设置（当前终端会话有效）
export OPENAI_API_KEY="sk-..."

# 永久设置（写入 shell 配置文件）
echo 'export OPENAI_API_KEY="sk-..."' >> ~/.bashrc   # bash
# 或
echo 'export OPENAI_API_KEY="sk-..."' >> ~/.zshrc    # zsh
source ~/.zshrc
```

**Windows（不用 WSL）**

在系统环境变量里新增 `OPENAI_API_KEY`，值为你的 Key，重开终端生效。

::: tip 去哪里拿 API Key
登录 [platform.openai.com](https://platform.openai.com)，进入 API Keys 页面创建一个新 Key。Key 只显示一次，记得立刻保存到安全的地方。
:::

## 完整验证流程

从零到装好，完整命令序列如下：

```bash
# 1. 确认 Node.js 版本 >= 20
node --version

# 2. 切换 npm 镜像（国内用户）
npm config set registry https://registry.npmmirror.com

# 3. 全局安装
npm install -g @openai/codex

# 4. 验证安装
codex --version

# 5. 设置 API Key（以 zsh 为例）
echo 'export OPENAI_API_KEY="sk-..."' >> ~/.zshrc
source ~/.zshrc

# 6. 最终验证：在任意目录打开 Codex
codex
# 出现交互提示符即安装全部完成
```

## 常见坑

**坑 1：Node.js 版本太低，装上去跑不了**

`npm install -g @openai/codex` 能成功，但 `codex` 命令一运行就报语法错误——这通常是 Node 版本不够导致的。用 `node --version` 确认是否 ≥ 20，不够就先升级。用 nvm 的话，`nvm install 22 && nvm use 22` 两行搞定。

**坑 2：`npm install -g` 提示权限不够（macOS / Linux）**

报 `EACCES: permission denied` 错误时，**不要**用 `sudo npm install -g`——这会造成后续权限混乱。正确做法是修复 npm 全局目录的权限，或者改用 nvm 管理 Node（nvm 安装的 Node 不需要 sudo）。

```bash
# 用 nvm 重新安装 Node，彻底绕开权限问题
nvm install 22
nvm use 22
npm install -g @openai/codex
```

**坑 3：Windows 原生终端装好了，但 `codex` 命令找不到**

安装后关掉终端再重新打开，让 PATH 环境变量刷新。如果还是找不到，在命令提示符里运行 `npm config get prefix` 查看全局安装目录，确认该路径在系统 PATH 里。

**坑 4：国内网络超时，镜像也没用**

极少数情况下，即使用了淘宝镜像，安装 `@openai/codex` 内部依赖时仍可能超时。这时候最直接的办法是开代理，给 npm 配 `proxy` 和 `https-proxy`（参考第二步）。装完可以把代理配置删掉：

```bash
npm config delete proxy
npm config delete https-proxy
```

## 下一步

装好 Codex CLI 之后，就可以在真实项目里跑起来了：

- [第一次跑通 Codex](./first-run.md)——建议从这里开始，10 分钟完成第一次对话
- **用 Codex 修一个真实 bug**（即将上线）——一个完整的实战案例
- [Codex 是什么](../getting-started/codex-overview.md)——如果你还没读过 C1，可以先回去看看背景
