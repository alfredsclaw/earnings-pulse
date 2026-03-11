// 数据库类型定义

export interface User {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

export interface Stock {
  id: string
  ticker: string
  company_name: string
  exchange: string
  sector?: string
  industry?: string
  market_cap?: number
  employees?: number
  created_at: string
  updated_at: string
}

export interface Earnings {
  id: string
  stock_id: string
  report_date: string
  fiscal_quarter: number
  fiscal_year: number
  revenue: number
  eps?: number
  net_income?: number
  gross_profit?: number
  operating_income?: number
  net_margin?: number
  gross_margin?: number
  operating_margin?: number
  yoy_growth?: number
  qoq_growth?: number
  created_at: string
  updated_at: string
}

export interface Alert {
  id: string
  user_id: string
  stock_id: string
  alert_type: 'revenue_growth' | 'eps_beat' | 'margin_improvement' | 'guidance_upgrade'
  threshold: number
  condition: 'greater_than' | 'less_than' | 'equal_to'
  is_active: boolean
  notification_method: string[]
  created_at: string
  updated_at: string
}

export interface Watchlist {
  id: string
  user_id: string
  stock_id: string
  created_at: string
}

export interface AlertHistory {
  id: string
  alert_id: string
  stock_id: string
  triggered_at: string
  metric_value: number
  message?: string
  is_sent: boolean
  sent_at?: string
}

// API 响应类型

export interface ApiResponse<T> {
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  count: number
  page: number
  page_size: number
}
