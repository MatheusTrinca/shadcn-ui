import { UserIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../../components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function EmployeesStats() {
  return (
    <div className="grid lg:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Total Employees</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between">
          <div className="flex gap-2">
            <UserIcon />
            <div className="font-bold text-5xl">100</div>
          </div>
          <Button size="sm" asChild>
            <Link href="/dashboard/employees">View All</Link>
          </Button>
        </CardContent>
      </Card>
      <Card>Card 2</Card>
      <Card className="border-pink-500">Card 3</Card>
    </div>
  );
}
