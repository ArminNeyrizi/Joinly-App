"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { signUpAction } from "../actions/auth.actions";

export function SignupForm() {
  const router = useRouter();
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await signUpAction(formData);

      if (!response.success) {
        if (response.error === "INVALID_INPUT") {
          setError("اطلاعات وارد شده نامعتبر است (رمز عبور باید حداقل ۸ کاراکتر باشد)");
        } else if (response.error === "EMAIL_ALREADY_IN_USE") {
          setError("این ایمیل قبلاً ثبت شده است");
        } else {
          setError("خطایی رخ داد. دوباره تلاش کنید");
        }
        setLoading(false);
        return;
      }

      // هدایت به صفحه لاگین
      router.push("/auth/login");
      router.refresh();
    } catch (err) {
      setError("خطایی رخ داد. دوباره تلاش کنید");
      setLoading(false);
    }
  }

  return (
    <Card className="border-border/40 bg-card/60 backdrop-blur-md shadow-2xl">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold tracking-tight text-center">ایجاد حساب کاربری</CardTitle>
        <CardDescription className="text-center text-muted-foreground">
          مشخصات خود را برای ثبت‌نام وارد کنید
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="rounded-lg bg-destructive/15 p-3 text-sm text-destructive text-center border border-destructive/20 font-medium">
              {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                نام
              </label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="آرمین"
                required
                disabled={loading}
                className="bg-background/40"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                نام خانوادگی
              </label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="محمدی"
                required
                disabled={loading}
                className="bg-background/40"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              ایمیل
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              required
              autoComplete="email"
              disabled={loading}
              className="bg-background/40"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              رمز عبور
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              autoComplete="new-password"
              disabled={loading}
              className="bg-background/40"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-gradient-to-l from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 font-bold"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                در حال ثبت‌نام...
              </>
            ) : (
              "ثبت‌نام"
            )}
          </Button>

          <div className="text-center text-sm text-muted-foreground mt-4">
            قبلاً ثبت‌نام کرده‌اید؟{" "}
            <Link 
              href="/auth/login" 
              className="text-purple-400 hover:text-purple-300 font-semibold underline decoration-2 underline-offset-4"
            >
              وارد شوید
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}