# RoboIndex

## Authors

- Ce Hao
- Yinglei Zhu

## 项目理念

RoboIndex 致力于建设一个面向机器人研究者与开发者的开源社区基础设施：

- 让机器人论文、代码、实验经验与工程实践能够被持续沉淀与高效复用。
- 连接“论文阅读 -> 代码实现 -> 复现实验 -> 社区协作”的完整闭环。
- 在 Agent 时代推动更高效、更透明、更可协作的机器人科研与开发流程。

## 项目简介

本仓库是 RoboIndex 的启动展示站点（单页中英双语），用于对外介绍项目定位、核心能力、开源资源聚合与投稿经验摘要。

在线地址：

- GitHub Pages: `https://fly-pigth.github.io/RoboIndex.github.io/`

代码仓库：

- `https://github.com/fly-pigTH/RoboIndex.github.io`

## 本地运行

1. 直接打开 `index.html`。
2. 或在仓库根目录启动静态服务：
   - `python3 -m http.server 8000`
   - 打开 `http://localhost:8000`

## 仓库结构

- `index.html`: 页面结构与内容挂载点
- `assets/styles.css`: 页面样式与响应式布局
- `assets/main.js`: 中英文本、数据渲染与交互逻辑
- `assets/paper-previews/`: 论文卡片配图与视频预览资源
- `proposal.md`: RoboIndex 项目提案原稿
- `RA-L 投稿攻略.md`: 投稿经验原始文档

## 社区贡献

欢迎社区开发者、研究者和学生一起完善 RoboIndex。你可以通过以下方式参与：

- 提交 Issue：反馈 Bug、提出功能建议、补充资源需求。
- 提交 Pull Request：修复问题、优化页面、补充文档或数据内容。
- 补充内容：推荐机器人论文、开源项目、复现经验与投稿经验。

建议贡献流程：

1. Fork 本仓库并克隆到本地。
2. 基于 `dev` 分支创建你的功能分支（例如 `feat/add-xxx`）。
3. 完成修改后本地自检（页面可正常打开、核心链接可访问）。
4. 提交代码并推送到你的 Fork。
5. 发起 PR 到本仓库 `dev` 分支，并附上变更说明；若涉及页面样式，建议附截图。

提交信息建议使用清晰前缀：`feat:`、`fix:`、`docs:`、`chore:`。

## 内容来源与署名

站点中展示的 RA-L 投稿经验内容为摘要，来源如下：

- 文档：`RA-L 投稿攻略`
- 作者：郝策（Ce Hao）
- 更新日期：2026-02-18

二次传播时请保留以上来源与署名信息。
