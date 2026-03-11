// 股票 API 路由
// TODO: 等待 Supabase 项目创建后，实现实际的数据访问逻辑

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const ticker = searchParams.get('ticker')

  // TODO: 实现实际的数据查询
  // const { data, error } = await supabase
  //   .from('stocks')
  //   .select('*')
  //   .eq('ticker', ticker?.toUpperCase())
  //   .single()

  // 模拟数据
  const mockStock = {
    id: 'mock-id-1',
    ticker: ticker?.toUpperCase() || 'AAPL',
    company_name: ticker?.toUpperCase() === 'AAPL' ? 'Apple Inc.' : '示例公司',
    exchange: 'NASDAQ',
    sector: 'Technology',
    industry: 'Consumer Electronics',
    market_cap: 2500000000000,
    employees: 164000,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }

  return NextResponse.json({
    data: mockStock,
    message: '注意：当前使用模拟数据，请在 Supabase 中配置实际数据。',
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // TODO: 实现实际的股票添加逻辑
    // const { data, error } = await supabase
    //   .from('stocks')
    //   .insert([body])
    //   .select()
    //   .single()

    return NextResponse.json(
      {
        message: '股票添加成功',
        data: body,
      },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        error: '添加股票失败',
        message: error instanceof Error ? error.message : '未知错误',
      },
      { status: 500 }
    )
  }
}
