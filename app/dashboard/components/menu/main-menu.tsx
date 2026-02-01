import MenuTitle from './menu-title';
import { MENU_LINKS } from './constants';
import MenuItem from './menu-item';
import { Avatar, AvatarFallback } from '../../../../components/ui/avatar';
import LightDarkToggle from '../../../../components/ui/light-dark-toggle';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type Props = {
  className?: string;
  onItemClick?: () => void;
};

function MainMenu({ className, onItemClick }: Props) {
  return (
    <nav className={cn('md:bg-muted p-4 overflow-auto flex flex-col', className)}>
      <header className="hidden md:block border-b dark:border-b-black border-b-zinc-300 pb-4">
        <MenuTitle />
      </header>
      <ul className="py-4 grow">
        {MENU_LINKS.map(({ label, href }) => (
          <li key={href} onClick={onItemClick}>
            <MenuItem href={href}>{label}</MenuItem>
          </li>
        ))}
      </ul>
      <footer className="flex gap-2 items-center">
        <Avatar>
          <AvatarFallback className="bg-primary text-white">MT</AvatarFallback>
        </Avatar>
        <Link className="hover:underline" href="/sign-out">
          Log Out
        </Link>
        <LightDarkToggle className="ml-auto" />
      </footer>
    </nav>
  );
}

export default MainMenu;
