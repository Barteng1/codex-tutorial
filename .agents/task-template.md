# 任务卡模板

CC-Lead 派发的任务、worker 接到的任务，统一用本模板。任务卡是 markdown 文件，存放在 `.agents/tasks/` 下对应状态目录。

## 文件命名

`<编号>-<简短描述>.md`，全部小写 kebab-case。

例: `006-write-install-codex-cli.md`、`012-setup-vitepress-search.md`

编号由 CC-Lead 统一分配，按创建顺序递增。

## 状态目录

| 目录 | 含义 |
|------|------|
| `tasks/open/` | 已创建、待认领 |
| `tasks/in-progress/` | 已被某个 Agent 接手，正在执行 |
| `tasks/review/` | 已交付待 review，或被阻塞需要介入 |
| `tasks/done/` | 已合并 |

进入新状态时，由对应 Agent 移动文件并 commit。commit 信息格式: `chore: move task #006 to in-progress`。

## 模板

```markdown
---
id: 006
title: 写《安装 Codex CLI》文章
owner: CC-Worker            # 主负责 Agent
type: docs                  # docs | feat | fix | chore | refactor
priority: P1                # P0 紧急 | P1 高 | P2 中 | P3 低
estimate: 2h                # 估时
created: 2026-05-02
---

## 目标

一句话写清楚做完这个任务读者 / 项目能得到什么。

## 上下文

- 这个任务为什么现在做（链接到 mvp-scope.md 对应条目）
- 依赖哪些已完成的任务（任务卡路径）
- 读者画像（如果是文章任务）

## 产出物

- 具体到文件路径与文件类型
- 例: `docs/beginner/install-codex-cli.md`，符合 style-guide.md 第十三条
- 例: 修改 `docs/.vitepress/config.ts`，新增 search 配置

## 验收标准

逐条列出可勾选项。CC-Lead review 时按这个清单核对。

- [ ] 标题为《安装 Codex CLI》
- [ ] 覆盖 macOS / Linux / Windows（含 WSL）三种环境
- [ ] 包含国内网络注意事项（这是关键卖点）
- [ ] 含至少 2 个常见坑
- [ ] frontmatter 完整且 difficulty: 入门

## 边界（不要做的事）

明确写出 worker 不应该越界做的事，避免范围蔓延。

- 不要写"账号注册"流程，那是另一篇文章的内容
- 不要顺手改 sidebar 配置，sidebar 由独立任务负责
- 不要写"第一次使用"内容，那是任务 #007

## 参考资料

- 已经在仓库里的相关文件
- 站外链接（如官方文档），首次添加由 CC-Lead 验证可用

## 进度日志

(由 owner 在执行过程中追加，每次更新加日期前缀)

## 阻塞 / 问题（如有）

(遇到无法解决的问题写这里，并把任务卡移到 tasks/review/)
```

## 任务卡使用规则

1. **创建**: CC-Lead 创建任务卡时填写从 frontmatter 到"参考资料"全部段落，"进度日志"和"阻塞"留空。
2. **认领**: Worker 把文件移到 `tasks/in-progress/`，如果初始没指定 owner 就在 frontmatter 写自己。
3. **执行**: 重要动作或决策记录到"进度日志"，每条加日期。
4. **交付**: 完成后把任务卡移到 `tasks/review/`，提交 PR，PR 描述链接到任务卡。
5. **合并**: CC-Lead review 通过后合并 PR，把任务卡移到 `tasks/done/`。
6. **阻塞**: 按章程铁律 6 处理 —— 把任务卡移到 `tasks/review/` 并在"阻塞 / 问题"段落写清楚。

## 一个最小可执行任务卡的示例

下面是一个真实可用的任务卡示例（可直接复制为模板使用）：

```markdown
---
id: 001
title: 初始化 VitePress 项目骨架
owner: Codex Worker
type: feat
priority: P0
estimate: 1h
created: 2026-05-02
---

## 目标

让 `pnpm dev` 能在本地启动一个空白但结构完整的 VitePress 站点，作为后续所有内容和工程任务的基底。

## 上下文

- mvp-scope.md 工程清单 E1
- 无前置依赖

## 产出物

- `package.json`（含 vitepress 依赖、dev / build / preview 脚本）
- `docs/.vitepress/config.ts`（最简配置，title、description、lang: zh-CN）
- `docs/index.md`（占位首页，仅有 frontmatter 和一个标题）
- `.gitignore`（标准 Node 项目）
- `README.md`（如何本地启动）

## 验收标准

- [ ] `pnpm install` 成功
- [ ] `pnpm dev` 启动后浏览器打开 http://localhost:5173 能看到首页
- [ ] `pnpm build` 成功
- [ ] 在任务卡进度日志里写明 Node、pnpm 版本

## 边界（不要做的事）

- 不要现在就配置 sidebar、导航、搜索（那是后续独立任务）
- 不要引入额外样式或组件库
- 不要做部署配置（独立任务）

## 参考资料

- VitePress 官方文档: https://vitepress.dev

## 进度日志

## 阻塞 / 问题（如有）
```
