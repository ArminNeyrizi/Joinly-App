import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "احتمال چیست؟ | آمار و احتمال مهندسی | Joinly",
  description:
    "آموزش مفهوم احتمال، فضای نمونه و پیشامد با مثال‌های ساده و مهندسی.",
};

function ArrowLeft() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M19 12H5" />
      <path d="m11 18-6-6 6-6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function ProbabilityBasicsPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-white text-neutral-950">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-[1280px] items-center justify-between px-6 lg:px-8">
          <Link
            href="/"
            className="text-[25px] font-black tracking-[-1.5px]"
          >
            JOINLY<span className="text-orange-500">.</span>
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            <Link
              href="/learn"
              className="text-sm text-neutral-600 hover:text-black"
            >
              یادگیری
            </Link>

            <Link
              href="/articles"
              className="text-sm text-neutral-600 hover:text-black"
            >
              مقالات
            </Link>

            <Link
              href="/projects"
              className="text-sm text-neutral-600 hover:text-black"
            >
              پروژه‌ها
            </Link>

            <Link
              href="/about"
              className="text-sm text-neutral-600 hover:text-black"
            >
              درباره ما
            </Link>
          </nav>

          <Link
            href="/login"
            className="rounded-lg bg-black px-5 py-3 text-xs font-medium !text-white transition hover:bg-neutral-800"
          >
            ورود / ثبت‌نام
          </Link>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="border-b border-neutral-100">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-2 px-6 py-4 text-xs text-neutral-400 lg:px-8">
          <Link href="/" className="hover:text-black">
            خانه
          </Link>

          <span>/</span>

          <Link href="/learn" className="hover:text-black">
            یادگیری
          </Link>

          <span>/</span>

          <Link
            href="/learn/statistics-probability"
            className="hover:text-black"
          >
            آمار و احتمال مهندسی
          </Link>

          <span>/</span>

          <span className="text-neutral-700">
            احتمال چیست؟
          </span>
        </div>
      </div>

      {/* Lesson Header */}
      <section className="border-b border-neutral-100 bg-neutral-50/70">
        <div className="mx-auto max-w-[900px] px-6 py-14 lg:py-20">
          <div className="mb-5 text-sm font-medium text-orange-600">
            فصل ۱ · مبانی احتمال
          </div>

          <h1 className="text-4xl font-black leading-[1.4] tracking-tight sm:text-5xl">
            احتمال چیست؟
          </h1>

          <p className="mt-6 max-w-[760px] text-[16px] leading-8 text-neutral-500">
            قبل از اینکه سراغ فرمول‌های احتمال برویم، باید بفهمیم
            احتمال دقیقاً چه چیزی را اندازه می‌گیرد و چرا اصلاً
            به آن نیاز داریم.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-xs text-neutral-500">
            <span className="rounded-full border border-neutral-200 bg-white px-4 py-2">
              ۱۲ دقیقه مطالعه
            </span>

            <span className="rounded-full border border-neutral-200 bg-white px-4 py-2">
              مقدماتی
            </span>

            <span className="rounded-full border border-neutral-200 bg-white px-4 py-2">
              مثال + تمرین
            </span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="mx-auto grid max-w-[1100px] gap-12 px-6 py-14 lg:grid-cols-[1fr_250px] lg:px-8">
        {/* Article */}
        <article className="min-w-0">
          <section>
            <h2 className="text-2xl font-bold">
              از کجا شروع کنیم؟
            </h2>

            <p className="mt-5 text-[16px] leading-9 text-neutral-600">
              خیلی از اتفاقاتی که در دنیای واقعی با آن‌ها مواجه
              می‌شویم، قطعی نیستند. مثلاً نمی‌دانیم فردا باران
              می‌بارد یا نه، یک قطعه در خط تولید خراب می‌شود یا نه،
              یا یک درخواست شبکه با موفقیت به مقصد می‌رسد یا نه.
            </p>

            <p className="mt-5 text-[16px] leading-9 text-neutral-600">
              با این حال، این به معنی کاملاً تصادفی و غیرقابل تحلیل
              بودن این اتفاقات نیست. ما می‌توانیم میزان احتمال رخ
              دادن یک اتفاق را اندازه‌گیری کنیم.
            </p>
          </section>

          {/* Concept */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">
              احتمال یعنی چه؟
            </h2>

            <p className="mt-5 text-[16px] leading-9 text-neutral-600">
              احتمال یک عدد بین صفر و یک است که میزان امکان رخ دادن
              یک پیشامد را نشان می‌دهد.
            </p>

            <div className="my-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-7 text-center">
              <div className="text-3xl font-bold tracking-wide">
                ۰ ≤ P(A) ≤ ۱
              </div>

              <p className="mt-4 text-sm text-neutral-500">
                احتمال پیشامد A همیشه بین صفر و یک قرار دارد.
              </p>
            </div>

            <p className="text-[16px] leading-9 text-neutral-600">
              اگر احتمال یک اتفاق صفر باشد، آن اتفاق را غیرممکن
              در نظر می‌گیریم. اگر احتمال آن یک باشد، اتفاق قطعی
              است.
            </p>
          </section>

          {/* Example */}
          <section className="mt-14">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-xs font-bold !text-white">
                مثال
              </span>

              <h2 className="text-2xl font-bold">
                پرتاب سکه
              </h2>
            </div>

            <p className="text-[16px] leading-9 text-neutral-600">
              فرض کنید یک سکه سالم را یک بار پرتاب می‌کنیم.
              نتیجه چه چیزهایی می‌تواند باشد؟
            </p>

            <div className="my-7 rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm">
              <p className="text-sm text-neutral-500">
                فضای نمونه:
              </p>

              <div className="mt-5 rounded-xl bg-neutral-950 p-6 text-center text-2xl font-bold text-white">
                Ω = {"{"} شیر، خط {"}"}
              </div>
            </div>

            <p className="text-[16px] leading-9 text-neutral-600">
              اگر سکه سالم باشد، احتمال آمدن شیر و خط برابر است:
            </p>

            <div className="my-7 rounded-2xl bg-neutral-50 p-7 text-center">
              <div className="text-2xl font-bold">
                P(شیر) = ۱ / ۲
              </div>

              <div className="mt-3 text-sm text-neutral-500">
                یعنی احتمال آمدن شیر ۵۰ درصد است.
              </div>
            </div>
          </section>

          {/* Engineering example */}
          <section className="mt-14">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-xs font-bold text-orange-700">
                مهندسی
              </span>

              <h2 className="text-2xl font-bold">
                یک مثال مهندسی
              </h2>
            </div>

            <p className="text-[16px] leading-9 text-neutral-600">
              فرض کنید در یک کارخانه، از هر ۱۰۰ قطعه تولیدشده،
              به‌طور میانگین ۵ قطعه معیوب هستند.
            </p>

            <div className="my-7 rounded-2xl border border-neutral-200 p-7">
              <p className="text-sm text-neutral-500">
                پیشامد A:
              </p>

              <p className="mt-3 text-lg font-bold">
                «قطعه انتخاب‌شده معیوب باشد»
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-5">
                <span className="text-sm text-neutral-500">
                  احتمال معیوب بودن
                </span>

                <span className="text-2xl font-black">
                  P(A) = 0.05
                </span>
              </div>
            </div>

            <p className="text-[16px] leading-9 text-neutral-600">
              یعنی اگر شرایط تولید ثابت بماند، انتظار داریم حدود
              ۵ درصد قطعات تولیدشده معیوب باشند.
            </p>
          </section>

          {/* Important note */}
          <section className="mt-14 rounded-2xl border-r-4 border-black bg-neutral-50 p-7">
            <h3 className="font-bold">
              یک نکته مهم
            </h3>

            <p className="mt-3 text-sm leading-8 text-neutral-600">
              احتمال ۰٫۰۵ به این معنی نیست که از هر ۲۰ قطعه دقیقاً
              یک قطعه معیوب خواهد بود. احتمال درباره رفتار بلندمدت
              یک فرایند صحبت می‌کند، نه نتیجه قطعی یک آزمایش منفرد.
            </p>
          </section>

          {/* Exercise */}
          <section className="mt-14 rounded-2xl border border-neutral-200 bg-white p-7">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">
                تمرین
              </h2>

              <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-500">
                بدون پاسخ
              </span>
            </div>

            <p className="mt-5 text-[16px] leading-8 text-neutral-600">
              یک تاس سالم را یک بار پرتاب می‌کنیم. احتمال اینکه
              عدد ظاهرشده زوج باشد چقدر است؟
            </p>

            <div className="mt-6">
              <details className="group rounded-xl border border-neutral-200">
                <summary className="cursor-pointer list-none p-5 text-sm font-medium">
                  نمایش راهنمای حل
                </summary>

                <div className="border-t border-neutral-100 p-5 text-sm leading-8 text-neutral-500">
                  ابتدا فضای نمونه را بنویسید و سپس تعداد حالت‌هایی
                  که عدد زوج دارند را مشخص کنید.
                </div>
              </details>
            </div>
          </section>

          {/* Navigation */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            <Link
              href="/learn/statistics-probability"
              className="group rounded-2xl border border-neutral-200 p-6 transition hover:bg-neutral-50"
            >
              <span className="text-xs text-neutral-400">
                بازگشت
              </span>

              <div className="mt-3 flex items-center gap-3 text-sm font-bold">
                <ArrowRight />
                سرفصل‌های آمار و احتمال
              </div>
            </Link>

            <Link
              href="/learn/statistics-probability/conditional-probability"
              className="group rounded-2xl bg-black p-6 !text-white transition hover:bg-neutral-800"
            >
              <span className="text-xs text-neutral-400">
                درس بعدی
              </span>

              <div className="mt-3 flex items-center justify-between text-sm font-bold">
                احتمال شرطی و استقلال
                <ArrowLeft />
              </div>
            </Link>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-[100px]">
            <div className="rounded-2xl border border-neutral-200 p-5">
              <div className="text-xs font-medium text-neutral-400">
                آمار و احتمال مهندسی
              </div>

              <h3 className="mt-3 font-bold">
                فصل ۱: مبانی احتمال
              </h3>

              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-neutral-100">
                <div className="h-full w-[20%] rounded-full bg-black" />
              </div>

              <p className="mt-3 text-xs text-neutral-400">
                درس ۱ از ۵
              </p>

              <div className="mt-5 space-y-2">
                {[
                  "احتمال چیست؟",
                  "فضای نمونه و پیشامد",
                  "قوانین احتمال",
                  "شمارش و احتمال",
                  "تمرین فصل اول",
                ].map((lesson, index) => (
                  <div
                    key={lesson}
                    className={`rounded-lg px-3 py-3 text-xs ${
                      index === 0
                        ? "bg-neutral-100 font-medium"
                        : "text-neutral-500"
                    }`}
                  >
                    {index + 1}. {lesson}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-100">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-5 px-6 py-10 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="text-xl font-black tracking-tight !text-black"
          >
            JOINLY<span className="text-orange-500">.</span>
          </Link>

          <span className="text-xs text-neutral-400">
            © 2026 Joinly
          </span>
        </div>
      </footer>
    </main>
  );
}