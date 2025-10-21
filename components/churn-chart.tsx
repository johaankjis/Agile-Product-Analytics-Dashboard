"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
import { getChurnData } from "@/lib/mock-data"

export function ChurnChart() {
  const data = getChurnData()

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Retention & Churn</CardTitle>
        <CardDescription>Monthly user retention vs churn analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="month" className="text-xs" />
            <YAxis className="text-xs" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Bar dataKey="retained" fill="hsl(var(--chart-4))" name="Retained Users" radius={[4, 4, 0, 0]} />
            <Bar dataKey="churned" fill="hsl(var(--destructive))" name="Churned Users" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
