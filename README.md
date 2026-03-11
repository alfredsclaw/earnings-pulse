# EarningsPulse - 财报监察 APP

实时监控上市公司财报数据，通过数据挖掘分析业绩表现，检测到十分亮眼的业绩时自动提醒的多平台应用。

---

## 🎯 项目概述

EarningsPulse 帮助投资者：

- ⚡ **实时监控**：500+ 家上市公司的财报数据
- 📊 **智能分析**：自动检测超预期业绩和增长趋势
- 🔔 **智能提醒**：自定义阈值，及时接收关键财报通知
- 📈 **数据可视化**：交互式图表展示业绩趋势
- 📱 **多平台**：支持 Web、iOS、Android

---

## 🚀 快速开始

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 运行开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

---

## 📋 技术栈

### 后端
- **框架**: Next.js 14 (App Router)
- **数据库**: Supabase PostgreSQL
- **认证**: Supabase Auth
- **API**: Next.js API Routes
- **数据采集**: Python + asyncio

### 前端
- **框架**: Next.js 14 + React
- **状态管理**: Zustand
- **UI 组件**: shadcn/ui (Radix UI)
- **图表**: Recharts / Chart.js
- **样式**: Tailwind CSS

### 移动端
- **框架**: React Native + Expo
- **导航**: React Navigation
- **推送**: Expo Notifications

---

## 📊 核心功能

### 1. 实时财报数据采集
- SEC EDGAR API
- Yahoo Finance API
- Alpha Vantage API
- FinViz API

### 2. 智能业绩分析
- 同比/环比增长分析
- 超预期检测（EPS beat rate）
- 利润率趋势分析
- 市场反应分析

### 3. 自定义阈值设置
- 营收增长率 > 50%
- EPS 超预期 > 20%
- 利润率提升 > 10%
- 连续 3 季正向指引

### 4. 多渠道提醒
- APP 推送通知
- Telegram Bot 通知
- 邮件摘要
- Web 浏览器通知

### 5. 数据可视化
- 交互式图表
- 趋势曲线
- 同业对比

---

## 🗂️ 项目结构

```
earnings-pulse/
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/        # React 组件
│   ├── lib/             # 工具函数
│   └── types/           # TypeScript 类型
├── docs/               # 项目文档
└── public/             # 静态资源
```

---

## 🔧 开发流程

### 1. 分支管理

```bash
# 创建功能分支
git checkout -b feature/your-feature-name

# 提交更改
git add .
git commit -m "描述你的更改"

# 推送到远程
git push origin feature/your-feature-name
```

### 2. 代码规范

- 使用 TypeScript
- 遵循 ESLint 规则
- 使用 Prettier 格式化
- 编写测试

### 3. 测试

```bash
# 运行测试
npm test

# 运行 E2E 测试
npm run test:e2e
```

---

## 📝 贡献指南

欢迎贡献！请遵循以下步骤：

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

---

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

---

## 🤝 开发团队

- **分析师 AI**: 需求分析和数据源评估
- **数据 AI**: 数据流程设计和 API 集成
- **代码程序员 AI**: 开发规划和技术架构
- **创意与艺术 AI**: UI/UX 设计
- **专业顾问 AI**: 产品策略和用户研究
- **安全监察 AI**: 合规审查和安全评估

---

## 📞 联系我们

- **项目文档**: `/Users/ai2/.openclaw/workspace/projects/EarningsPulse/`
- **GitHub 仓库**: https://github.com/alfredsclaw/earnings-pulse
- **Telegram**: @AAL2415

---

**项目开始日期**: 2026-03-11
**当前阶段**: Phase 1 - 需求分析与设计（85%完成）
