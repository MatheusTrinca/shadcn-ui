'use client';

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

const chartData = [
  {
    name: 'Jan',
    office: 82,
    wfh: 44,
  },
  {
    name: 'Feb',
    office: 80,
    wfh: 40,
  },
  {
    name: 'Mar',
    office: 83,
    wfh: 42,
  },
  {
    name: 'Apr',
    office: 50,
    wfh: 50,
  },
  {
    name: 'May',
    office: 40,
    wfh: 60,
  },
  {
    name: 'Jun',
    office: 60,
    wfh: 40,
  },
  {
    name: 'Jul',
    office: 55,
    wfh: 55,
  },
  {
    name: 'Aug',
    office: 49,
    wfh: 61,
  },
  {
    name: 'Sep',
    office: 44,
    wfh: 70,
  },
  {
    name: 'Oct',
    office: 40,
    wfh: 40,
  },
  {
    name: 'Nov',
    office: 50,
    wfh: 50,
  },
  {
    name: 'Dec',
    office: 50,
    wfh: 50,
  },
];

const chartConfig = {
  office: {
    label: 'Office',
    color: '#ec4899',
  },
  wfh: {
    label: 'Work from Home',
    color: '#6b7280',
  },
} satisfies ChartConfig;

export default function WorkLocationTrend() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="name"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={value => value.slice(0, 3)}
          stroke="#88888"
        />
        <YAxis stroke="#88888" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="office" fill="var(--color-office)" stackId={1} />
        <Bar dataKey="wfh" fill="var(--color-wfh)" stackId={1} radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  );
}
