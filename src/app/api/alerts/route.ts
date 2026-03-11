// 预警 API 路由
// TODO: 等待 Supabase 项目创建后，实现实际的数据访问逻辑

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const userId = searchParams.get('userId')

  // TODO: 实现实际的数据查询
  // const { data, error } = await supabase
  //   .from('alerts')
  //   .select('*')
  //   .eq('user_id', userId)
  //   .eq('is_active', true)

  // 模拟数据
  const mockAlerts = [
    {
      id: 'mock-alert-1',
      user_id: userId || 'mock-user-id',
      stock_id: 'mock-stock-1',
      alert_type: 'revenue_growth',
      threshold: 50,
      condition: 'greater_than',
      is_active: true,
      notification_method: ['push', 'email'],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ]

  return NextResponse.json({
    data: mockAlerts,
    message: '注意：当前使用模拟数据，请在 Supabase 中配置实际数据。',
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { user_id, stock_id, alert_type, threshold, condition } = body

    // TODO: 实现实际的预警创建逻辑
    // const { data, error } = await supabase
    //   .from('alerts')
    //   .insert([{
    //     user_id,
    //     stock_id,
    //     alert_type,
    //     threshold,
    //     condition,
    //     is_active: true,
    //     notification_method: ['push'],
    //   }])
    //   .select()
    //   .single()

    const newAlert = {
      id: 'new-alert-id',
      ...body,
      is_active: true,
      notification_method: ['push'],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    return NextResponse.json(
      {
        message: '预警创建成功',
        data: newAlert,
      },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        error: '创建预警失败',
        message: error instanceof Error ? error.message : '未知错误',
      },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const alertId = searchParams.get('alertId')

  try {
    // TODO: 实现实际的预警删除逻辑
    // const { error } = await supabase
    //   .from('alerts')
    //   .delete()
    //   .eq('id', alertId)

    return NextResponse.json({
      message: '预警删除成功',
      alertId,
    })
  } catch (error) {
    return NextResponse.json(
      {
        error: '删除预警失败',
        message: error instanceof Error ? error.message : '未知错误',
      },
      { status: 500 }
    )
  }
}
