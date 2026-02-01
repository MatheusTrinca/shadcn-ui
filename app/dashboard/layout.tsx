import MainMenu from '@/app/dashboard/components/menu/main-menu';
import MobileMenu from './components/menu/mobile-menu';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid md:grid-cols-[250px_1fr] h-screen">
      <MainMenu className="hidden md:flex" />
      <MobileMenu />

      <div className="overflow-auto p-4">
        <h1 className="pb-4">Welcome back, Tom!</h1>
        {children}
      </div>
    </div>
  );
}
