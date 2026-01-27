import MenuTitle from './menu-title';
import { MENU_LINKS } from './constants';
import MenuItem from './menu-item';

function MainMenu() {
  return (
    <aside className="bg-muted p-4 overflow-auto">
      <div className="border-b dark:border-b-black border-b-zinc-300 pb-4">
        <MenuTitle />
      </div>
      <ul className="py-4">
        {MENU_LINKS.map(({ label, href }) => (
          <li key={href}>
            <MenuItem href={href}>{label}</MenuItem>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default MainMenu;
