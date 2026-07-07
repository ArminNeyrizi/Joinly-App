"use client";

import Link from "next/link";
import * as React from "react";
import { LogOut } from "lucide-react";

import { cn } from "@/lib/utils";
import { getCurrentUserAction, signOutAction } from "@/modules/auth/actions/auth.actions";

type Props = {
  currentPath?: string;
};

export function AppHeader({ currentPath }: Props) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    getCurrentUserAction().then((res) => {
      if (res.success && res.data) {
        setIsAuthenticated(true);
      }
    });
  }, []);

  const links = [
    { href: "/", label: "خانه", key: "home" },
    { href: "/dashboard", label: "داشبورد", key: "dashboard" },
    { href: "/enrollment", label: "انتخاب واحد", key: "enrollment" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          <span className="bg-gradient-to-l from-purple-400 to-indigo-400 bg-clip-text text-transparent font-black">
            Joinly
          </span>
        </Link>

        <nav className="flex items-center gap-2">
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-1.5 text-sm transition-colors",
                currentPath === link.key
                  ? "bg-purple-500/10 text-purple-300"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}

          {isAuthenticated && (
            <button
              onClick={() => signOutAction()}
              className="rounded-lg p-2 text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors text-sm flex items-center gap-1.5 cursor-pointer"
              title="خروج"
            >
              <LogOut className="size-4" />
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}