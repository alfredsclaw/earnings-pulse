import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            EarningsPulse
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            实时监控财报数据，智能预警业绩亮点
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <FeatureCard
            title="实时数据采集"
            description="从 SEC EDGAR、Yahoo Finance 等多个数据源获取财报"
            icon="📊"
          />
          <FeatureCard
            title="智能分析"
            description="自动检测超预期业绩、增长趋势和市场反应"
            icon="🧠"
          />
          <FeatureCard
            title="自定义预警"
            description="设置营收增长率、EPS 超预期等自定义阈值"
            icon="🔔"
          />
          <FeatureCard
            title="数据可视化"
            description="交互式图表展示业绩趋势和同业对比"
            icon="📈"
          />
          <FeatureCard
            title="多平台支持"
            description="Web、iOS、Android 全平台覆盖"
            icon="📱"
          />
          <FeatureCard
            title="即时通知"
            description="APP 推送、Telegram Bot、邮件多种提醒方式"
            icon="⚡"
          />
        </div>

        {/* API Endpoints */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            API 端点
          </h2>
          <div className="space-y-3">
            <ApiEndpoint
              method="GET"
              path="/api/stocks"
              description="获取股票信息"
              params="?ticker=AAPL"
            />
            <ApiEndpoint
              method="GET"
              path="/api/earnings"
              description="获取财报数据"
              params="?stockId=xxx&fiscalYear=2024"
            />
            <ApiEndpoint
              method="GET"
              path="/api/alerts"
              description="获取预警列表"
              params="?userId=xxx"
            />
            <ApiEndpoint
              method="POST"
              path="/api/alerts"
              description="创建预警"
              body='{"alert_type": "revenue_growth", "threshold": 50}'
            />
            <ApiEndpoint
              method="DELETE"
              path="/api/alerts"
              description="删除预警"
              params="?alertId=xxx"
            />
          </div>
        </div>

        {/* Development Status */}
        <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-4">
            开发状态
          </h2>
          <div className="space-y-2 text-amber-800 dark:text-amber-200">
            <StatusItem
              status="✅"
              text="GitHub 仓库已创建"
            />
            <StatusItem
              status="✅"
              text="项目文档已完成"
            />
            <StatusItem
              status="✅"
              text="数据库 Schema 已设计"
            />
            <StatusItem
              status="✅"
              text="API 路由已实现（模拟数据）"
            />
            <StatusItem
              status="⏳"
              text="等待 API 密钥注册"
            />
            <StatusItem
              status="⏳"
              text="等待 Supabase 项目创建"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            当前使用模拟数据，请在创建 Supabase 项目后配置实际数据源
          </p>
          <Link
            href="https://github.com/alfredsclaw/earnings-pulse"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            查看 GitHub 仓库
          </Link>
        </div>
      </div>
    </main>
  )
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </div>
  )
}

function ApiEndpoint({ method, path, description, params, body }: { method: string; path: string; description: string; params?: string; body?: string }) {
  const methodColors: Record<string, string> = {
    GET: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
    POST: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
    DELETE: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100',
  }

  return (
    <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
      <span className={`px-3 py-1 rounded font-mono text-sm font-bold ${methodColors[method]} ${methodColors[method]}`}>
        {method}
      </span>
      <div className="flex-1">
        <div className="font-mono text-slate-700 dark:text-slate-300 mb-1">
          {path}
        </div>
        <div className="text-sm text-slate-600 dark:text-slate-400">
          {description}
        </div>
        {params && (
          <div className="text-xs text-slate-500 dark:text-slate-500 font-mono">
            Params: {params}
          </div>
        )}
        {body && (
          <div className="text-xs text-slate-500 dark:text-slate-500 font-mono">
            Body: {body}
          </div>
        )}
      </div>
    </div>
  )
}

function StatusItem({ status, text }: { status: string; text: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg">{status}</span>
      <span>{text}</span>
    </div>
  )
}
