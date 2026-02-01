import { AlertTriangleIcon, BadgeCheckIcon, LaptopIcon, PartyPopperIcon, UserCheck2Icon, UserIcon } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../../../components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Image from 'next/image';
import cm from '@/public/images/cm.jpg';
import WorkLocationTrend from './work-location-trend';

export default function EmployeesStats() {
  const employeesPresent = 80;
  const totalEmployees = 100;
  const percentage = Math.floor((employeesPresent / totalEmployees) * 100);

  return (
    <>
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
            <Button size="xs" asChild>
              <Link href="/dashboard/employees">View All</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Employees Present</CardTitle>
          </CardHeader>
          {percentage > 75 ? (
            <>
              <CardContent>
                <div className="flex gap-2">
                  <UserCheck2Icon />
                  <div className="font-bold text-5xl">{employeesPresent}</div>
                </div>
              </CardContent>
              <CardFooter>
                <span className="flex gap-1 text-xs items-center text-green-500">
                  <BadgeCheckIcon />
                  {percentage}% of employees are present
                </span>
              </CardFooter>
            </>
          ) : (
            <>
              <CardContent>
                <div className="flex gap-2">
                  <UserCheck2Icon />
                  <div className="font-bold text-5xl">{employeesPresent}</div>
                </div>
              </CardContent>
              <CardFooter>
                <span className="flex gap-1 text-xs items-center text-red-500">
                  <AlertTriangleIcon />
                  Only {percentage}% of employees are present
                </span>
              </CardFooter>
            </>
          )}
        </Card>
        <Card className="border-pink-500">
          <CardHeader>
            <CardTitle className="text-base">Employee of the Month</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 items-center">
            <Avatar>
              <Image src={cm} alt="Employee of the month" width={50} height={50} />
              <AvatarFallback>CM</AvatarFallback>
            </Avatar>
            <span className="text-2xl">Collin Murray!</span>
          </CardContent>
          <CardFooter className="flex gap-2 items-center text-xs text-muted-foreground mt-auto">
            <PartyPopperIcon className="text-pink-500" />
            <span>Congratulations Collin!</span>
          </CardFooter>
        </Card>
      </div>
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <LaptopIcon />
            <span>Employee work location trends</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <WorkLocationTrend />
        </CardContent>
      </Card>
    </>
  );
}
