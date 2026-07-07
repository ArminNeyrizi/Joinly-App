import { AppHeader } from "./app-header";

type Props = {
  children: React.ReactNode;
  locale: string;
  currentPath?: string;
};

export function AppShell({ children, locale, currentPath }: Props) {
  return (
    <div className="relative min-h-screen">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-40 start-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute top-1/3 end-1/4 h-80 w-80 rounded-full bg-indigo-600/8 blur-3xl" />
      </div>

      <AppHeader locale={locale} currentPath={currentPath} />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">{children}</main>
    </div>
  );
}
