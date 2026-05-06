# Codex 学习站

一个面向 Codex 初次使用者的中文教程网站，使用 VitePress 构建。

## 本地启动

```bash
# 安装依赖
pnpm install

# 启动本地开发服务器
pnpm dev
```

开发服务器启动后，访问 `http://localhost:5173` 查看首页。

## 构建与预览

```bash
# 构建静态站点
pnpm build

# 预览构建产物
pnpm preview
```

构建输出目录是 `docs/.vitepress/dist/`。

## 部署

本项目推荐用 Cloudflare Pages 控制台直连 GitHub 仓库部署。当前仓库没有额外部署脚本，也不需要 GitHub Actions；Cloudflare Pages 会在每次推送后自动运行构建命令。

在 Cloudflare Pages 里创建项目时，选择 GitHub 仓库后使用下面的配置：

```bash
# 构建命令
pnpm build

# 构建输出目录
docs/.vitepress/dist
```

VitePress 的 `base` 目前保持默认配置，适用于部署到根域名或 Cloudflare Pages 默认域名。如果以后部署到子路径，例如 `https://example.com/codex/`，再在 `docs/.vitepress/config.ts` 里设置 `base: '/codex/'`。

绑定自定义域名时，在 Cloudflare Pages 项目的 `Custom domains` 页面添加域名，按控制台提示完成 DNS 记录即可。绑定完成后重新访问生产域名，确认首页和文章页都能打开。
