import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BookOpen, Cpu, Layers, Award, Clock } from "lucide-react";

import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAcademyList } from "@/modules/academy/service";

export const metadata = {
  title: "Joinly — پلتفرم مرکزی آموزش و توسعه مهارت",
};

export default async function HomePage() {
  let academies: Awaited<ReturnType<typeof getAcademyList>> = [];
  try {
    academies = await getAcademyList();
  } catch (error) {
    console.error("Failed to load academies for homepage", error);
  }

  const steps = [
    {
      icon: <BookOpen className="size-6 text-purple-400" />,
      title: "۱. آموزش و مسیر یادگیری",
      desc: "در آکادمی‌های تخصصی ثبت‌نام کنید و با انتخاب واحد آنلاین، دوره‌های مورد نظر خود را بگذرانید.",
    },
    {
      icon: <Cpu className="size-6 text-indigo-400" />,
      title: "۲. پروژه‌های واقعی",
      desc: "پس از آموزش، بلافاصله وارد پروژه‌های واقعی و همکاری تیمی در اکوسیستم جوینلی شوید.",
    },
    {
      icon: <Clock className="size-6 text-pink-400" />,
      title: "۳. ثبت ساعت کاری",
      desc: "ساعات فعالیت و خروجی‌های روزانه خود را در سیستم تایم‌ترکینگ جوینلی ثبت و ارزیابی کنید.",
    },
    {
      icon: <Award className="size-6 text-amber-400" />,
      title: "۴. پاداش و ارتقا",
      desc: "بر اساس ساعات ثبت‌شده و کیفیت کار، امتیاز، اعتبار آموزشی و حتی درآمدهای مالی کسب کنید.",
    },
  ];

  return (
    <AppShell currentPath="home">
      <div className="space-y-24 pb-16">
        
        {/* HERO SECTION */}
        <section className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8 pt-6">
          <div className="flex flex-col space-y-6 lg:col-span-7">
            <div className="inline-flex max-w-fit items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-300">
              <Layers className="size-3.5" />
              نسل جدید پلتفرم‌های آموزشی
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl leading-tight">
              <span className="bg-gradient-to-l from-white via-slate-100 to-purple-300 bg-clip-text text-transparent">
                اتصال آموزش، پروژه‌های واقعی و رشد حرفه‌ای
              </span>
            </h1>
            
            <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
              جوینلی زیرساخت مشترک آکادمی‌های تخصصی هلدینگ است. با ثبت‌نام در جوینلی، مهارت‌های جدید بیاموزید، در پروژه‌های واقعی مشارکت کنید و مسیر شغلی خود را بسازید.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                nativeButton={false}
                render={<Link href="/enrollment" />}
                size="lg"
                className="bg-gradient-to-l from-purple-600 to-indigo-600 px-8 text-white hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-500/20 font-bold transition-all duration-300 hover:-translate-y-0.5"
              >
                شروع انتخاب واحد
                <ArrowLeft className="size-4" />
              </Button>
              
              <Button
                nativeButton={false}
                render={<Link href="/dashboard" />}
                variant="outline"
                size="lg"
                className="border-border/40 hover:bg-muted/50 font-bold transition-all duration-300"
              >
                داشبورد من
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:col-span-5">
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-purple-600/20 to-indigo-600/10 blur-xl opacity-75" />
            <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-card/40 p-2 shadow-2xl backdrop-blur-sm max-w-full">
              <Image
                src="/hero.jpg"
                alt="Joinly technological abstract nodes visual"
                width={600}
                height={338}
                priority
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* METRICS / STATS */}
        <section className="grid gap-6 sm:grid-cols-4">
          {[
            { value: "۵+", label: "آکادمی تخصصی" },
            { value: "۲۰+", label: "مسیرهای یادگیری" },
            { value: "۱۰۰٪", label: "پروژه‌های واقعی" },
            { value: "۲۴/۷", label: "پشتیبانی آموزشی" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center rounded-xl border border-border/30 bg-card/20 p-6 text-center backdrop-blur-xs">
              <span className="text-3xl font-black text-white bg-gradient-to-l from-white to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="mt-1 text-sm text-muted-foreground font-semibold">{stat.label}</span>
            </div>
          ))}
        </section>

        {/* ACADEMIES GRID */}
        <section className="space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">آکادمی‌های فعال در جوینلی</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">هر آکادمی دارای هویت، دوره‌ها و مسیرهای اختصاصی خود است، اما همه روی زیرساخت یکپارچه جوینلی فعالیت می‌کنند.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {academies.map((ac) => (
              <Card key={ac.id} className="group border-border/40 bg-card/30 backdrop-blur-xs transition-all duration-300 hover:border-purple-500/40 hover:bg-card/50 hover:shadow-lg hover:shadow-purple-500/5 hover:-translate-y-1 flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-white transition-colors group-hover:text-purple-400">
                    {ac.name}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 mt-2 leading-relaxed text-muted-foreground min-h-[3rem]">
                    {ac.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between border-t border-border/35 pt-4 text-xs text-muted-foreground font-semibold">
                    <span>{ac.courseCount} دوره</span>
                    <span>{ac.learningPathCount} مسیر یادگیری</span>
                    <span>{ac.studentCount} دانشجو</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section className="space-y-12">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">چرخه رشد حرفه‌ای در جوینلی</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">جوینلی فراتر از یک کلاس درس سنتی است. ما تمام مراحل رشد یک فرد از آموزش تا درآمدزایی را پوشش می‌دهیم.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={i} className="relative rounded-2xl border border-border/30 bg-card/20 p-6 space-y-4 hover:border-border/60 transition-colors">
                <div className="rounded-lg bg-background p-3 w-fit shadow-md border border-border/25">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}