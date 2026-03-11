// 财报 API 路由
// TODO: 等待 Supabase 项目创建后，实现实际的数据访问逻辑

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const stockId = searchParams.get('stockId')
  const fiscalYear = searchParams.get('fiscalYear')

  // TODO: 实现实际的数据查询
  // const { data, error } = await supabase
  //   .from('earnings')
  //   .select('*')
  //   .eq('stock_id', stockId)
  //   .order('report_date', { ascending: false })
  //   .limit(20)

  // 模拟数据
  const mockEarnings = [
    {
      id: 'mock-earnings-1',
      stock_id: stockId || 'mock-stock-id',
      report_date: '2024-01-27',
      fiscal_quarter: 1,
      fiscal_year: 2024,
      revenue: 119575000000,
      eps: 2.18,
      net_income: 33916000000,
      gross_profit: 57464000000,
      operating_income: 40274000000,
      net_margin: 28.36,
      gross_margin: 48.04,
      operating_margin: 33.69,
      yoy_growth: 2.1,
      qoq_growth: 0.5,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 'mock-earnings-2',
      stock_id: stockId || 'mock-stock-id',
      report_date: '2023-10-27',
      fiscal_quarter: 4,
      fiscal_year: 2023,
      revenue: 89500000000,
      eps: 1.46,
      net_income: 22956000000,
      gross_profit: 42525000000,
      operating_income: 30142000000,
      net_margin: 25.64,
      gross_margin: 47.52,
      operating_margin: 33.67,
      yoy_growth: -8.4,
      qoq_growth: 15.2,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ]

  return NextResponse.json({
    data: mockEarnings,
    message: '注意：当前使用模拟数据，请在 Supabase 中配置实际数据。',
  })
}
