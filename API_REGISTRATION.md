# API 注册指南

## 🎯 目标

注册所有需要的 API 密钥，用于 EarningsPulse 项目的数据采集和分析。

---

## 📋 需要的 API

### 1. SEC EDGAR API 🔴 优先级：高

**用途**: 获取美国上市公司财报数据

**注册地址**: https://www.sec.gov/edgar/sec-api-documentation

**步骤**:

1. 访问 SEC EDGAR API 文档
2. 阅读 API 使用条款和限制
3. 获取 User-Agent（格式：`你的邮箱/你的应用名称`）
4. 无需 API key，但需要遵守速率限制
5. 记录你的 User-Agent 信息

**注意事项**:
- 需要声明 User-Agent 头部
- 速率限制：每秒 10 个请求
- 必须声明你是谁（邮箱）

---

### 2. Yahoo Finance API 🟡 优先级：中

**用途**: 获取股票实时价格和历史数据

**注册地址**: https://finance.yahoo.com/

**步骤**:

1. 注册 Yahoo Finance 账号（免费）
2. 可能需要申请 API 访问权限
3. 获取 API key（如果可用）

**注意事项**:
- Yahoo Finance API 可能限制较多
- 考虑使用第三方封装库（如 `yfinance` Python）
- 检查官方 API 使用条款

---

### 3. Alpha Vantage API 🟡 优先级：中

**用途**: 获取股票数据、技术指标、财务报表

**注册地址**: https://www.alphavantage.co/support/#api-key

**步骤**:

1. 访问 Alpha Vantage 注册页面
2. 填写表单（免费）
3. 选择 "Free" 计划
4. 确认邮箱
5. 获取 API key

**免费计划限制**:
- 每日 25 次请求
- 每分钟 5 次请求
- 适合开发和测试

**升级考虑**:
- 如果生产环境需要更多请求
- 可选择付费计划

---

### 4. FinViz API 🟡 优先级：中

**用途**: 获取股票筛选、财务数据、市场数据

**注册地址**: https://finviz.com/api.html

**步骤**:

1. 访问 FinViz API 页面
2. 注册账号
3. 申请 API 访问（可能需要付费）
4. 获取 API key

**注意事项**:
- FinViz API 可能需要付费
- 检查免费 tier 是否可用
- 评估是否符合预算

---

## 📝 API Key 管理

### 存储位置

创建一个 `.env` 文件（不提交到 Git）：

```env
# SEC EDGAR
SEC_USER_AGENT="your-email@example.com/EarningsPulse"

# Alpha Vantage
ALPHA_VANTAGE_API_KEY="your-api-key"

# FinViz
FINVIZ_API_KEY="your-api-key"

# Yahoo Finance（如果需要）
YAHOO_FINANCE_API_KEY="your-api-key"
```

### 安全措施

1. ✅ 永远不将 API keys 提交到 Git
2. ✅ 使用 `.gitignore` 排除 `.env` 文件
3. ✅ 在生产环境使用环境变量
4. ✅ 定期轮换 API keys（如果允许）

---

## 🎯 完成检查

注册完所有 API 后，填写以下信息：

| API | 已注册？ | API Key | 速率限制 | 用途 |
|------|---------|----------|----------|------|
| SEC EDGAR | [ ] | N/A | 10 req/s | 财报数据 |
| Alpha Vantage | [ ] | | 25/day, 5/min | 股票数据 |
| FinViz | [ ] | | 检查中 | 市场数据 |
| Yahoo Finance | [ ] | | 检查中 | 实时价格 |

---

## 📌 注意事项

- 所有 API 都有速率限制，请在生产环境考虑付费计划
- 遵守所有 API 的使用条款
- 定期检查 API 文档，了解更新和限制变化
- 保存所有 API keys 和相关文档

---

**文档创建时间**: 2026-03-11
**最后更新**: 2026-03-11 21:30
