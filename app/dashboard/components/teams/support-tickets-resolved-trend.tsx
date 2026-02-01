'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const data = [
  { name: 'Jan', delta: 40, alpha: 24, canary: 24 },
  { name: 'Feb', delta: 30, alpha: 13, canary: 22 },
  { name: 'Mar', delta: 20, alpha: 58, canary: 29 },
  { name: 'Apr', delta: 14, alpha: 30, canary: 15 },
  { name: 'May', delta: 29, alpha: 28, canary: 18 },
  { name: 'Jun', delta: 19, alpha: 19, canary: 10 },
  { name: 'Jul', delta: 34, alpha: 24, canary: 14 },
  { name: 'Aug', delta: 21, alpha: 20, canary: 19 },
  { name: 'Sep', delta: 49, alpha: 43, canary: 20 },
  { name: 'Oct', delta: 43, alpha: 55, canary: 4 },
  { name: 'Nov', delta: 39, alpha: 40, canary: 25 },
  { name: 'Dec', delta: 34, alpha: 43, canary: 11 },
];

const chartConfig = {
  delta: {
    label: 'Delta',
    color: '#84cc16',
  },
  alpha: {
    label: 'Alpha',
    color: '#3b82f6',
  },
  canary: {
    label: 'Canary',
    color: '#f97316',
  },
} satisfies ChartConfig;

export default function SupportTicketsResolvedTrend() {
  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      <LineChart accessibilityLayer data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={8} />
        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Line type="monotone" dataKey="delta" stroke="var(--color-delta)" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="alpha" stroke="var(--color-alpha)" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="canary" stroke="var(--color-canary)" strokeWidth={2} dot={false} />
      </LineChart>
    </ChartContainer>
  );
}
