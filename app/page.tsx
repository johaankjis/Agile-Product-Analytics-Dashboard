import { KPICard } from "@/components/kpi-card"
import { OrdersChart } from "@/components/orders-chart"
import { ChurnChart } from "@/components/churn-chart"
import { NPSChart } from "@/components/nps-chart"
import { ConversionFunnel } from "@/components/conversion-funnel"
import { getKPIData } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { BarChart3Icon, RefreshCwIcon, DownloadIcon } from "lucide-react"

export default function DashboardPage() {
  const kpiData = getKPIData()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <BarChart3Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Agile Analytics Dashboard</h1>
                <p className="text-sm text-muted-foreground">Food Delivery Product Metrics</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <RefreshCwIcon className="h-4 w-4 mr-2" />
                Refresh
              </Button>
              <Button variant="outline" size="sm">
                <DownloadIcon className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <KPICard
            title="Conversion Rate"
            value={kpiData.conversionRate}
            suffix="%"
            change={3.2}
            description="Signup to first order"
          />
          <KPICard
            title="Churn Rate"
            value={kpiData.churnRate}
            suffix="%"
            change={-1.5}
            description="30-day inactive users"
          />
          <KPICard
            title="Net Promoter Score"
            value={kpiData.npsScore}
            change={5.8}
            description="Customer satisfaction"
          />
          <KPICard
            title="Active Users"
            value={kpiData.activeUsers.toLocaleString()}
            change={12.4}
            description="Last 7 days"
          />
        </div>

        {/* Secondary KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <KPICard title="Total Orders" value={kpiData.totalOrders.toLocaleString()} change={8.3} />
          <KPICard title="Avg Order Value" value={`$${kpiData.avgOrderValue}`} change={2.1} />
          <KPICard title="Engagement Rate" value={kpiData.engagementRate} suffix="%" change={4.7} />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <OrdersChart />
          <ChurnChart />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <NPSChart />
          <ConversionFunnel />
        </div>

        {/* Insights Section */}
        <div className="mt-8 p-6 bg-card border border-border rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Sprint Planning Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-secondary/50 rounded-lg">
              <h3 className="font-medium text-sm mb-2 text-chart-4">Positive Trends</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Conversion rate up 3.2% - onboarding improvements working</li>
                <li>• NPS score increased by 5.8 points - customer satisfaction rising</li>
                <li>• Active users grew 12.4% - marketing campaigns effective</li>
              </ul>
            </div>
            <div className="p-4 bg-secondary/50 rounded-lg">
              <h3 className="font-medium text-sm mb-2 text-destructive">Areas for Focus</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Churn rate still at 12.3% - prioritize retention features</li>
                <li>• Conversion funnel drops 50% at signup - simplify registration</li>
                <li>• Only 12.5% reach repeat orders - improve loyalty program</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
