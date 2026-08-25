import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "آمار و احتمال مهندسی | آموزش کامل با مثال و تمرین",
  description:
    "آموزش آمار و احتمال مهندسی از پایه تا پیشرفته؛ شامل احتمال، متغیر تصادفی، توزیع‌های احتمال، امید ریاضی، واریانس، توزیع نرمال، برآورد و آزمون فرض با مثال و تمرین.",
  keywords: [
    "آمار و احتمال مهندسی",
    "آمار مهندسی",
    "احتمال مهندسی",
    "آموزش آمار و احتمال",
    "توزیع نرمال",
    "متغیر تصادفی",
  ],
};

const chapters = [
  {
    number: "01",
    title: "مبانی احتمال",
    description:
      "فضای نمونه، پیشامدها، قوانین احتمال و روش حل مسائل پایه.",
    lessons: 5,
    duration: "۱ ساعت و ۴۰ دقیقه",
  },
  {
    number: "02",
    title: "احتمال شرطی و استقلال",
    description:
      "احتمال شرطی، استقلال پیشامدها و حل مسائل چندمرحله‌ای.",
    lessons: 4,
    duration: "۱ ساعت و ۲۰ دقیقه",
  },
  {
    number: "03",
    title: "قضیه بیز",
    description:
      "قضیه بیز، احتمال کل و کاربرد آن در مسائل مهندسی.",
    lessons: 4,
    duration: "۱ ساعت و ۱۵ دقیقه",
  },
  {
    number: "04",
    title: "متغیرهای تصادفی",
    description:
      "متغیر تصادفی گسسته و پیوسته، تابع جرم و تابع چگالی احتمال.",
    lessons: 5,
    duration: "۲ ساعت",
  },
  {
    number: "05",
    title: "امید ریاضی و واریانس",
    description:
      "امید، واریانس، انحراف معیار و خواص آن‌ها در مسائل مهندسی.",
    lessons: 4,
    duration: "۱ ساعت و ۳۰ دقیقه",
  },
  {
    number: "06",
    title: "توزیع‌های احتمال",
    description:
      "برنولی، دوجمله‌ای، هندسی، پواسون و توزیع‌های مهم دیگر.",
    lessons: 6,
    duration: "۲ ساعت و ۳۰ دقیقه",
  },
  {
    number: "07",
    title: "توزیع نرمال",
    description:
      "توزیع نرمال استاندارد، تبدیل Z و حل مسائل کاربردی.",
    lessons: 4,
    duration: "۱ ساعت و ۴۵ دقیقه",
  },
  {
    number: "08",
    title: "متغیرهای تصادفی چندبعدی",
    description:
      "توزیع مشترک، حاشیه‌ای، شرطی و کوواریانس.",
    lessons: 3,
    duration: "۱ ساعت و ۳۰ دقیقه",
  },
  {
    number: "09",
    title: "قضایای حدی",
    description:
      "قانون اعداد بزرگ و قضیه حد مرکزی با مثال‌های مهندسی.",
    lessons: 3,
    duration: "۱ ساعت و ۱۵ دقیقه",
  },
  {
    number: "10",
    title: "نمونه‌گیری و توزیع نمونه‌ای",
    description:
      "نمونه، جامعه، میانگین نمونه‌ای و توزیع‌های نمونه‌ای.",
    lessons: 3,
    duration: "۱ ساعت و ۲۰ دقیقه",
  },
  {
    number: "11",
    title: "برآورد",
    description:
      "برآورد نقطه‌ای، فاصله اطمینان و روش‌های تخمین پارامتر.",
    lessons: 4,
    duration: "۱ ساعت و ۴۵ دقیقه",
  },
  {
    number: "12",
    title: "آزمون فرض",
    description:
      "فرض صفر، فرض مقابل، خطاهای نوع اول و دوم و آزمون‌های آماری.",
    lessons: 5,
    duration: "۲ ساعت",
  },
];

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

function BookIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22V5.5Z" />
      <path d="M4 5.5V22" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function StatisticsProbabilityPage() {
  const totalLessons = chapters.reduce(
    (sum, chapter) => sum + chapter.lessons,
    0,
  );

  return (
    <main dir="rtl" className="min-h-screen bg-white text-neutral-950">
      {/* Header */}
      <header className="border-b border-neutral-100 bg-white">
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
              className="font-medium text-black"
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
            className="rounded-lg bg-black px-5 py-3 text-xs font-medium !text-white hover:bg-neutral-800"
          >
            ورود / ثبت‌نام
          </Link>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="border-b border-neutral-100">
        <div className="mx-auto flex max-w-[1280px] items-center gap-2 px-6 py-4 text-xs text-neutral-400 lg:px-8">
          <Link href="/" className="hover:text-black">
            خانه
          </Link>

          <span>/</span>

          <Link href="/learn" className="hover:text-black">
            یادگیری
          </Link>

          <span>/</span>

          <span className="text-neutral-700">
            آمار و احتمال مهندسی
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="border-b border-neutral-100 bg-neutral-50/70">
        <div className="mx-auto max-w-[1280px] px-6 py-14 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-medium text-orange-700">
                مسیر یادگیری · ریاضی
              </div>

              <h1 className="max-w-[780px] text-4xl font-black leading-[1.35] tracking-tight sm:text-5xl">
                آمار و احتمال مهندسی
              </h1>

              <p className="mt-6 max-w-[720px] text-[16px] leading-8 text-neutral-500">
                آمار و احتمال را از مفاهیم پایه شروع می‌کنیم و
                مرحله‌به‌مرحله به مباحثی می‌رسیم که در مهندسی،
                علوم داده و تحلیل مسائل واقعی استفاده می‌شوند.
              </p>

              <div className="mt-8 flex flex-wrap gap-6 text-sm text-neutral-500">
                <span className="flex items-center gap-2">
                  <BookIcon />
                  {totalLessons} درس
                </span>

                <span className="flex items-center gap-2">
                  <ClockIcon />
                  حدود ۱۹ ساعت
                </span>

                <span>
                  سطح: <strong className="text-neutral-800">مقدماتی تا پیشرفته</strong>
                </span>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#chapters"
                  className="flex h-13 items-center justify-center gap-3 rounded-lg bg-black px-7 text-sm font-medium !text-white transition hover:bg-neutral-800"
                >
                  شروع یادگیری
                  <ArrowLeft />
                </Link>

                <Link
                  href="/learn"
                  className="flex h-13 items-center justify-center rounded-lg border border-neutral-200 bg-white px-7 text-sm font-medium hover:bg-neutral-50"
                >
                  بازگشت به مسیرها
                </Link>
              </div>
            </div>

            {/* Course visual */}
            <div className="relative hidden h-[300px] overflow-hidden rounded-3xl border border-neutral-200 bg-white lg:block">
              <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-neutral-100 blur-3xl" />

              <div className="absolute right-10 top-12 h-40 w-40 rounded-2xl border border-neutral-200 bg-white shadow-xl">
                <div className="absolute left-6 right-6 top-7 h-2 rounded-full bg-neutral-100" />

                <svg
                  viewBox="0 0 150 100"
                  className="absolute bottom-6 left-5 right-5 h-24 w-[calc(100%-40px)]"
                  fill="none"
                >
                  <path
                    d="M4 85 C25 82 35 20 68 20 C100 20 102 82 145 60"
                    stroke="black"
                    strokeWidth="2.5"
                  />

                  <circle cx="68" cy="20" r="4" fill="black" />
                  <circle cx="102" cy="80" r="4" fill="black" />
                </svg>
              </div>

              <div className="absolute bottom-8 left-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-black text-3xl font-bold text-white shadow-2xl">
                σ
              </div>

              <div className="absolute bottom-8 right-9 text-xs text-neutral-400">
                Probability
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main */}
      <section
        id="chapters"
        className="mx-auto max-w-[1280px] px-6 py-14 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          {/* Chapters */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold">
                سرفصل‌های دوره
              </h2>

              <p className="mt-2 text-sm text-neutral-500">
                مباحث به ترتیب از ساده به پیچیده مرتب شده‌اند.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-neutral-200">
              {chapters.map((chapter, index) => (
                <div
                  key={chapter.number}
                  className={`group p-5 transition hover:bg-neutral-50 sm:p-6 ${
                    index !== chapters.length - 1
                      ? "border-b border-neutral-100"
                      : ""
                  }`}
                >
                  <div className="flex gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-xs font-bold text-neutral-500">
                      {chapter.number}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col justify-between gap-2 sm:flex-row">
                        <h3 className="font-bold">
                          {chapter.title}
                        </h3>

                        <span className="text-xs text-neutral-400">
                          {chapter.lessons} درس
                        </span>
                      </div>

                      <p className="mt-2 max-w-[650px] text-sm leading-7 text-neutral-500">
                        {chapter.description}
                      </p>

                      <div className="mt-3 text-xs text-neutral-400">
                        {chapter.duration}
                      </div>
                    </div>

                    <div className="hidden items-center sm:flex">
                      <ChevronDown />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside>
            <div className="sticky top-6 rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="font-bold">
                در این مسیر چه یاد می‌گیری؟
              </h3>

              <div className="mt-6 space-y-4">
                {[
                  "حل مسائل احتمال",
                  "کار با متغیرهای تصادفی",
                  "شناخت توزیع‌های احتمال",
                  "تحلیل داده‌های آماری",
                  "برآورد پارامترها",
                  "آزمون فرض آماری",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-neutral-600"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-100">
                      <CheckIcon />
                    </span>

                    {item}
                  </div>
                ))}
              </div>

              <div className="my-6 border-t border-neutral-100" />

              <div className="space-y-3 text-xs text-neutral-400">
                <div className="flex justify-between">
                  <span>تعداد فصل‌ها</span>
                  <span className="font-medium text-neutral-700">
                    {chapters.length}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>تعداد درس‌ها</span>
                  <span className="font-medium text-neutral-700">
                    {totalLessons}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>سطح</span>
                  <span className="font-medium text-neutral-700">
                    مقدماتی تا پیشرفته
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Learning philosophy */}
      <section className="border-t border-neutral-100 bg-neutral-50">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8">
          <div className="max-w-[720px]">
            <span className="text-sm font-medium text-orange-600">
              روش یادگیری Joinly
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-[1.5]">
              فقط فرمول حفظ نمی‌کنیم.
              <br />
              مسئله را می‌فهمیم و حل می‌کنیم.
            </h2>

            <p className="mt-5 text-sm leading-8 text-neutral-500">
              هر مفهوم با توضیح ساده شروع می‌شود، بعد یک مثال
              حل‌شده می‌بینیم و در نهایت با چند تمرین بررسی
              می‌کنیم که آیا واقعاً موضوع را فهمیده‌ایم یا نه.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "مفهوم",
                text: "اول می‌فهمیم موضوع دقیقاً چیست و چرا به آن نیاز داریم.",
              },
              {
                number: "02",
                title: "مثال",
                text: "یک مسئله واقعی را مرحله‌به‌مرحله حل می‌کنیم.",
              },
              {
                number: "03",
                title: "تمرین",
                text: "خودت مسئله را حل می‌کنی تا یادگیری تثبیت شود.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <span className="text-xs font-bold text-neutral-300">
                  {item.number}
                </span>

                <h3 className="mt-5 font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-neutral-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-100">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-5 px-6 py-10 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Link
            href="/"
            className="text-xl font-black tracking-tight !text-black"
          >
            JOINLY<span className="text-orange-500">.</span>
          </Link>

          <div className="flex gap-7">
            <Link href="/learn" className="hover:text-black">
              یادگیری
            </Link>

            <Link href="/articles" className="hover:text-black">
              مقالات
            </Link>

            <Link href="/projects" className="hover:text-black">
              پروژه‌ها
            </Link>
          </div>

          <span className="text-xs text-neutral-400">
            © 2026 Joinly
          </span>
        </div>
      </footer>
    </main>
  );
}