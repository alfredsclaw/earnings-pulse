// 工具函数

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * 合并 Tailwind CSS 类名
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 格式化货币
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency: 'CNY',
  }).format(amount)
}

/**
 * 格式化百分比
 */
export function formatPercentage(value: number): string {
  return new Intl.NumberFormat('zh-CN', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value / 100)
}

/**
 * 格式化日期
 */
export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

/**
 * 格式化相对时间
 */
export function formatRelativeTime(date: string | Date): string {
  const now = new Date()
  const then = new Date(date)
  const diffInSeconds = Math.floor((now.getTime() - then.getTime()) / 1000)

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  }

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const interval = Math.floor(diffInSeconds / Number(secondsInUnit))
    if (interval >= 1) {
      const unitNames: Record<string, string> = {
        year: '年',
        month: '月',
        week: '周',
        day: '天',
        hour: '小时',
        minute: '分钟',
        second: '秒',
      }
      return `${interval} ${unitNames[unit]}前`
    }
  }

  return '刚刚'
}

/**
 * 格式化股票代码
 */
export function formatTicker(ticker: string): string {
  return ticker.toUpperCase()
}

/**
 * 验证股票代码
 */
export function isValidTicker(ticker: string): boolean {
  return /^[A-Z]{1,5}$/.test(ticker.toUpperCase())
}

/**
 * 计算增长率
 */
export function calculateGrowthRate(
  oldValue: number,
  newValue: number
): number | null {
  if (oldValue === 0) return null
  return ((newValue - oldValue) / Math.abs(oldValue)) * 100
}

/**
 * 格式化数字
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('zh-CN').format(num)
}
