---
id: 004
title: 写《安装 Codex CLI》文章
owner: CC-Worker
type: docs
priority: P0
estimate: 2h
created: 2026-05-05
---

## 目标

完成 MVP 文章 C2《安装 Codex CLI》，让读者能在自己的机器上顺利装好 Codex CLI，并解决当前 `pnpm build` 报错的死链问题（codex-overview.md 中占位链接 `../beginner/install-codex-cli.md` 指向本文）。

## 上下文

- 对应 `mvp-scope.md` 内容清单 C2
- 难度：入门，章节：beginner
- 依赖：任务 #001（VitePress 骨架）、#003（sidebar 配置）均已完成合入 main
- 风格基准：对齐已合入的 `docs/getting-started/codex-overview.md`（务必读一遍）
- 本文完成后 `pnpm build` 应能通过（消除死链）

## 产出物

- 文件路径：`docs/beginner/install-codex-cli.md`
- frontmatter：

  ```yaml
  ---
  title: 安装 Codex CLI
  description: 60-100 字真实摘要，说清楚本文帮读者完成什么
  order: 1
  difficulty: 入门
  updated: 2026-05-05
  ---
  ```

## 验收标准

- [ ] frontmatter 五个字段完整，description 是真实摘要（60-100 字）
- [ ] 覆盖 macOS、Linux、Windows（含 WSL）三种环境的安装方式
- [ ] 包含国内网络注意事项（npm 镜像 / 代理）
- [ ] 至少列出 2 个常见坑（附解决办法）
- [ ] 含完整可复现的安装验证步骤（装完怎么确认装成功）
- [ ] 所有代码块标了语言，命令行示例不带 `$` 前缀
- [ ] "下一步"段落链接到《第一次跑通 Codex》（路径占位 + 注释即可）
- [ ] 术语符合 glossary.md，人称统一为"你"
- [ ] 无 SEO 黑话，网络化表达 ≤ 2 处
- [ ] `pnpm build` 在本地执行后死链错误消失

## 边界（不要做的事）

- 不要写"第一次使用"操作流程，那是 C3 的内容
- 不要写账号注册流程
- 不要修改 sidebar / nav 配置
- 不要修改 `.agents/` 下的任何文件

## 参考资料

- Codex CLI 官方仓库: https://github.com/openai/codex
- 风格基准文: `docs/getting-started/codex-overview.md`
- `style-guide.md` 第十三条自检清单

## 进度日志

## 阻塞 / 问题（如有）
