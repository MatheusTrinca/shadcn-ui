'use client';

import { PieChart, Pie, Cell } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const data = [
  {
    name: 'delta',
    value: 55,
  },
  {
    name: 'alpha',
    value: 34,
  },
  {
    name: 'canary',
    value: 11,
  },
];

const chartConfig = {
  value: {
    label: 'Members',
  },
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

export default function TeamDistributionChart() {
  return (
    <ChartContainer config={chartConfig} className="mx-auto aspect-square h-[200px]">
      <PieChart>
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel nameKey="name" />} />
        <Pie data={data} dataKey="value" nameKey="name" stroke="#ffffff" strokeWidth={1}>
          {data.map((entry) => (
            <Cell key={entry.name} fill={`var(--color-${entry.name})`} />
          ))}
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}
