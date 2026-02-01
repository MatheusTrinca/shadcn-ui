'use client';

import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function LightDarkToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Tooltip>
      <TooltipTrigger asChild className={className}>
        <Button variant="link" onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
          <MoonIcon className="hidden dark:block" />
          <SunIcon className="block dark:hidden" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <span className="hidden dark:block">Enable light mode</span>
        <span className="block dark:hidden">Enable dark mode</span>
      </TooltipContent>
    </Tooltip>
  );
}
