import Link from "next/link";
import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "مقدمه‌ای بر احتمال | آمار و احتمال مهندسی | Joinly",
  description:
    "مقدمه‌ای بر احتمال، آزمایش تصادفی، فضای نمونه و پیشامدها با مثال‌های مهندسی و توضیحات ساده.",
};

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

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function IntroductionPage() {
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
              className="text-sm text-neutral-500 transition hover:text-black"
            >
              مقالات
            </Link>

            <Link
              href="/projects"
              className="text-sm text-neutral-500 transition hover:text-black"
            >
              پروژه‌ها
            </Link>

            <Link
              href="/about"
              className="text-sm text-neutral-500 transition hover:text-black"
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
        <div className="mx-auto max-w-[1100px] px-6 py-5">
          <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
            <Link href="/learn" className="transition hover:text-black">
              یادگیری
            </Link>

            <span>/</span>

            <Link
              href="/learn/engineering-probability"
              className="transition hover:text-black"
            >
              آمار و احتمال مهندسی
            </Link>

            <span>/</span>

            <Link
              href="/learn/engineering-probability/combinatorial-analysis"
              className="transition hover:text-black"
            >
              آنالیز ترکیبی
            </Link>

            <span>/</span>

            <span className="text-neutral-700">مقدمه</span>
          </div>
        </div>
      </div>

      {/* Lesson Hero */}
      <section className="border-b border-neutral-100">
        <div className="mx-auto max-w-[900px] px-6 pb-16 pt-14 lg:pt-20">
          <div className="flex items-center gap-3 text-xs text-orange-600">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-50 font-bold">
              ۰۱
            </span>

            <span>فصل اول · آنالیز ترکیبی</span>
          </div>

          <h1 className="mt-7 text-4xl font-black leading-[1.4] tracking-[-1px] sm:text-5xl">
            مقدمه‌ای بر احتمال
          </h1>

          <p className="mt-6 max-w-[760px] text-base leading-9 text-neutral-500 sm:text-lg">
            قبل از اینکه احتمال یک پیشامد را محاسبه کنیم، باید بدانیم
            چه نتایجی ممکن است رخ دهند و دقیقاً کدام مجموعه از نتایج
            برای مسئله‌ی ما اهمیت دارد.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-neutral-200 px-4 py-2 text-xs text-neutral-500">
              مقدمه
            </span>

            <span className="rounded-full border border-neutral-200 px-4 py-2 text-xs text-neutral-500">
              فضای نمونه
            </span>

            <span className="rounded-full border border-neutral-200 px-4 py-2 text-xs text-neutral-500">
              پیشامد
            </span>

            <span className="rounded-full border border-neutral-200 px-4 py-2 text-xs text-neutral-500">
              آزمایش تصادفی
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="mx-auto max-w-[900px] px-6 py-16">
        {/* Introduction */}
        <section>
          <p className="text-[17px] leading-[2.2] text-neutral-700">
            احتمال، زبان ریاضی برای صحبت‌کردن درباره‌ی{" "}
            <strong className="font-bold text-neutral-950">
              عدم قطعیت
            </strong>{" "}
            است.
          </p>

          <p className="mt-6 text-[17px] leading-[2.2] text-neutral-700">
            در بسیاری از مسائل مهندسی نمی‌توانیم نتیجه‌ی یک آزمایش یا
            فرایند را با اطمینان کامل پیش‌بینی کنیم؛ اما می‌توانیم
            مشخص کنیم هر نتیجه یا مجموعه‌ای از نتایج با چه احتمالی
            رخ می‌دهد.
          </p>

          <div className="my-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
            <p className="text-sm font-bold text-neutral-950">
              چند سؤال معمول مهندسی
            </p>

            <div className="mt-5 space-y-4 text-sm leading-8 text-neutral-600">
              <div className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                احتمال اینکه یک قطعه‌ی تولیدشده معیوب باشد چقدر است؟
              </div>

              <div className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                احتمال اینکه یک سیستم در یک بازه‌ی زمانی مشخص از کار
                بیفتد چقدر است؟
              </div>

              <div className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                احتمال مشاهده‌ی حداقل دو موفقیت در چند آزمایش چقدر
                است؟
              </div>

              <div className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                اگر از میان چند قطعه به‌صورت تصادفی نمونه‌برداری کنیم،
                احتمال انتخاب قطعات سالم چقدر است؟
              </div>
            </div>
          </div>

          <p className="text-[17px] leading-[2.2] text-neutral-700">
            برای پاسخ‌دادن به چنین پرسش‌هایی، ابتدا باید مشخص کنیم
            <strong className="mx-1 font-bold text-neutral-950">
              چه نتایجی ممکن است رخ دهند
            </strong>
            و دقیقاً درباره‌ی کدام مجموعه از نتایج صحبت می‌کنیم.
          </p>
        </section>

        {/* Three concepts */}
        <section className="mt-16">
          <SectionTitle
            number="01"
            title="سه مفهوم پایه"
            description="قبل از محاسبه‌ی احتمال، سه مفهوم را باید بشناسیم."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                number: "۱",
                title: "فضای نمونه",
                english: "Sample Space",
                text: "مجموعه‌ی تمام نتایج ممکن یک آزمایش.",
              },
              {
                number: "۲",
                title: "پیشامد",
                english: "Event",
                text: "مجموعه‌ای از نتایج که برای مسئله‌ی ما اهمیت دارد.",
              },
              {
                number: "۳",
                title: "احتمال",
                english: "Probability",
                text: "عددی که میزان امکان وقوع یک پیشامد را نشان می‌دهد.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-neutral-200 p-6"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-sm font-bold">
                  {item.number}
                </div>

                <h3 className="mt-6 font-bold">{item.title}</h3>

                <p className="mt-1 text-xs text-neutral-400">
                  {item.english}
                </p>

                <p className="mt-4 text-sm leading-7 text-neutral-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Random Experiment */}
        <section className="mt-20">
          <SectionTitle
            number="02"
            title="آزمایش تصادفی چیست؟"
            description="اول باید بدانیم با چه نوع آزمایشی سروکار داریم."
          />

          <p className="mt-8 text-[17px] leading-[2.2] text-neutral-700">
            فرض کنید یک تاس سالم را پرتاب می‌کنیم. نتیجه‌ی پرتاب را
            نمی‌توانیم قبل از انجام آزمایش با قطعیت مشخص کنیم، اما
            می‌دانیم چه نتایجی ممکن هستند:
          </p>

          <div className="my-10 grid grid-cols-3 gap-2 sm:grid-cols-6">
            {[1, 2, 3, 4, 5, 6].map((number) => (
              <div
                key={number}
                className="flex aspect-square items-center justify-center rounded-2xl border border-neutral-200 text-2xl font-black transition hover:-translate-y-1 hover:border-neutral-400 hover:shadow-sm"
              >
                {number}
              </div>
            ))}
          </div>

          <p className="text-[17px] leading-[2.2] text-neutral-700">
            به فرایندی که نتیجه‌ی آن از قبل به‌طور قطعی مشخص نیست،
            اما مجموعه‌ی نتایج ممکن آن را می‌توان تعیین کرد،
            <strong className="mx-1 font-bold text-neutral-950">
              آزمایش تصادفی
            </strong>
            می‌گوییم.
          </p>

          <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_8px_40px_rgba(0,0,0,0.04)]">
            <div className="text-xs font-bold text-neutral-400">
              مثال
            </div>

            <p className="mt-3 text-sm leading-8 text-neutral-700">
              پرتاب سکه، پرتاب تاس، انتخاب تصادفی یک قطعه از خط تولید
              و اندازه‌گیری عمر یک قطعه همگی می‌توانند به‌عنوان
              آزمایش تصادفی مدل شوند.
            </p>
          </div>
        </section>

        {/* Sample Space */}
        <section className="mt-20">
          <SectionTitle
            number="03"
            title="فضای نمونه"
            description="تمام نتایجی که ممکن است از آزمایش به دست بیایند."
          />

          <p className="mt-8 text-[17px] leading-[2.2] text-neutral-700">
            مجموعه‌ی تمام نتایج ممکن یک آزمایش را با نماد{" "}
            <InlineMath math="S" /> نشان می‌دهیم.
          </p>

          <div className="my-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <p className="text-center text-sm text-neutral-400">
              فضای نمونه‌ی پرتاب یک تاس
            </p>

            <BlockMath math="S=\{1,2,3,4,5,6\}" />
          </div>

          <p className="text-[17px] leading-[2.2] text-neutral-700">
            اگر آزمایش، پرتاب یک سکه باشد:
          </p>

          <div className="my-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <BlockMath math="S=\{\text{شیر},\text{خط}\}" />
          </div>

          <p className="text-[17px] leading-[2.2] text-neutral-700">
            اما فضای نمونه همیشه به این سادگی نیست.
          </p>
        </section>

        {/* Two coins */}
        <section className="mt-20">
          <SectionTitle
            number="04"
            title="یک مثال مهم: دو بار پرتاب سکه"
            description="اینجا ترتیب نتایج اهمیت پیدا می‌کند."
          />

          <p className="mt-8 text-[17px] leading-[2.2] text-neutral-700">
            فرض کنید یک سکه را دو بار پرتاب می‌کنیم. نتایج ممکن
            عبارت‌اند از:
          </p>

          <div className="my-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
            <BlockMath
              math={`S=\\{(H,H),(H,T),(T,H),(T,T)\\}`}
            />
          </div>

          <p className="text-[17px] leading-[2.2] text-neutral-700">
            در اینجا ترتیب نتایج مهم است. یعنی:
          </p>

          <div className="my-8 rounded-2xl border border-neutral-200 p-6">
            <BlockMath math="(H,T)\neq(T,H)" />
          </div>

          <p className="text-[17px] leading-[2.2] text-neutral-700">
            در حالت اول، پرتاب اول شیر و پرتاب دوم خط است؛ در حالی
            که در حالت دوم ترتیب برعکس شده است.
          </p>

          {/* Interactive coin */}
          <CoinExperiment />
        </section>

        {/* Event */}
        <section className="mt-20">
          <SectionTitle
            number="05"
            title="پیشامد چیست؟"
            description="همه‌ی نتایج برای ما اهمیت یکسانی ندارند."
          />

          <p className="mt-8 text-[17px] leading-[2.2] text-neutral-700">
            فرض کنید در پرتاب دو سکه، سؤال ما این باشد:
          </p>

          <div className="my-8 rounded-2xl border-r-4 border-orange-500 bg-orange-50/50 p-6">
            <p className="text-base font-bold leading-8 text-neutral-900">
              احتمال اینکه دقیقاً یک بار شیر ظاهر شود چقدر است؟
            </p>
          </div>

          <p className="text-[17px] leading-[2.2] text-neutral-700">
            ما دیگر به تمام فضای نمونه علاقه نداریم. فقط نتایجی
            برایمان مهم هستند که دقیقاً یک شیر دارند:
          </p>

          <div className="my-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <BlockMath
              math={`A=\\{(H,T),(T,H)\\}`}
            />
          </div>

          <p className="text-[17px] leading-[2.2] text-neutral-700">
            این مجموعه را یک{" "}
            <strong className="font-bold text-neutral-950">
              پیشامد (Event)
            </strong>{" "}
            می‌نامیم.
          </p>

          <div className="my-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <BlockMath math="A\subseteq S" />
          </div>

          <p className="text-[17px] leading-[2.2] text-neutral-700">
            یعنی هر پیشامد، مجموعه‌ای از نتایج فضای نمونه است.
          </p>
        </section>

        {/* Engineering Example */}
        <section className="mt-20">
          <SectionTitle
            number="06"
            title="مثال مهندسی"
            description="همین مفاهیم را در یک سیستم واقعی‌تر ببینیم."
          />

          <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
            <div className="text-xs font-bold text-orange-600">
              سیستم دو پمپه
            </div>

            <p className="mt-4 text-[16px] leading-8 text-neutral-700">
              فرض کنید یک سیستم شامل دو پمپ مستقل{" "}
              <InlineMath math="A" /> و <InlineMath math="B" /> است و
              هر پمپ می‌تواند یکی از دو وضعیت زیر را داشته باشد:
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-neutral-200 bg-white p-4">
                <span className="font-bold text-neutral-950">W</span>
                <span className="mr-2 text-sm text-neutral-500">
                  سالم (Working)
                </span>
              </div>

              <div className="rounded-xl border border-neutral-200 bg-white p-4">
                <span className="font-bold text-neutral-950">F</span>
                <span className="mr-2 text-sm text-neutral-500">
                  خراب (Failed)
                </span>
              </div>
            </div>
          </div>

          <p className="mt-8 text-[17px] leading-[2.2] text-neutral-700">
            بنابراین فضای نمونه برابر است با:
          </p>

          <div className="my-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <BlockMath
              math={`S=\\{(W,W),(W,F),(F,W),(F,F)\\}`}
            />
          </div>

          <p className="text-[17px] leading-[2.2] text-neutral-700">
            اگر سیستم زمانی کار کند که{" "}
            <strong className="font-bold text-neutral-950">
              حداقل یکی از دو پمپ سالم باشد
            </strong>
            ، پیشامد عملکرد سیستم برابر است با:
          </p>

          <div className="my-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <BlockMath
              math={`A=\\{(W,W),(W,F),(F,W)\\}`}
            />
          </div>

          <p className="text-[17px] leading-[2.2] text-neutral-700">
            تنها حالتی که سیستم از کار می‌افتد:
          </p>

          <div className="my-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <BlockMath math="(F,F)" />
          </div>

          <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-100">
                <CheckIcon />
              </div>

              <p className="text-sm leading-8 text-neutral-600">
                این مثال نشان می‌دهد قبل از محاسبه‌ی احتمال باید
                اول دقیقاً مشخص کنیم چه چیزی ممکن است اتفاق بیفتد
                و کدام نتایج برای مسئله‌ی ما اهمیت دارند.
              </p>
            </div>
          </div>
        </section>

        {/* Mental Model */}
        <section className="mt-20">
          <SectionTitle
            number="07"
            title="مدل ذهنی این فصل"
            description="فعلاً هنوز احتمال را محاسبه نمی‌کنیم."
          />

          <div className="my-10 overflow-hidden rounded-2xl border border-neutral-200">
            <div className="grid md:grid-cols-4">
              {[
                ["۱", "آزمایش", "Experiment"],
                ["۲", "نتایج ممکن", "Possible Outcomes"],
                ["۳", "فضای نمونه", "Sample Space"],
                ["۴", "پیشامد", "Event"],
              ].map(([number, title, english], index) => (
                <div
                  key={number}
                  className={`p-6 ${
                    index !== 3
                      ? "border-b border-neutral-200 md:border-b-0 md:border-l"
                      : ""
                  }`}
                >
                  <span className="text-xs text-neutral-300">
                    {number}
                  </span>

                  <h3 className="mt-4 font-bold">{title}</h3>

                  <p className="mt-1 text-xs text-neutral-400">
                    {english}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-black p-7 text-white sm:p-9">
            <p className="text-xs text-neutral-500">
              مسیر حل مسئله
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-bold">
              <span>آزمایش</span>
              <span className="text-neutral-600">←</span>
              <span>نتایج ممکن</span>
              <span className="text-neutral-600">←</span>
              <span>فضای نمونه</span>
              <span className="text-neutral-600">←</span>
              <span>پیشامد</span>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="mt-20">
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-7 sm:p-9">
            <span className="text-xs font-medium text-orange-600">
              نکات این درس
            </span>

            <div className="mt-6 space-y-5">
              {[
                "آزمایش تصادفی نتیجه‌ی قطعی از پیش مشخص‌شده ندارد، اما نتایج ممکن آن قابل تعیین هستند.",
                "فضای نمونه S شامل تمام نتایج ممکن آزمایش است.",
                "پیشامد A مجموعه‌ای از نتایج فضای نمونه است.",
                "برای حل یک مسئله‌ی احتمال، ابتدا باید فضای نمونه و پیشامد موردنظر را دقیق تعریف کنیم.",
              ].map((text) => (
                <div key={text} className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-neutral-500">
                    <CheckIcon />
                  </span>

                  <p className="text-sm leading-8 text-neutral-600">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>

      {/* Lesson Navigation */}
      <section className="border-t border-neutral-100 bg-neutral-50/60">
        <div className="mx-auto flex max-w-[900px] flex-col gap-4 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/learn/engineering-probability"
            className="inline-flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-5 py-4 text-sm font-medium transition hover:border-neutral-400"
          >
            بازگشت به سرفصل دوره
          </Link>

          <Link
            href="/learn/engineering-probability/combinatorial-analysis/basic-counting-principle"
            className="inline-flex items-center gap-3 rounded-xl bg-black px-5 py-4 text-sm font-bold !text-white transition hover:bg-neutral-800"
          >
            درس بعدی: اصل اساسی شمارش
            <ArrowLeft />
          </Link>
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
            <Link href="/learn" className="transition hover:text-black">
              یادگیری
            </Link>

            <Link
              href="/articles"
              className="transition hover:text-black"
            >
              مقالات
            </Link>

            <Link
              href="/projects"
              className="transition hover:text-black"
            >
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

/* -------------------------------------------------------------------------- */
/* Components                                                                 */
/* -------------------------------------------------------------------------- */

function SectionTitle({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="text-xs font-bold text-orange-600">
          {number}
        </span>

        <span className="h-px w-8 bg-orange-200" />
      </div>

      <h2 className="mt-4 text-2xl font-black tracking-[-0.5px] sm:text-3xl">
        {title}
      </h2>

      <p className="mt-3 text-sm leading-7 text-neutral-400">
        {description}
      </p>
    </div>
  );
}

function CoinExperiment() {
  return (
    <div className="mt-10 rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_8px_40px_rgba(0,0,0,0.04)] sm:p-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-xs font-medium text-orange-600">
            تعامل
          </span>

          <h3 className="mt-2 text-lg font-bold">
            فضای نمونه را ببین
          </h3>
        </div>

        <span className="text-xs text-neutral-400">
          دو بار پرتاب سکه
        </span>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-4">
        {[
          ["H", "H"],
          ["H", "T"],
          ["T", "H"],
          ["T", "T"],
        ].map(([first, second]) => (
          <div
            key={`${first}-${second}`}
            className="rounded-xl border border-neutral-200 p-5 text-center transition hover:-translate-y-1 hover:border-neutral-400 hover:shadow-sm"
          >
            <div className="flex items-center justify-center gap-2">
              <Coin value={first} />
              <Coin value={second} />
            </div>

            <div className="mt-4 text-xs text-neutral-400">
              ({first},{second})
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl bg-neutral-50 p-5 text-sm leading-8 text-neutral-600">
        <strong className="text-neutral-950">H</strong> یعنی شیر
        و <strong className="text-neutral-950">T</strong> یعنی خط.
      </div>
    </div>
  );
}

function Coin({ value }: { value: string }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-neutral-200 bg-white text-sm font-black">
      {value}
    </div>
  );
}