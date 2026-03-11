// Supabase 客户端配置
// TODO: 创建 Supabase 项目后，填入实际的 URL 和 Key

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL or Anon Key not found. Using mock data.')
}

import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 数据库表名称常量
export const TABLES = {
  USERS: 'users',
  STOCKS: 'stocks',
  EARNINGS: 'earnings',
  ALERTS: 'alerts',
  WATCHLISTS: 'watchlists',
  ALERT_HISTORY: 'alert_history',
} as const
