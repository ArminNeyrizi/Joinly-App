import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "احتمال شرطی و استقلال | آمار و احتمال مهندسی | Joinly",
  description:
    "آموزش احتمال شرطی و استقلال پیشامدها با توضیح مفهومی، فرمول، مثال و تمرین در آمار و احتمال مهندسی.",
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

export default function ConditionalProbabilityPage() {
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
            <Link href="/learn" className="text-sm text-neutral-600 hover:text-black">
              یادگیری
            </Link>

            <Link href="/articles" className="text-sm text-neutral-600 hover:text-black">
              مقالات
            </Link>

            <Link href="/projects" className="text-sm text-neutral-600 hover:text-black">
              پروژه‌ها
            </Link>

            <Link href="/about" className="text-sm text-neutral-600 hover:text-black">
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
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center gap-2 px-6 py-4 text-xs text-neutral-400">
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
            احتمال شرطی و استقلال
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="border-b border-neutral-100 bg-neutral-50/70">
        <div className="mx-auto max-w-[900px] px-6 py-14 lg:py-20">
          <div className="mb-5 text-sm font-medium text-orange-600">
            فصل ۱ · مبانی احتمال
          </div>

          <h1 className="text-4xl font-black leading-[1.4] tracking-tight sm:text-5xl">
            احتمال شرطی و استقلال
          </h1>

          <p className="mt-6 max-w-[760px] text-[16px] leading-8 text-neutral-500">
            وقتی اطلاعات جدیدی درباره یک اتفاق به دست می‌آوریم،
            احتمال اتفاق‌های دیگر ممکن است تغییر کند. احتمال شرطی
            دقیقاً برای همین موقعیت‌هاست.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-xs text-neutral-500">
            <span className="rounded-full border border-neutral-200 bg-white px-4 py-2">
              ۱۸ دقیقه مطالعه
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

      {/* Content */}
      <div className="mx-auto grid max-w-[1100px] gap-12 px-6 py-14 lg:grid-cols-[1fr_250px]">
        <article className="min-w-0">

          {/* Intro */}
          <section>
            <h2 className="text-2xl font-bold">
              چرا احتمال شرطی؟
            </h2>

            <p className="mt-5 text-[16px] leading-9 text-neutral-600">
              فرض کنید می‌خواهیم احتمال خراب بودن یک قطعه را محاسبه
              کنیم. اگر هیچ اطلاعات دیگری نداشته باشیم، از احتمال
              کلی خرابی استفاده می‌کنیم.
            </p>

            <p className="mt-5 text-[16px] leading-9 text-neutral-600">
              اما اگر بدانیم قطعه از یک خط تولید خاص آمده، یا مثلاً
              در یک تست اولیه مردود شده، اطلاعات جدیدی داریم.
              بنابراین احتمال خرابی می‌تواند تغییر کند.
            </p>
          </section>

          {/* Formula */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">
              تعریف احتمال شرطی
            </h2>

            <p className="mt-5 text-[16px] leading-9 text-neutral-600">
              احتمال وقوع A به شرط اینکه B اتفاق افتاده باشد را با
              P(A | B) نشان می‌دهیم.
            </p>

            <div className="my-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 text-center">
              <div
                dir="ltr"
                className="text-3xl font-bold tracking-wide"
              >
                P(A | B) = P(A ∩ B) / P(B)
              </div>

              <p className="mt-5 text-sm leading-7 text-neutral-500">
                البته به شرط اینکه P(B) ≠ 0 باشد.
              </p>
            </div>

            <p className="text-[16px] leading-9 text-neutral-600">
              نکته مهم این است که بعد از دانستن B، فضای مسئله ما
              محدودتر می‌شود. دیگر تمام حالت‌های قبلی را به یک
              اندازه بررسی نمی‌کنیم.
            </p>
          </section>

          {/* Simple Example */}
          <section className="mt-14">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-xs font-bold !text-white">
                مثال
              </span>

              <h2 className="text-2xl font-bold">
                یک مثال ساده
              </h2>
            </div>

            <p className="text-[16px] leading-9 text-neutral-600">
              یک تاس سالم را پرتاب می‌کنیم. می‌دانیم عدد ظاهرشده
              زوج است. احتمال اینکه عدد بزرگ‌تر از ۳ باشد چقدر است؟
            </p>

            <div className="my-7 rounded-2xl border border-neutral-200 p-7">
              <p className="text-sm text-neutral-500">
                فضای نمونه اولیه:
              </p>

              <div
                dir="ltr"
                className="mt-4 text-center text-xl font-bold"
              >
                Ω = {"{1, 2, 3, 4, 5, 6}"}
              </div>

              <div className="my-6 border-t border-neutral-100" />

              <p className="text-sm text-neutral-500">
                اما می‌دانیم عدد زوج است:
              </p>

              <div
                dir="ltr"
                className="mt-4 text-center text-xl font-bold"
              >
                B = {"{2, 4, 6}"}
              </div>
            </div>

            <p className="text-[16px] leading-9 text-neutral-600">
              حالا فقط بین ۲، ۴ و ۶ جست‌وجو می‌کنیم. از این سه حالت،
              فقط ۴ و ۶ بزرگ‌تر از ۳ هستند.
            </p>

            <div className="my-7 rounded-2xl bg-neutral-50 p-7 text-center">
              <div dir="ltr" className="text-2xl font-bold">
                P(A | B) = 2 / 3
              </div>
            </div>
          </section>

          {/* Engineering Example */}
          <section className="mt-14">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-xs font-bold text-orange-700">
                مهندسی
              </span>

              <h2 className="text-2xl font-bold">
                مثال مهندسی
              </h2>
            </div>

            <p className="text-[16px] leading-9 text-neutral-600">
              فرض کنید یک کارخانه دو خط تولید A و B دارد.
              ۶۰٪ محصولات از خط A و ۴۰٪ از خط B تولید می‌شوند.
            </p>

            <div className="my-7 overflow-hidden rounded-2xl border border-neutral-200">
              <div className="grid grid-cols-3 border-b border-neutral-200 bg-neutral-50 p-4 text-sm font-bold">
                <span>خط تولید</span>
                <span>سهم تولید</span>
                <span>خرابی</span>
              </div>

              <div className="grid grid-cols-3 border-b border-neutral-100 p-4 text-sm">
                <span>A</span>
                <span>۶۰٪</span>
                <span>۲٪</span>
              </div>

              <div className="grid grid-cols-3 p-4 text-sm">
                <span>B</span>
                <span>۴۰٪</span>
                <span>۵٪</span>
              </div>
            </div>

            <p className="text-[16px] leading-9 text-neutral-600">
              حالا یک قطعه معیوب پیدا شده است. سؤال این است:
              احتمال اینکه این قطعه از خط B آمده باشد چقدر است؟
            </p>

            <div className="my-7 rounded-2xl border border-neutral-200 bg-white p-7">
              <div dir="ltr" className="text-center text-xl font-bold">
                P(B | D)
              </div>

              <p className="mt-4 text-center text-sm leading-7 text-neutral-500">
                D یعنی «قطعه معیوب است».
              </p>
            </div>

            <p className="text-[16px] leading-9 text-neutral-600">
              این دقیقاً همان نوع مسئله‌ای است که در ادامه با
              قضیه بیز به شکل منظم حل خواهیم کرد.
            </p>
          </section>

          {/* Independence */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">
              استقلال یعنی چه؟
            </h2>

            <p className="mt-5 text-[16px] leading-9 text-neutral-600">
              دو پیشامد A و B مستقل هستند اگر دانستن اینکه B رخ داده،
              هیچ تغییری در احتمال A ایجاد نکند.
            </p>

            <div className="my-8 rounded-2xl bg-neutral-950 p-8 text-center text-white">
              <div dir="ltr" className="text-2xl font-bold">
                P(A | B) = P(A)
              </div>
            </div>

            <p className="text-[16px] leading-9 text-neutral-600">
              یک شکل معادل برای بیان استقلال این است:
            </p>

            <div className="my-7 rounded-2xl border border-neutral-200 bg-neutral-50 p-7 text-center">
              <div dir="ltr" className="text-2xl font-bold">
                P(A ∩ B) = P(A) × P(B)
              </div>
            </div>
          </section>

          {/* Difference */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">
              احتمال شرطی ≠ استقلال
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-neutral-200 p-6">
                <span className="text-xs font-bold text-orange-600">
                  احتمال شرطی
                </span>

                <h3 className="mt-4 font-bold">
                  اطلاعات جدید داریم
                </h3>

                <p className="mt-3 text-sm leading-7 text-neutral-500">
                  می‌خواهیم بدانیم احتمال A وقتی B را می‌دانیم
                  چقدر است.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 p-6">
                <span className="text-xs font-bold text-orange-600">
                  استقلال
                </span>

                <h3 className="mt-4 font-bold">
                  اطلاعات جدید اثری ندارد
                </h3>

                <p className="mt-3 text-sm leading-7 text-neutral-500">
                  دانستن B احتمال A را تغییر نمی‌دهد.
                </p>
              </div>
            </div>
          </section>

          {/* Important */}
          <section className="mt-14 rounded-2xl border-r-4 border-black bg-neutral-50 p-7">
            <h3 className="font-bold">
              نکته مهم
            </h3>

            <p className="mt-3 text-sm leading-8 text-neutral-600">
              شرطی بودن احتمال به معنی وابسته بودن دو پیشامد نیست.
              احتمال شرطی یک ابزار برای محاسبه احتمال با داشتن
              اطلاعات جدید است؛ استقلال یک ویژگی بین دو پیشامد است.
            </p>
          </section>

          {/* Exercise */}
          <section className="mt-14 rounded-2xl border border-neutral-200 p-7">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">
                تمرین
              </h2>

              <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-500">
                سطح متوسط
              </span>
            </div>

            <p className="mt-5 text-[16px] leading-8 text-neutral-600">
              در یک جعبه ۱۰ قطعه وجود دارد که ۳ قطعه معیوب هستند.
              دو قطعه بدون جایگذاری انتخاب می‌کنیم.
              اگر بدانیم قطعه اول سالم بوده، احتمال اینکه قطعه دوم
              سالم باشد چقدر است؟
            </p>

            <details className="group mt-6 rounded-xl border border-neutral-200">
              <summary className="cursor-pointer list-none p-5 text-sm font-medium">
                نمایش راهنمای حل
              </summary>

              <div className="border-t border-neutral-100 p-5 text-sm leading-8 text-neutral-500">
                ابتدا تعداد قطعات سالم را مشخص کنید. سپس با توجه
                به اینکه قطعه اول سالم بوده، تعداد قطعات باقی‌مانده
                و تعداد قطعات سالم باقی‌مانده را محاسبه کنید.
              </div>
            </details>
          </section>

          {/* Navigation */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            <Link
              href="/learn/statistics-probability/basics-of-probability"
              className="group rounded-2xl border border-neutral-200 p-6 transition hover:bg-neutral-50"
            >
              <span className="text-xs text-neutral-400">
                درس قبل
              </span>

              <div className="mt-3 flex items-center gap-3 text-sm font-bold">
                <ArrowRight />
                احتمال چیست؟
              </div>
            </Link>

            <Link
              href="/learn/statistics-probability/bayes-theorem"
              className="group rounded-2xl bg-black p-6 !text-white transition hover:bg-neutral-800"
            >
              <span className="text-xs text-neutral-400">
                درس بعدی
              </span>

              <div className="mt-3 flex items-center justify-between text-sm font-bold">
                قضیه بیز
                <ArrowLeft />
              </div>
            </Link>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-[100px] rounded-2xl border border-neutral-200 p-5">
            <div className="text-xs font-medium text-neutral-400">
              آمار و احتمال مهندسی
            </div>

            <h3 className="mt-3 font-bold">
              فصل ۱: مبانی احتمال
            </h3>

            <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-neutral-100">
              <div className="h-full w-[40%] rounded-full bg-black" />
            </div>

            <p className="mt-3 text-xs text-neutral-400">
              درس ۲ از ۵
            </p>

            <div className="mt-5 space-y-2">
              {[
                "احتمال چیست؟",
                "احتمال شرطی و استقلال",
                "قوانین احتمال",
                "شمارش و احتمال",
                "تمرین فصل اول",
              ].map((lesson, index) => (
                <Link
                  key={lesson}
                  href={
                    index === 0
                      ? "/learn/statistics-probability/basics-of-probability"
                      : index === 1
                        ? "/learn/statistics-probability/conditional-probability"
                        : "#"
                  }
                  className={`block rounded-lg px-3 py-3 text-xs ${
                    index === 1
                      ? "bg-neutral-100 font-medium"
                      : "text-neutral-500 hover:bg-neutral-50"
                  }`}
                >
                  {index + 1}. {lesson}
                </Link>
              ))}
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