import Link from "next/link";

const learningPaths = [
  {
    title: "ریاضیات",
    description: "ریاضی مهندسی و کاربردی",
    symbol: "∑",
    bg: "bg-[#faf3f7]",
  },
  {
    title: "مهندسی نرم‌افزار",
    description: "طراحی، الگوریتم و معماری",
    symbol: "◇",
    bg: "bg-[#f2f6fc]",
  },
  {
    title: "آمار و احتمال مهندسی",
    description: "مفاهیم، مثال و تمرین",
    symbol: "▥",
    bg: "bg-[#fbf6ed]",
  },
  {
    title: "دیتابیس",
    description: "SQL، طراحی و مدیریت",
    symbol: "●",
    bg: "bg-[#eef8f4]",
  },
  {
    title: "برنامه‌نویسی",
    description: "از پایه تا پیشرفته",
    symbol: "</>",
    bg: "bg-[#f5f1fb]",
  },
];

const articles = [
  {
    category: "برنامه‌نویسی",
    title: "ساخت API با Next.js",
    description:
      "یک API ساده با Next.js را مرحله‌به‌مرحله می‌سازیم.",
    type: "code",
    date: "۵ شهریور ۱۴۰۵",
    time: "۱۰ دقیقه",
  },
  {
    category: "آمار و احتمال",
    title: "توزیع نرمال",
    description:
      "همه چیز درباره توزیع نرمال را به زبان ساده بررسی می‌کنیم.",
    type: "chart",
    date: "۳ شهریور ۱۴۰۵",
    time: "۱۲ دقیقه",
  },
  {
    category: "دیتابیس",
    title: "نرمال‌سازی پایگاه داده",
    description:
      "مفاهیم نرمال‌سازی را با مثال‌های عملی یاد می‌گیریم.",
    type: "database",
    date: "۵ مرداد ۱۴۰۵",
    time: "۸ دقیقه",
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

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="14"
      height="14"
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

function UsersIcon() {
  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M20.8 8.8c0 5.5-8.8 11-8.8 11s-8.8-5.5-8.8-11A4.8 4.8 0 0 1 12 6.2a4.8 4.8 0 0 1 8.8 2.6Z" />
    </svg>
  );
}

function ProjectIcon() {
  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h8M8 11h8M8 15h5" />
      <path d="m15 16 2 2 4-4" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 16 9 5 9-5" />
    </svg>
  );
}

function HeroGraphic() {
  return (
    <div className="relative mx-auto h-[390px] w-full max-w-[520px]">
      {/* Ambient background */}
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-100 blur-3xl" />

      {/* Floating dots */}
      <div className="absolute left-[7%] top-[39%] h-2 w-2 rounded-full bg-black joinly-float-reverse" />

      <div className="absolute right-[3%] top-[32%] h-3 w-3 rounded-full bg-black joinly-pulse" />

      <div className="absolute left-[18%] top-[12%] h-1.5 w-1.5 rounded-full bg-black joinly-float" />

      <div className="absolute bottom-[22%] right-[15%] h-2 w-2 rounded-full bg-black joinly-float-slow" />

      {/* Graph card */}
      <div className="absolute left-[15%] top-[24%] z-10 joinly-float-slow">
        <div className="h-[190px] w-[155px] rotate-[-1deg] rounded-xl border border-neutral-200 bg-white p-5 shadow-xl">
          <div className="mb-5 h-2 w-14 rounded-full bg-neutral-200" />

          <svg
            viewBox="0 0 150 100"
            className="h-[100px] w-full"
            fill="none"
          >
            <path
              d="M4 87 C25 85 27 20 50 20 C76 20 72 87 102 87 C122 87 124 53 146 52"
              stroke="black"
              strokeWidth="2"
            />

            <circle cx="50" cy="20" r="4" fill="black" />
            <circle cx="102" cy="87" r="4" fill="black" />
          </svg>
        </div>
      </div>

      {/* White cube */}
      <div className="absolute right-[20%] top-[19%] z-20 joinly-float">
        <div className="h-[175px] w-[175px] border border-neutral-200 bg-gradient-to-br from-white to-neutral-200 shadow-2xl" />
      </div>

      {/* Black cube */}
      <div className="absolute bottom-[14%] right-[13%] z-30 joinly-float-reverse">
        <div className="h-[135px] w-[155px] bg-gradient-to-br from-neutral-900 to-black shadow-2xl" />
      </div>

      {/* Small cube */}
      <div className="absolute bottom-[13%] left-[22%] z-20 joinly-float-slow">
        <div className="h-[110px] w-[125px] border border-neutral-200 bg-white shadow-xl" />
      </div>

      {/* Sphere */}
      <div className="absolute right-[25%] top-[8%] z-30 joinly-float">
        <div className="h-[75px] w-[75px] rounded-full bg-gradient-to-br from-white via-neutral-200 to-neutral-400 shadow-xl" />
      </div>

      {/* Base shadow */}
      <div className="absolute bottom-[8%] left-[20%] h-7 w-[320px] rounded-full bg-black/10 blur-xl" />
    </div>
  );
}

function ArticleVisual({
  type,
}: {
  type: "code" | "chart" | "database";
}) {
  if (type === "chart") {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-[#4c4789]">
        <svg
          viewBox="0 0 500 250"
          className="h-full w-full"
          fill="none"
        >
          <path
            d="M20 220 C90 220 100 35 250 35 C400 35 410 220 480 220"
            stroke="white"
            strokeWidth="4"
            opacity=".9"
          />

          <path
            d="M250 30V220"
            stroke="white"
            strokeDasharray="6 8"
            opacity=".3"
          />

          <path
            d="M20 220H480"
            stroke="white"
            opacity=".2"
          />
        </svg>
      </div>
    );
  }

  if (type === "code") {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-neutral-700 p-8 font-mono text-xs leading-6 !text-white/80">
        <div>export async function GET()</div>
        <div>{"{"}</div>
        <div className="mr-5">return Response.json(</div>
        <div className="mr-10">{"{ message: 'Hello' }"}</div>
        <div className="mr-5">);</div>
        <div>{"}"}</div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-950 to-neutral-700">
      <div className="relative h-28 w-44 rounded-lg border border-white/20 bg-white/10 backdrop-blur">
        <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40" />
        <div className="absolute left-1/2 top-1/2 h-px w-28 -translate-x-1/2 bg-white/30" />
        <div className="absolute left-1/2 top-1/2 h-20 w-px -translate-y-1/2 bg-white/30" />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-[1280px] items-center justify-between px-6 lg:px-8">
          <Link
            href="/"
            className="text-[25px] font-black tracking-[-1.5px]"
          >
            JOINLY
            <span className="text-orange-500">.</span>
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            <Link
              href="/learn"
              className="text-sm text-neutral-700 transition hover:text-black"
            >
              یادگیری
            </Link>

            <Link
              href="/articles"
              className="text-sm text-neutral-700 transition hover:text-black"
            >
              مقالات
            </Link>

            <Link
              href="/projects"
              className="text-sm text-neutral-700 transition hover:text-black"
            >
              پروژه‌ها
            </Link>

            <Link
              href="/about"
              className="text-sm text-neutral-700 transition hover:text-black"
            >
              درباره ما
            </Link>

            <Link
              href="/community"
              className="text-sm text-neutral-700 transition hover:text-black"
            >
              جامعه
            </Link>
          </nav>

          <div className="flex items-center gap-5">
            <button
              type="button"
              aria-label="جستجو"
              className="hidden text-neutral-700 transition hover:text-black sm:block"
            >
              <SearchIcon />
            </button>

            <Link
              href="/login"
              className="rounded-lg bg-black px-5 py-3 text-xs font-medium !text-white transition hover:bg-neutral-800"
            >
              ورود / ثبت‌نام
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="overflow-hidden border-b border-neutral-100">
        <div className="mx-auto grid min-h-[500px] max-w-[1280px] items-center gap-8 px-6 py-10 lg:grid-cols-2 lg:px-8">
          <div className="order-2 text-center lg:order-1 lg:text-right">
            <div className="mb-5 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs text-neutral-500">
              یک جای ساده برای یادگیری و ساختن
            </div>

            <h1 className="text-4xl font-black leading-[1.35] tracking-[-1.5px] sm:text-5xl lg:text-[55px]">
              یاد بگیر، بساز،{" "}
              <span className="relative inline-block">
                به اشتراک بگذار
                <span className="absolute -bottom-1 right-0 h-1 w-1/3 rounded-full bg-orange-400" />
              </span>
              .
            </h1>

            <p className="mx-auto mt-7 max-w-[600px] text-[16px] leading-8 text-neutral-500 lg:mx-0">
              Joinly یک پلتفرم برای یادگیری مفاهیم عمیق، ساخت پروژه‌های
              واقعی و به اشتراک گذاشتن دانشی است که به کار می‌آید.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/learn"
                className="flex h-13 items-center justify-center gap-3 rounded-lg bg-black px-7 text-sm font-medium !text-white transition hover:bg-neutral-800"
              >
                شروع یادگیری
                <ArrowLeft />
              </Link>

              <Link
                href="/learn"
                className="flex h-13 items-center justify-center rounded-lg border border-neutral-200 px-7 text-sm font-medium transition hover:bg-neutral-50"
              >
                مشاهده مسیرها
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
              <div className="flex -space-x-2 space-x-reverse">
                {["A", "M", "S", "N", "R"].map((letter) => (
                  <div
                    key={letter}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-neutral-200 text-xs font-semibold"
                  >
                    {letter}
                  </div>
                ))}
              </div>

              <span className="text-sm text-neutral-500">
                +۴,۵۰۰ نفر تا الان یاد گرفته‌اند
              </span>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <HeroGraphic />
          </div>
        </div>
      </section>

      {/* Learning paths */}
      <section className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xl font-bold">مسیرهای یادگیری</h2>

          <Link
            href="/learn"
            className="flex items-center gap-2 text-sm text-neutral-500 hover:text-black"
          >
            <ArrowLeft />
            مشاهده همه
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {learningPaths.map((path) => (
            <Link
              key={path.title}
              href="/learn"
              className={`group rounded-2xl p-5 transition hover:-translate-y-1 hover:shadow-md ${path.bg}`}
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-white/80 text-lg font-bold shadow-sm">
                {path.symbol}
              </div>

              <h3 className="font-bold">{path.title}</h3>

              <p className="mt-2 text-xs leading-6 text-neutral-500">
                {path.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="mx-auto max-w-[1280px] px-6 pb-16 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xl font-bold">آخرین مطالب</h2>

          <Link
            href="/articles"
            className="flex items-center gap-2 text-sm text-neutral-500 hover:text-black"
          >
            <ArrowLeft />
            مشاهده همه
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              href="/articles"
              key={article.title}
              className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-[210px] overflow-hidden">
                <ArticleVisual type={article.type as "code" | "chart" | "database"} />
              </div>

              <div className="p-6">
                <span className="text-xs font-medium text-purple-600">
                  {article.category}
                </span>

                <h3 className="mt-3 text-lg font-bold transition group-hover:text-neutral-600">
                  {article.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-neutral-500">
                  {article.description}
                </p>

                <div className="mt-6 flex items-center gap-5 border-t border-neutral-100 pt-4 text-xs text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <CalendarIcon />
                    {article.date}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <ClockIcon />
                    {article.time}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-[1280px] px-6 pb-16 lg:px-8">
        <div className="grid gap-8 rounded-3xl bg-neutral-50 p-8 md:grid-cols-2 lg:grid-cols-4 lg:p-10">
          <div className="flex gap-5">
            <UsersIcon />

            <div>
              <h3 className="font-bold">جامعه فعال و حمایتگر</h3>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                با دیگران یاد بگیر و رشد کن.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <HeartIcon />

            <div>
              <h3 className="font-bold">محتوای به‌روز و کاربردی</h3>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                مطابق نیاز بازار و صنعت.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <ProjectIcon />

            <div>
              <h3 className="font-bold">پروژه‌محور</h3>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                با مثال‌های واقعی یاد بگیر.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <LayersIcon />

            <div>
              <h3 className="font-bold">مسیر یادگیری ساختارمند</h3>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                از مقدماتی تا حرفه‌ای، مرحله‌به‌مرحله.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-100">
        <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-8">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div>
              <Link
                href="/"
                className="text-2xl font-black tracking-[-1px]"
              >
                JOINLY
                <span className="text-orange-500">.</span>
              </Link>

              <p className="mt-3 max-w-sm text-sm leading-7 text-neutral-500">
                یادگیری، ساختن و به اشتراک گذاشتن دانش کاربردی.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-neutral-500">
              <Link href="/learn" className="hover:text-black">
                یادگیری
              </Link>

              <Link href="/articles" className="hover:text-black">
                مقالات
              </Link>

              <Link href="/projects" className="hover:text-black">
                پروژه‌ها
              </Link>

              <Link href="/about" className="hover:text-black">
                درباره ما
              </Link>

              <Link href="/contact" className="hover:text-black">
                تماس
              </Link>
            </div>
          </div>

          <div className="mt-10 border-t border-neutral-100 pt-6 text-xs text-neutral-400">
            © 2026 Joinly. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}