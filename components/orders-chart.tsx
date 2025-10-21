"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"
import { getTimeSeriesData } from "@/lib/mock-data"

export function OrdersChart() {
  const data = getTimeSeriesData()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Orders & Revenue Trend</CardTitle>
        <CardDescription>Daily orders and revenue over the last 30 days</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="date"
              className="text-xs"
              tickFormatter={(value) => new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
            />
            <YAxis className="text-xs" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
              labelFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
              }
            />
            <Line
              type="monotone"
              dataKey="orders"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
              name="Orders"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
              name="Revenue ($)"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
