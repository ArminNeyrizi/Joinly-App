"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { signUpAction } from "../actions/auth.actions";

interface SignupFormProps {
  locale: string;
}

export function SignupForm({ locale }: SignupFormProps) {
  const router = useRouter();
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const isFa = locale === "fa";

  const labels = {
    title: isFa ? "ایجاد حساب کاربری" : "Create Account",
    description: isFa
      ? "مشخصات خود را برای ثبت‌نام وارد کنید"
      : "Enter your details to create a new account",
    firstName: isFa ? "نام" : "First Name",
    lastName: isFa ? "نام خانوادگی" : "Last Name",
    email: isFa ? "ایمیل" : "Email",
    password: isFa ? "رمز عبور" : "Password",
    submit: isFa ? "ثبت‌نام" : "Sign Up",
    hasAccount: isFa ? "قبلاً ثبت‌نام کرده‌اید؟" : "Already have an account?",
    loginLink: isFa ? "وارد شوید" : "Sign in",
    invalidInput: isFa ? "اطلاعات وارد شده نامعتبر است" : "Invalid fields, check password length (min 8)",
    emailInUse: isFa ? "این ایمیل قبلاً ثبت شده است" : "Email is already registered",
    genericError: isFa ? "خطایی رخ داد. دوباره تلاش کنید" : "Something went wrong. Please try again",
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await signUpAction(formData);

      if (!response.success) {
        if (response.error === "INVALID_INPUT") {
          setError(labels.invalidInput);
        } else if (response.error === "EMAIL_ALREADY_IN_USE") {
          setError(labels.emailInUse);
        } else {
          setError(labels.genericError);
        }
        setLoading(false);
        return;
      }

      // Success redirects to login or dashboard
      router.push(`/${locale}/auth/login`);
      router.refresh();
    } catch (err) {
      setError(labels.genericError);
      setLoading(false);
    }
  }

  return (
    <Card className="border-border/40 bg-card/60 backdrop-blur-md shadow-2xl">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold tracking-tight text-center">{labels.title}</CardTitle>
        <CardDescription className="text-center text-muted-foreground">{labels.description}</CardDescription>
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
                {labels.firstName}
              </label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder={isFa ? "آرمین" : "John"}
                required
                disabled={loading}
                className="bg-background/40"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                {labels.lastName}
              </label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder={isFa ? "محمدی" : "Doe"}
                required
                disabled={loading}
                className="bg-background/40"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {labels.email}
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
              {labels.password}
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
                {isFa ? "در حال ثبت‌نام..." : "Creating account..."}
              </>
            ) : (
              labels.submit
            )}
          </Button>

          <div className="text-center text-sm text-muted-foreground mt-4">
            {labels.hasAccount}{" "}
            <Link href={`/${locale}/auth/login`} className="text-purple-400 hover:text-purple-300 font-semibold underline decoration-2 underline-offset-4">
              {labels.loginLink}
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
