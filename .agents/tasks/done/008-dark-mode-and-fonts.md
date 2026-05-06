---
id: 008
title: 暗色模式、中文字体回退、代码高亮主题
owner: Codex Worker
type: feat
priority: P2
estimate: 1h
created: 2026-05-05
depends_on: 003
---

## 目标

完成工程 E3：配置暗色模式切换、中文字体回退栈、代码高亮主题，让网站在明暗两种模式下都有基本可读性，中文不显示默认衬线字体。

## 上下文

- 对应 `mvp-scope.md` 工程清单 E3
- 依赖：任务 #003（sidebar 配置）已完成合入 main
- MVP 原则：用 VitePress 默认主题能搞定的就不引入额外依赖，视觉精修是 MVP 后的事

## 产出物

修改或新增以下文件：

- `docs/.vitepress/theme/index.ts`（如需自定义主题入口）
- `docs/.vitepress/theme/custom.css`（字体回退栈、微调变量）
- `docs/.vitepress/config.ts` 中补充代码高亮主题配置

具体要求：
1. **暗色模式**：使用 VitePress 内置 `appearance: true` 即可（用户可手动切换），不需要自定义实现
2. **中文字体回退栈**：CSS 变量覆盖，优先无衬线字体，顺序参考：`'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif`
3. **代码高亮主题**：在 config.ts 的 `markdown.theme` 里配置明暗两套主题，推荐 `{ light: 'github-light', dark: 'github-dark' }`

## 验收标准

- [ ] `pnpm dev` 后页面右上角有明暗切换按钮，切换生效
- [ ] 暗色模式下正文和代码块可读性正常
- [ ] 中文字符不显示宋体/衬线字体（在 Windows Chrome 下验证）
- [ ] 代码块明暗两套高亮主题正常切换
- [ ] `pnpm build` 成功，无报错
- [ ] 没有引入额外字体文件或 npm 包
- [ ] 任务卡进度日志里写明验证步骤

## 边界（不要做的事）

- 不要引入自定义字体文件（如 Google Fonts、本地 woff2）
- 不要改颜色系统或间距，视觉精修是 MVP 后的事
- 不要修改 `.agents/` 下的任何文件

## 参考资料

- VitePress 主题扩展: https://vitepress.dev/guide/extending-default-theme
- VitePress 代码高亮: https://vitepress.dev/reference/site-config#markdown-theme
- VitePress appearance 配置: https://vitepress.dev/reference/site-config#appearance

## 进度日志

- 2026-05-05: 已在 `docs/.vitepress/config.ts` 添加 `appearance: true`，并配置 `markdown.theme` 为 `{ light: 'github-light', dark: 'github-dark' }`。
- 2026-05-05: 已新增 `docs/.vitepress/theme/index.ts` 继承 VitePress 默认主题，并引入 `docs/.vitepress/theme/custom.css`；CSS 仅覆盖 `--vp-font-family-base` 与 `body` 字体栈，未引入字体文件或额外 npm 包。
- 2026-05-05: 本地环境版本：Node `v24.14.1`，pnpm `9.15.4`。
- 2026-05-05: 运行 `corepack pnpm dev --host 127.0.0.1`，访问 `/`、`/getting-started/codex-overview`、`/beginner/install-codex-cli`、`/beginner/first-run` 均返回 200。
- 2026-05-05: 使用 Windows Chrome headless + DevTools Protocol 验证 `/beginner/install-codex-cli`：存在 `VPSwitchAppearance` 明暗切换按钮；点击后 `html.dark` 与按钮标题在明暗状态间切换；`body` 计算字体为 `"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif`；页面代码块数量为 27，Shiki token 样式包含 `--shiki-light` 与 `--shiki-dark` 双主题变量。
- 2026-05-05: 运行 `corepack pnpm build` 成功，VitePress build complete，无报错。

## 阻塞 / 问题（如有）
