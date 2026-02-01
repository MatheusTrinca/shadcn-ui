'use client';

import { useState } from 'react';
import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle } from '@/components/ui/drawer';
import MenuTitle from './menu-title';
import { MenuIcon } from 'lucide-react';
import MainMenu from './main-menu';
import { useIsMobile } from '@/hooks/use-mobile';

export default function MobileMenu() {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  if (!isMobile) {
    return null;
  }

  return (
    <div className="flex justify-between items-center md:hidden sticky top-0 left-0 bg-background p-4 border-b border-border">
      <MenuTitle />
      <Drawer direction="right" open={open} onOpenChange={setOpen}>
        <DrawerTitle />
        <DrawerTrigger>
          <MenuIcon />
        </DrawerTrigger>
        <DrawerContent>
          <MainMenu className="h-full" onItemClick={() => setOpen(false)} />
        </DrawerContent>
      </Drawer>
    </div>
  );
}
