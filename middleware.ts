import { NextResponse, type NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { createServerClient } from "@supabase/ssr";

import { defaultLocale, locales } from "./src/i18n/config";

// Initialize next-intl middleware
const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always",
});

export default async function middleware(request: NextRequest) {
  // 1. Run next-intl middleware first to get the response (handles locale redirection)
  const response = intlMiddleware(request);

  // 2. Initialize Supabase SSR client to refresh session token
  // We pass request headers/cookies and write new cookies to the intl response
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value);
            response.cookies.set(name, value, options);
          });
        },
      },
    },
  );

  // This refreshes the session if expired
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  // Determine active locale from pathname or default
  const localeSegment = pathname.split("/")[1];
  const activeLocale = locales.includes(localeSegment as any)
    ? localeSegment
    : defaultLocale;

  // Check if target is a protected route
  // Protected routes require authentication
  const isProtectedRoute =
    pathname.endsWith("/dashboard") ||
    pathname.includes("/dashboard/") ||
    pathname.endsWith("/enrollment") ||
    pathname.includes("/enrollment/");

  // Check if target is an auth route (login/signup)
  // Auth routes should not be accessible to authenticated users
  const isAuthRoute =
    pathname.includes("/auth/login") || pathname.includes("/auth/signup");

  if (isProtectedRoute && !user) {
    // Redirect to login if accessing protected route without session
    const url = request.nextUrl.clone();
    url.pathname = `/${activeLocale}/auth/login`;
    return NextResponse.redirect(url);
  }

  if (isAuthRoute && user) {
    // Redirect to dashboard if logged-in user accesses login/signup
    const url = request.nextUrl.clone();
    url.pathname = `/${activeLocale}/dashboard`;
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|static|.*\\..*).*)"],
};