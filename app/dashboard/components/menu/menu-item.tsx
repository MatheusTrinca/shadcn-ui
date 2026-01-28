'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  children: React.ReactNode;
  href: string;
};

export default function MenuItem({ children, href }: Props) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'flex flex-col p-2 rounded-md text-muted-foreground dark:hover:text-foreground hover:text-zinc-900 dark:hover:bg-zinc-700 hover:bg-white',
        isActive &&
          'bg-primary hover:bg-primary dark:hover:bg-primary dark:hover:text-foreground hover:text-white text-zinc-100'
      )}
    >
      {children}
    </Link>
  );
}
