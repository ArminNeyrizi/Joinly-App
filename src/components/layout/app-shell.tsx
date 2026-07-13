import { AppHeader } from "./app-header";

type Props = {
  children: React.ReactNode;
  currentPath?: string;
};

export function AppShell({ children, currentPath }: Props) {
  return (
    <div className="relative min-h-screen">
      <div aria-hidden className="pointer-events-none fixed inset-x-0 top-14 -z-10 h-px bg-border" />

      <AppHeader currentPath={currentPath} />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">{children}</main>
    </div>
  );
}
