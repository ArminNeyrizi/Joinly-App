import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(request: NextRequest) {
  // 1. ایجاد یک پاسخ پایه برای تغییر کوکی‌ها
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  // 2. راه‌اندازی کلاینت Supabase برای بررسی سشن
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
    }
  );

  // بررسی وضعیت احراز هویت کاربر
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  // 3. تعیین مسیرهای محافظت شده و احراز هویت
  const isProtectedRoute = pathname.startsWith("/dashboard") || pathname.startsWith("/enrollment");
  const isAuthRoute = pathname.startsWith("/auth/login") || pathname.startsWith("/auth/signup");

  // 4. منطق ریدایرکت
  if (isProtectedRoute && !user) {
    // اگر کاربر لاگین نیست و می‌خواهد به داشبورد یا انتخاب واحد برود
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (isAuthRoute && user) {
    // اگر کاربر لاگین است و می‌خواهد دوباره صفحه لاگین/ثبت‌نام را ببیند
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|static|.*\\..*).*)"],
};