import Link from "next/link";
import { LoginForm } from "@/modules/auth/components/login-form";

export const metadata = {
  title: "ورود به حساب کاربری",
};

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-12 sm:px-6 lg:px-8 bg-background">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[40rem] w-[40rem] rounded-full bg-purple-600/10 blur-[128px]" />
      </div>

      <div className="relative w-full max-w-md space-y-8">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="text-3xl font-black tracking-tight text-white hover:opacity-90">
            Join<span className="text-purple-500">ly</span>
          </Link>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}