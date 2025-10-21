// Mock data generator for analytics dashboard
export interface KPIData {
  conversionRate: number
  churnRate: number
  npsScore: number
  activeUsers: number
  totalOrders: number
  avgOrderValue: number
  engagementRate: number
}

export interface TimeSeriesData {
  date: string
  orders: number
  revenue: number
  users: number
}

export interface ChurnData {
  month: string
  churned: number
  retained: number
  churnRate: number
}

export interface NPSDistribution {
  category: string
  count: number
  percentage: number
}

export function getKPIData(): KPIData {
  return {
    conversionRate: 24.5,
    churnRate: 12.3,
    npsScore: 42,
    activeUsers: 1247,
    totalOrders: 3892,
    avgOrderValue: 45.67,
    engagementRate: 68.4,
  }
}

export function getTimeSeriesData(): TimeSeriesData[] {
  const data: TimeSeriesData[] = []
  const startDate = new Date()
  startDate.setDate(startDate.getDate() - 30)

  for (let i = 0; i < 30; i++) {
    const date = new Date(startDate)
    date.setDate(date.getDate() + i)

    data.push({
      date: date.toISOString().split("T")[0],
      orders: Math.floor(Math.random() * 50 + 100),
      revenue: Math.floor(Math.random() * 3000 + 4000),
      users: Math.floor(Math.random() * 80 + 150),
    })
  }

  return data
}

export function getChurnData(): ChurnData[] {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]

  return months.map((month) => {
    const churned = Math.floor(Math.random() * 30 + 10)
    const retained = Math.floor(Math.random() * 150 + 200)
    const total = churned + retained

    return {
      month,
      churned,
      retained,
      churnRate: Number(((churned / total) * 100).toFixed(1)),
    }
  })
}

export function getNPSDistribution(): NPSDistribution[] {
  const promoters = 45
  const passives = 32
  const detractors = 23
  const total = promoters + passives + detractors

  return [
    {
      category: "Promoters (9-10)",
      count: promoters,
      percentage: Number(((promoters / total) * 100).toFixed(1)),
    },
    {
      category: "Passives (7-8)",
      count: passives,
      percentage: Number(((passives / total) * 100).toFixed(1)),
    },
    {
      category: "Detractors (0-6)",
      count: detractors,
      percentage: Number(((detractors / total) * 100).toFixed(1)),
    },
  ]
}

export function getConversionFunnelData() {
  return [
    { stage: "Visits", count: 5000, percentage: 100 },
    { stage: "Sign Ups", count: 2500, percentage: 50 },
    { stage: "First Order", count: 1250, percentage: 25 },
    { stage: "Repeat Order", count: 625, percentage: 12.5 },
  ]
}
