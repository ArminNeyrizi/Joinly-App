import Link from "next/link";

const paths = [
  {
    title: "آمار و احتمال مهندسی",
    description:
      "از مبانی احتمال تا توزیع‌های احتمال، قضیه حد مرکزی، برآورد و آزمون فرض.",
    category: "ریاضی",
    lessons: 42,
    level: "مقدماتی تا پیشرفته",
    progress: 0,
    symbol: "σ",
    bg: "bg-[#fbf6ed]",
  },
  {
    title: "ریاضیات مهندسی",
    description:
      "توابع مختلط، سری فوریه، تبدیل لاپلاس، معادلات دیفرانسیل و کاربردهای مهندسی.",
    category: "ریاضی",
    lessons: 38,
    level: "مقدماتی تا متوسط",
    progress: 0,
    symbol: "∫",
    bg: "bg-[#faf3f7]",
  },
  {
    title: "دیتابیس",
    description:
      "از مدل‌سازی داده و SQL تا طراحی دیتابیس، PostgreSQL و مفاهیم پیشرفته.",
    category: "کامپیوتر",
    lessons: 31,
    level: "مقدماتی تا پیشرفته",
    progress: 0,
    symbol: "DB",
    bg: "bg-[#eef8f4]",
  },
  {
    title: "برنامه‌نویسی",
    description:
      "مفاهیم پایه برنامه‌نویسی، ساختمان داده، الگوریتم و توسعه نرم‌افزار.",
    category: "کامپیوتر",
    lessons: 56,
    level: "مقدماتی تا پیشرفته",
    progress: 0,
    symbol: "</>",
    bg: "bg-[#f5f1fb]",
  },
  {
    title: "مهندسی نرم‌افزار",
    description:
      "معماری نرم‌افزار، طراحی سیستم، Git، تست، API و اصول توسعه حرفه‌ای.",
    category: "کامپیوتر",
    lessons: 29,
    level: "متوسط",
    progress: 0,
    symbol: "◇",
    bg: "bg-[#f2f6fc]",
  },
  {
    title: "جبر خطی",
    description:
      "بردارها، ماتریس‌ها، دستگاه معادلات، فضاهای برداری و مقادیر ویژه.",
    category: "ریاضی",
    lessons: 27,
    level: "مقدماتی تا متوسط",
    progress: 0,
    symbol: "A",
    bg: "bg-[#f7f5ef]",
  },
];

const categories = [
  "همه",
  "ریاضی",
  "کامپیوتر",
  "داده",
  "مهندسی",
];

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

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
      width="17"
      height="17"
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
      width="16"
      height="16"
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

export default function LearnPage() {
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

          <div className="flex items-center gap-5">
            <button
              type="button"
              aria-label="جستجو"
              className="hidden sm:block"
            >
              <SearchIcon />
            </button>

            <Link
              href="/login"
              className="rounded-lg bg-black px-5 py-3 text-xs font-medium !text-white hover:bg-neutral-800"
            >
              ورود / ثبت‌نام
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-neutral-100 bg-neutral-50/60">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8">
          <div className="max-w-[760px]">
            <span className="text-sm font-medium text-orange-600">
              مسیرهای یادگیری
            </span>

            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              چیزی که می‌خواهی یاد بگیری،
              <br />
              از همین‌جا شروع کن.
            </h1>

            <p className="mt-6 max-w-[650px] text-[16px] leading-8 text-neutral-500">
              مسیرهای آموزشی Joinly به‌جای مجموعه‌ای از مطالب پراکنده،
              موضوعات را از پایه تا کاربرد واقعی به هم متصل می‌کنند.
            </p>
          </div>

          {/* Search */}
          <div className="mt-10 max-w-[680px]">
            <div className="flex h-14 items-center gap-3 rounded-xl border border-neutral-200 bg-white px-5 shadow-sm">
              <SearchIcon />

              <input
                type="text"
                placeholder="مثلاً: آمار و احتمال، دیتابیس، جبر خطی..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-[1280px] px-6 py-14 lg:px-8">
        {/* Categories */}
        <div className="mb-12 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category, index) => (
            <button
              key={category}
              type="button"
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm transition ${
                index === 0
                  ? "bg-black !text-white"
                  : "border border-neutral-200 text-neutral-600 hover:bg-neutral-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Heading */}
        <div className="mb-7 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              همه مسیرهای یادگیری
            </h2>

            <p className="mt-2 text-sm text-neutral-500">
              مسیر مناسب خودت را انتخاب کن و از اولین درس شروع کن.
            </p>
          </div>

          <span className="hidden text-sm text-neutral-400 sm:block">
            {paths.length} مسیر
          </span>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {paths.map((path) => (
            <Link
              key={path.title}
              href="/learn/statistics-probability"
              className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg"
            >
              {/* Card visual */}
              <div
                className={`relative h-[155px] overflow-hidden ${path.bg}`}
              >
                <div className="absolute right-7 top-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 text-xl font-bold shadow-sm backdrop-blur">
                  {path.symbol}
                </div>

                <div className="absolute -bottom-12 -left-8 h-36 w-36 rounded-full border-[18px] border-white/40" />

                <div className="absolute bottom-5 left-6 text-xs text-neutral-400">
                  مسیر آموزشی
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-medium text-orange-600">
                    {path.category}
                  </span>

                  <span className="text-xs text-neutral-400">
                    {path.level}
                  </span>
                </div>

                <h3 className="text-lg font-bold transition group-hover:text-neutral-600">
                  {path.title}
                </h3>

                <p className="mt-3 min-h-[56px] text-sm leading-7 text-neutral-500">
                  {path.description}
                </p>

                {/* Meta */}
                <div className="mt-6 flex items-center gap-5 border-t border-neutral-100 pt-5 text-xs text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <BookIcon />
                    {path.lessons} درس
                  </span>

                  <span className="flex items-center gap-1.5">
                    <ClockIcon />
                    مسیر آموزشی
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm font-medium">
                    شروع مسیر
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 transition group-hover:bg-black group-hover:!text-white">
                    <ArrowLeft />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1280px] px-6 pb-16 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-black px-8 py-14 text-white lg:px-16">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

          <div className="relative max-w-[700px]">
            <span className="text-sm text-neutral-400">
              مسیر خودت را بساز
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-[1.5]">
              چیزی پیدا نکردی؟
              <br />
              خودت مسیر یادگیری‌ات را بساز.
            </h2>

            <p className="mt-5 text-sm leading-7 text-neutral-400">
              Joinly قرار نیست فقط یک فهرست ثابت از دوره‌ها باشد.
              مسیرهای جدید بر اساس نیاز و پروژه‌های واقعی ساخته می‌شوند.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-white px-6 py-3 text-sm font-medium !text-black transition hover:bg-neutral-200"
            >
              پیشنهاد یک مسیر
              <ArrowLeft />
            </Link>
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
            <Link href="/articles" className="hover:text-black">
              مقالات
            </Link>

            <Link href="/projects" className="hover:text-black">
              پروژه‌ها
            </Link>

            <Link href="/about" className="hover:text-black">
              درباره ما
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