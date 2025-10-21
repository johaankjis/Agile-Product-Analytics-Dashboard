"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getConversionFunnelData } from "@/lib/mock-data"

export function ConversionFunnel() {
  const data = getConversionFunnelData()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Conversion Funnel</CardTitle>
        <CardDescription>User journey from visit to repeat purchase</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((stage, index) => (
            <div key={stage.stage} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{stage.stage}</span>
                <span className="text-muted-foreground">
                  {stage.count.toLocaleString()} ({stage.percentage}%)
                </span>
              </div>
              <div className="h-8 bg-secondary rounded-lg overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-chart-1 to-chart-2 transition-all duration-500"
                  style={{ width: `${stage.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
