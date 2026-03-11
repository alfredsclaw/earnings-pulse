# 数据库 Schema 设计

**模块负责人**: 代码程序员 AI（OpenClawCodeBot）

**状态**: 🔄 进行中

---

## 📋 概览

EarningsPulse 使用 Supabase PostgreSQL 数据库存储所有数据。

---

## 核心表结构

### 1. users - 用户表

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 启用 Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- 用户只能访问自己的数据
CREATE POLICY "Users can view own data"
ON users FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "Users can update own data"
ON users FOR UPDATE
USING (auth.uid() = id);
```

**字段说明**:
- `id`: 用户唯一标识符
- `email`: 邮箱地址（用于登录）
- `full_name`: 全名
- `avatar_url`: 头像 URL
- `created_at`: 创建时间
- `updated_at`: 更新时间

---

### 2. stocks - 股票表

```sql
CREATE TABLE stocks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  ticker TEXT UNIQUE NOT NULL,  -- 股票代码，如 AAPL, TSLA
  company_name TEXT NOT NULL,
  exchange TEXT NOT NULL,  -- 交易所，如 NASDAQ, NYSE
  sector TEXT,  -- 行业，如 Technology, Healthcare
  industry TEXT,  -- 细分行业
  market_cap NUMERIC,  -- 市值
  employees INTEGER,  -- 员工数量
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_stocks_ticker ON stocks(ticker);
CREATE INDEX idx_stocks_sector ON stocks(sector);
```

**字段说明**:
- `ticker`: 股票代码（唯一）
- `company_name`: 公司名称
- `exchange`: 交易所
- `sector`: 行业
- `industry`: 细分行业
- `market_cap`: 市值
- `employees`: 员工数量

---

### 3. earnings - 财报表

```sql
CREATE TABLE earnings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  stock_id UUID REFERENCES stocks(id) ON DELETE CASCADE,
  report_date DATE NOT NULL,  -- 报告日期
  fiscal_quarter INTEGER NOT NULL,  -- 财政季度（1, 2, 3, 4）
  fiscal_year INTEGER NOT NULL,  -- 财政年度
  revenue NUMERIC NOT NULL,  -- 营收
  eps NUMERIC,  -- 每股收益
  net_income NUMERIC,  -- 净利润
  gross_profit NUMERIC,  -- 毛利润
  operating_income NUMERIC,  -- 营业收入
  net_margin NUMERIC,  -- 净利润率
  gross_margin NUMERIC,  -- 毛利率
  operating_margin NUMERIC,  -- 营业利率
  yoy_growth NUMERIC,  -- 同比增长率
  qoq_growth NUMERIC,  -- 环比增长率
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_earnings_stock_id ON earnings(stock_id);
CREATE INDEX idx_earnings_report_date ON earnings(report_date);
CREATE INDEX idx_earnings_fiscal_year ON earnings(fiscal_year);
```

**字段说明**:
- `stock_id`: 关联股票 ID
- `report_date`: 报告日期
- `fiscal_quarter`: 财政季度
- `fiscal_year`: 财政年度
- `revenue`: 营收
- `eps`: 每股收益
- `net_income`: 净利润
- `gross_profit`: 毛利润
- `operating_income`: 营业收入
- `net_margin`: 净利润率
- `gross_margin`: 毛利率
- `operating_margin`: 营业利率
- `yoy_growth`: 同比增长率
- `qoq_growth`: 环比增长率

---

### 4. alerts - 预警表

```sql
CREATE TABLE alerts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  stock_id UUID REFERENCES stocks(id) ON DELETE CASCADE,
  alert_type TEXT NOT NULL,  -- 预警类型：revenue_growth, eps_beat, margin_improvement
  threshold NUMERIC NOT NULL,  -- 阈值
  condition TEXT NOT NULL,  -- 条件：greater_than, less_than, equal_to
  is_active BOOLEAN DEFAULT TRUE,  -- 是否激活
  notification_method TEXT[],  -- 通知方式：['push', 'email', 'telegram']
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_alerts_user_id ON alerts(user_id);
CREATE INDEX idx_alerts_stock_id ON alerts(stock_id);
CREATE INDEX idx_alerts_is_active ON alerts(is_active);
```

**字段说明**:
- `user_id`: 用户 ID
- `stock_id`: 股票 ID
- `alert_type`: 预警类型
- `threshold`: 阈值
- `condition`: 条件（greater_than, less_than, equal_to）
- `is_active`: 是否激活
- `notification_method`: 通知方式（数组）

---

### 5. watchlists - 关注列表表

```sql
CREATE TABLE watchlists (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  stock_id UUID REFERENCES stocks(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  UNIQUE(user_id, stock_id)
);

CREATE INDEX idx_watchlists_user_id ON watchlists(user_id);
CREATE INDEX idx_watchlists_stock_id ON watchlists(stock_id);
```

**字段说明**:
- `user_id`: 用户 ID
- `stock_id`: 股票 ID
- `created_at`: 创建时间
- 唯一约束：每个用户对每只股票只能关注一次

---

### 6. alert_history - 预警历史表

```sql
CREATE TABLE alert_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  alert_id UUID REFERENCES alerts(id) ON DELETE CASCADE,
  stock_id UUID REFERENCES stocks(id) ON DELETE CASCADE,
  triggered_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  metric_value NUMERIC NOT NULL,  -- 触发时的指标值
  message TEXT,  -- 预警消息
  is_sent BOOLEAN DEFAULT FALSE,  -- 是否已发送通知
  sent_at TIMESTAMP WITH TIME ZONE,  -- 发送时间
);

CREATE INDEX idx_alert_history_alert_id ON alert_history(alert_id);
CREATE INDEX idx_alert_history_stock_id ON alert_history(stock_id);
CREATE INDEX idx_alert_history_triggered_at ON alert_history(triggered_at);
```

**字段说明**:
- `alert_id`: 预警 ID
- `stock_id`: 股票 ID
- `triggered_at`: 触发时间
- `metric_value`: 触发时的指标值
- `message`: 预警消息
- `is_sent`: 是否已发送通知
- `sent_at`: 发送时间

---

## 🔄 触发器（自动更新时间戳）

```sql
-- 自动更新 updated_at 字段
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 为所有需要 updated_at 的表创建触发器
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_stocks_updated_at BEFORE UPDATE ON stocks
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_earnings_updated_at BEFORE UPDATE ON earnings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_alerts_updated_at BEFORE UPDATE ON alerts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

---

## 📊 关系图

```
users (1) ─────── (∞) alerts (1) ─────── (∞) stocks
  │                                            │
  │                                            │
  └──────── (∞) watchlists (∞) ──────────────────┘
                           │
                           │
                (∞) alert_history (∞)
```

---

## 🎯 下一步

1. ✅ 完成 Schema 设计
2. [ ] 在 Supabase 中创建表
3. [ ] 编写数据访问函数
4. [ ] 实现 API 路由

---

**文档创建时间**: 2026-03-11
**最后更新**: 2026-03-11 21:30
