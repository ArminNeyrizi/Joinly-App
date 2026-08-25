import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "آمار و احتمال مهندسی | آموزش کامل احتمال و آمار | Joinly",
  description:
    "دوره جامع آمار و احتمال مهندسی؛ از آنالیز ترکیبی و اصول احتمال تا متغیرهای تصادفی، توزیع‌های احتمال، قضایای حدی و شبیه‌سازی.",
};

const chapters = [
  {
    number: 1,
    title: "آنالیز ترکیبی",
    english: "Combinatorial Analysis",
    description:
      "شمارش، جایگشت، ترکیب و روش‌های شمارش که پایه حل بسیاری از مسائل احتمال هستند.",
    lessons: [
      ["مقدمه", "introduction"],
      ["اصل اساسی شمارش", "basic-counting-principle"],
      ["جایگشت‌ها", "permutations"],
      ["ترکیب‌ها", "combinations"],
      ["ضرایب چندجمله‌ای", "multinomial-coefficients"],
      ["تعداد جواب‌های صحیح معادلات", "integer-solutions"],
    ],
  },
  {
    number: 2,
    title: "اصول احتمال",
    english: "Axioms of Probability",
    description:
      "فضای نمونه، پیشامدها، اصول موضوعه احتمال و روش محاسبه احتمال در فضاهای مختلف.",
    lessons: [
      ["مقدمه", "introduction"],
      ["فضای نمونه و پیشامدها", "sample-space-and-events"],
      ["اصول موضوعه احتمال", "probability-axioms"],
      ["قضایای پایه احتمال", "basic-propositions"],
      ["خروجی‌های هم‌احتمال", "equally-likely-outcomes"],
      ["احتمال به‌عنوان معیار باور", "probability-as-belief"],
    ],
  },
  {
    number: 3,
    title: "احتمال شرطی و استقلال",
    english: "Conditional Probability and Independence",
    description:
      "احتمال شرطی، قضیه بیز، استقلال پیشامدها و روش‌های حل مسائل وابسته به اطلاعات قبلی.",
    lessons: [
      ["مقدمه", "introduction"],
      ["احتمال شرطی", "conditional-probability"],
      ["فرمول بیز", "bayes-formula"],
      ["پیشامدهای مستقل", "independent-events"],
      ["احتمال شرطی", "conditional-probability-as-probability"],
    ],
  },
  {
    number: 4,
    title: "متغیرهای تصادفی",
    english: "Random Variables",
    description:
      "متغیرهای تصادفی گسسته، امید ریاضی، واریانس و توزیع‌های مهم احتمال.",
    lessons: [
      ["متغیر تصادفی", "random-variables"],
      ["متغیرهای تصادفی گسسته", "discrete-random-variables"],
      ["امید ریاضی", "expected-value"],
      ["امید تابعی از متغیر تصادفی", "expectation-of-functions"],
      ["واریانس", "variance"],
      ["توزیع برنولی و دوجمله‌ای", "binomial"],
      ["توزیع پواسون", "poisson"],
      ["توزیع هندسی", "geometric"],
      ["توزیع دوجمله‌ای منفی", "negative-binomial"],
      ["توزیع فوق‌هندسی", "hypergeometric"],
      ["تابع توزیع تجمعی", "cdf"],
    ],
  },
  {
    number: 5,
    title: "متغیرهای تصادفی پیوسته",
    english: "Continuous Random Variables",
    description:
      "توزیع‌های پیوسته، نرمال، یکنواخت، نمایی و توزیع‌های مهم دیگر.",
    lessons: [
      ["مقدمه", "introduction"],
      ["امید و واریانس", "expectation-and-variance"],
      ["توزیع یکنواخت", "uniform"],
      ["توزیع نرمال", "normal"],
      ["تقریب نرمال توزیع دوجمله‌ای", "normal-approximation"],
      ["توزیع نمایی", "exponential"],
      ["تابع نرخ خطر", "hazard-rate"],
      ["توزیع گاما", "gamma"],
      ["توزیع ویبول", "weibull"],
      ["توزیع بتا", "beta"],
      ["تابعی از متغیر تصادفی", "function-of-random-variable"],
    ],
  },
  {
    number: 6,
    title: "متغیرهای تصادفی مشترک",
    english: "Jointly Distributed Random Variables",
    description:
      "توزیع مشترک، استقلال، توزیع شرطی و مجموع متغیرهای تصادفی.",
    lessons: [
      ["توزیع مشترک", "joint-distributions"],
      ["متغیرهای تصادفی مستقل", "independent-random-variables"],
      ["مجموع متغیرهای مستقل", "sums-of-independent"],
      ["توزیع شرطی گسسته", "conditional-discrete"],
      ["توزیع شرطی پیوسته", "conditional-continuous"],
      ["آمار ترتیبی", "order-statistics"],
      ["توابع متغیرهای تصادفی", "functions-of-random-variables"],
      ["متغیرهای Exchangeable", "exchangeable"],
    ],
  },
  {
    number: 7,
    title: "خواص امید ریاضی",
    english: "Properties of Expectation",
    description:
      "کوواریانس، همبستگی، امید شرطی، پیش‌بینی و تابع مولد گشتاور.",
    lessons: [
      ["مقدمه", "introduction"],
      ["امید مجموع متغیرهای تصادفی", "expectation-of-sums"],
      ["گشتاور تعداد پیشامدها", "moments-of-events"],
      ["کوواریانس و همبستگی", "covariance-and-correlation"],
      ["امید شرطی", "conditional-expectation"],
      ["امید شرطی و پیش‌بینی", "prediction"],
      ["تابع مولد گشتاور", "moment-generating-function"],
      ["توزیع نرمال چندمتغیره", "multivariate-normal"],
      ["تعریف عمومی امید", "general-expectation"],
    ],
  },
  {
    number: 8,
    title: "قضایای حدی",
    english: "Limit Theorems",
    description:
      "نامساوی چبیشف، قانون اعداد بزرگ و قضیه حد مرکزی.",
    lessons: [
      ["مقدمه", "introduction"],
      ["نامساوی چبیشف", "chebyshev"],
      ["قانون ضعیف اعداد بزرگ", "weak-law"],
      ["قضیه حد مرکزی", "central-limit-theorem"],
      ["قانون قوی اعداد بزرگ", "strong-law"],
      ["سایر نامساوی‌ها", "other-inequalities"],
    ],
  },
  {
    number: 9,
    title: "مباحث تکمیلی احتمال",
    english: "Additional Topics in Probability",
    description:
      "فرآیند پواسون، زنجیره‌های مارکوف، آنتروپی و نظریه اطلاعات.",
    lessons: [
      ["فرآیند پواسون", "poisson-process"],
      ["زنجیره‌های مارکوف", "markov-chains"],
      ["عدم قطعیت و آنتروپی", "entropy"],
      ["نظریه کدگذاری و آنتروپی", "coding-theory"],
    ],
  },
  {
    number: 10,
    title: "شبیه‌سازی",
    english: "Simulation",
    description:
      "تولید متغیرهای تصادفی، شبیه‌سازی توزیع‌ها و تکنیک‌های کاهش واریانس.",
    lessons: [
      ["مقدمه", "introduction"],
      ["شبیه‌سازی متغیرهای پیوسته", "continuous-simulation"],
      ["روش تبدیل معکوس", "inverse-transformation"],
      ["روش رد کردن", "rejection-method"],
      ["شبیه‌سازی توزیع‌های گسسته", "discrete-simulation"],
      ["کاهش واریانس", "variance-reduction"],
      ["متغیرهای متضاد", "antithetic-variables"],
      ["متغیرهای کنترلی", "control-variates"],
    ],
  },
];

const totalLessons = chapters.reduce(
  (total, chapter) => total + chapter.lessons.length,
  0
);

function ArrowLeft() {
  return (
    <svg
      width="18"
      height="18"
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

export default function ProbabilityCoursePage() {
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
              className="text-sm font-medium text-black"
            >
              یادگیری
            </Link>

            <Link
              href="/articles"
              className="text-sm text-neutral-500 hover:text-black"
            >
              مقالات
            </Link>

            <Link
              href="/projects"
              className="text-sm text-neutral-500 hover:text-black"
            >
              پروژه‌ها
            </Link>

            <Link
              href="/about"
              className="text-sm text-neutral-500 hover:text-black"
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

      {/* Hero */}
      <section className="border-b border-neutral-100">
        <div className="mx-auto max-w-[1100px] px-6 pb-20 pt-16 lg:pt-24">
          <div className="max-w-[780px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-xs text-neutral-500">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              مسیر یادگیری Joinly
            </div>

            <h1 className="text-4xl font-black leading-[1.35] tracking-[-1px] sm:text-5xl lg:text-6xl">
              آمار و احتمال مهندسی
            </h1>

            <p className="mt-7 max-w-[700px] text-base leading-9 text-neutral-500 sm:text-lg">
              از شمارش و اصول احتمال شروع می‌کنیم و قدم‌به‌قدم به
              متغیرهای تصادفی، توزیع‌های احتمال، قضیه حد مرکزی و
              شبیه‌سازی می‌رسیم.
            </p>

            <p className="mt-5 max-w-[700px] text-sm leading-8 text-neutral-400">
              این دوره بر اساس ساختار کتاب
              <span className="mx-1 font-medium text-neutral-600">
                A First Course in Probability
              </span>
              طراحی شده و مثال‌ها و تمرین‌های آن با تمرکز روی مسائل
              مهندسی و کاربردهای محاسباتی ارائه می‌شوند.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 overflow-hidden rounded-2xl border border-neutral-200 sm:grid-cols-4">
            <div className="border-b border-neutral-200 p-6 sm:border-b-0 sm:border-l">
              <div className="text-3xl font-black">۱۰</div>
              <div className="mt-2 text-xs text-neutral-400">
                فصل
              </div>
            </div>

            <div className="border-b border-neutral-200 p-6 sm:border-b-0 sm:border-l">
              <div className="text-3xl font-black">{totalLessons}+</div>
              <div className="mt-2 text-xs text-neutral-400">
                درس
              </div>
            </div>

            <div className="border-b border-neutral-200 p-6 sm:border-b-0 sm:border-l">
              <div className="text-3xl font-black">۳</div>
              <div className="mt-2 text-xs text-neutral-400">
                سطح یادگیری
              </div>
            </div>

            <div className="p-6">
              <div className="text-3xl font-black">∞</div>
              <div className="mt-2 text-xs text-neutral-400">
                تمرین و مثال
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Method */}
      <section className="border-b border-neutral-100 bg-neutral-50/60">
        <div className="mx-auto max-w-[1100px] px-6 py-16">
          <div className="max-w-[650px]">
            <span className="text-xs font-medium text-orange-600">
              روش یادگیری
            </span>

            <h2 className="mt-4 text-3xl font-black">
              فقط فرمول حفظ نمی‌کنیم
            </h2>

            <p className="mt-5 text-sm leading-8 text-neutral-500">
              هر مفهوم ابتدا با یک مسئله شروع می‌شود، بعد ایده
              ریاضی آن را می‌بینیم و در نهایت با مثال و تمرین آن را
              به کار می‌بریم.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "فهم مفهوم",
                text: "اول می‌فهمیم مسئله چیست و چرا به این مفهوم نیاز داریم.",
              },
              {
                number: "02",
                title: "ریاضی",
                text: "تعریف، فرمول و روابط ریاضی را دقیق می‌کنیم.",
              },
              {
                number: "03",
                title: "حل مسئله",
                text: "با مثال مهندسی و تمرین، مفهوم را به کار می‌بریم.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-neutral-200 bg-white p-7"
              >
                <span className="text-xs text-neutral-300">
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

      {/* Chapters */}
      <section>
        <div className="mx-auto max-w-[1100px] px-6 py-20">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-medium text-orange-600">
                سرفصل دوره
              </span>

              <h2 className="mt-4 text-3xl font-black">
                مسیر یادگیری
              </h2>
            </div>

            <span className="text-xs text-neutral-400">
              {chapters.length} فصل · {totalLessons}+ درس
            </span>
          </div>

          <div className="mt-10 space-y-4">
            {chapters.map((chapter) => (
              <details
                key={chapter.number}
                className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center gap-5 p-6 sm:p-7">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-sm font-bold">
                    {String(chapter.number).padStart(2, "0")}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold">
                      {chapter.title}
                    </h3>

                    <p className="mt-1 hidden text-xs text-neutral-400 sm:block">
                      {chapter.english}
                    </p>
                  </div>

                  <span className="text-xs text-neutral-400">
                    {chapter.lessons.length} درس
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-400 transition group-open:rotate-90">
                    <ArrowLeft />
                  </span>
                </summary>

                <div className="border-t border-neutral-100 px-6 pb-6 pt-2 sm:px-7">
                  <p className="max-w-[720px] py-5 text-sm leading-8 text-neutral-500">
                    {chapter.description}
                  </p>

                  <div className="grid gap-2 sm:grid-cols-2">
                    {chapter.lessons.map(([title, slug], index) => (
                      <Link
                        key={slug}
                        href={`/learn/probability/chapter-${chapter.number}/${slug}`}
                        className="group/lesson flex items-center gap-4 rounded-xl border border-neutral-100 p-4 transition hover:border-neutral-300 hover:bg-neutral-50"
                      >
                        <span className="text-xs text-neutral-300">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="flex-1 text-sm text-neutral-700">
                          {title}
                        </span>

                        <span className="text-neutral-300 transition group-hover/lesson:translate-x-[-3px] group-hover/lesson:text-black">
                          ←
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-neutral-100 bg-black text-white">
        <div className="mx-auto max-w-[1100px] px-6 py-20">
          <div className="max-w-[650px]">
            <span className="text-xs text-neutral-500">
              شروع یادگیری
            </span>

            <h2 className="mt-5 text-3xl font-black leading-[1.5] sm:text-4xl">
              از فصل اول شروع کن؛
              <br />
              قدم‌به‌قدم جلو برو.
            </h2>

            <p className="mt-5 text-sm leading-8 text-neutral-400">
              لازم نیست کل احتمال را یک‌جا یاد بگیری. هر فصل روی
              مفاهیم فصل‌های قبلی ساخته می‌شود.
            </p>

            <Link
              href="/learn/probability/chapter-1/introduction"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-bold !text-black transition hover:bg-neutral-200"
            >
              شروع فصل اول
              <ArrowLeft />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-100 bg-white">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-5 px-6 py-10 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
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