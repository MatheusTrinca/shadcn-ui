import LightDarkToggle from '@/components/ui/light-dark-toggle';

interface Props {
  children: React.ReactNode;
}

export default function LoggedOutLayout({ children }: Props) {
  return (
    <>
      <div className="flex flex-col gap-4 min-h-screen items-center justify-center py-4">{children}</div>
      <LightDarkToggle className="fixed right-0 top-1/2" />
    </>
  );
}
