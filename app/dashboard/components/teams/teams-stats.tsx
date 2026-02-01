import Link from 'next/link';
import { ListChecksIcon, StarIcon, UserIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import cm from '@/public/images/cm.jpg';
import tf from '@/public/images/tf.jpg';
import rl from '@/public/images/rl.jpg';

const teamLeaders = [
  {
    firstName: 'Colin',
    lastName: 'Murray',
    avatar: cm,
  },
  {
    firstName: 'Tom',
    lastName: 'Phillips',
  },
  {
    firstName: 'Liam',
    lastName: 'Fuentes',
  },
  {
    firstName: 'Tina',
    lastName: 'Fey',
    avatar: tf,
  },
  {
    firstName: 'Katie',
    lastName: 'Johnson',
  },
  {
    firstName: 'Tina',
    lastName: 'Jones',
  },
  {
    firstName: 'Amy',
    lastName: 'Adams',
  },
  {
    firstName: 'Ryan',
    lastName: 'Lopez',
    avatar: rl,
  },
  {
    firstName: 'Jenny',
    lastName: 'Jones',
  },
];

export default function TeamStats() {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Total Teams</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between">
            <div className="flex gap-2">
              <UserIcon />
              <div className="font-bold text-5xl">8</div>
            </div>
            <Button size="xs" asChild>
              <Link href="/dashboard/employees">View All</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center justify-between">
              <span>Team Leaders</span>
              <StarIcon className="text-yellow-500" />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2 lg:max-w-[300px]">
            {teamLeaders.map(({ firstName, lastName, avatar }) => (
              <Tooltip key={`${firstName}-${lastName}-tooltip`}>
                <TooltipTrigger asChild>
                  <Avatar>
                    <AvatarImage src={avatar?.src} alt={`${firstName} ${lastName}`} />
                    <AvatarFallback className="bg-primary text-white">
                      {firstName.charAt(0)}
                      {lastName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>
                  {firstName} {lastName}
                </TooltipContent>
              </Tooltip>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Team distribution</CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </div>
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <ListChecksIcon />
            <span>Support tickets resolved</span>
          </CardTitle>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </>
  );
}
