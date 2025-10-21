import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react"

interface KPICardProps {
  title: string
  value: string | number
  change?: number
  suffix?: string
  description?: string
}

export function KPICard({ title, value, change, suffix = "", description }: KPICardProps) {
  const isPositive = change && change > 0
  const isNegative = change && change < 0

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {value}
          {suffix}
        </div>
        {change !== undefined && (
          <div className="flex items-center gap-1 text-xs mt-1">
            {isPositive && (
              <>
                <ArrowUpIcon className="h-3 w-3 text-chart-4" />
                <span className="text-chart-4">+{change}%</span>
              </>
            )}
            {isNegative && (
              <>
                <ArrowDownIcon className="h-3 w-3 text-destructive" />
                <span className="text-destructive">{change}%</span>
              </>
            )}
            <span className="text-muted-foreground ml-1">vs last period</span>
          </div>
        )}
        {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
      </CardContent>
    </Card>
  )
}
