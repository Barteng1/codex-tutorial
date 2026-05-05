# MVP 范围与验收标准

本文档定义"什么时候算 MVP 完成"。任何超出本范围的功能或内容，留到 MVP 上线后再加。

## 一、MVP 总目标

> 一个能用、能读、能部署的网站，包含 5 篇核心内容，让初次访问的读者在 30 分钟内对 Codex 建立基础认知并完成第一次实操。

## 二、内容清单（5 篇核心文章）

| 序号 | 文章 | 难度 | 章节 | 负责 Agent |
|-----|------|------|------|----------|
| C1 | Codex 是什么 | 入门 | getting-started | CC-Worker |
| C2 | 安装 Codex CLI | 入门 | beginner | CC-Worker |
| C3 | 第一次跑通 Codex | 入门 | beginner | CC-Worker |
| C4 | 用 Codex 修一个真实 bug（完整案例） | 入门 | beginner | CC-Worker |
| C5 | 命令速查表 | 参考 | reference | CC-Worker（内容） + Codex Worker（如需交互） |

每篇文章必须满足 `style-guide.md` 第十三条自检清单。

## 三、技术与工程清单

| 编号 | 工程产出物 | 负责 Agent |
|-----|----------|----------|
| E1 | VitePress 项目初始化（含 package.json、基础配置） | Codex Worker |
| E2 | 侧边栏与首页（按章节结构） | Codex Worker |
| E3 | 暗色模式、中文字体回退、代码高亮主题（默认主题即可） | Codex Worker |
| E4 | 内置全文搜索接入（MiniSearch） | Codex Worker |
| E5 | 部署配置（Cloudflare Pages 优先，备选 Vercel） | Codex Worker |
| E6 | 自定义容器（::: tip / warning / danger）样式微调 | Codex Worker |
| E7 | README 与本地启动说明 | Codex Worker |

## 四、不在 MVP 内的（明确排除）

为避免范围蔓延，以下功能 MVP **不做**：

- 进阶、高级章节的全部文章
- 评论系统
- 多语言版本
- 自定义首页 hero 区视觉设计（用 VitePress 默认 hero）
- 交互式 Codex 命令模拟器
- RSS / 邮件订阅
- 阅读进度、点赞、收藏
- 自定义字体引入与排版精修
- 视频或动图教程
- Analytics / 埋点
- SEO 精细化（基础 meta 即可）

任何 Agent 在 MVP 阶段碰到上述项的需求，按章程第七条"立即停下来上报"。

## 五、验收标准

MVP 完成 = 以下全部满足：

- [ ] 5 篇文章在 main 分支可见，frontmatter 完整
- [ ] 5 篇文章都通过 `style-guide.md` 自检
- [ ] `pnpm build` 在本地成功，无报错无警告
- [ ] 部署到生产环境，公网可访问
- [ ] 首页有清晰的导航入口指向 5 篇文章
- [ ] 全文搜索可用，能搜到中文内容
- [ ] 移动端基本可读（不要求精细打磨，能看不错位即可）
- [ ] 所有外链可用，无 404

## 六、节奏目标

```
阶段 0：立宪（已完成 / 进行中）
   产出 .agents/ 治理文档全套

阶段 1：脚手架 + 第一篇基准文
   - Codex Worker：完成 E1 ~ E3，让 vitepress dev 能跑起来
   - CC-Worker：写 C1《Codex 是什么》，作为风格基准
   - CC-Lead 与对话 Claude（通过用户）：审稿，确认基准建立

阶段 2：并行产出剩余 4 篇 + 工程收尾
   - CC-Worker：写 C2 ~ C5
   - Codex Worker：完成 E4 ~ E7
   - CC-Lead：持续 review、合并

阶段 3：部署上线 + 走查
   - 部署到 Cloudflare Pages
   - 全员走查一遍真实站点
   - 修明显问题
```

> 用户已确认: **先快速出 MVP，视觉样式可以后期调优**。所有 Agent 决策时按这个偏好优先 —— 遇到"做或不做某个视觉细节"的犹豫，默认选**不做**。

## 七、什么时候 MVP 升级到 v0.2

MVP 上线后，根据访问数据和用户反馈决定下一阶段重点。下面是预备清单，但**不在 MVP 内**：

- 进阶章节首篇（AGENTS.md 详解）
- 命令速查表的交互过滤
- 视觉打磨（首页 hero、字体、间距）
- 一个或两个真实代码案例的进阶版
