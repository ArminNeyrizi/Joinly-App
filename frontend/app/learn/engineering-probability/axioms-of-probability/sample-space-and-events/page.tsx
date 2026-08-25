import Link from "next/link";
import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "فضای نمونه و پیشامدها | آمار و احتمال مهندسی | Joinly",
  description:
    "آموزش فضای نمونه، پیشامدها، اجتماع، اشتراک، متمم، مجموعه تهی، پیشامدهای ناسازگار و قوانین دمورگان در احتمال.",
};

const BASE_PATH =
  "/learn/engineering-probability/axioms-of-probability";

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

function Formula({
  children,
}: {
  children: string;
}) {
  return (
    <div
      dir="ltr"
      className="my-7 overflow-x-auto rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-5"
    >
      <BlockMath math={children} />
    </div>
  );
}

function Example({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-8 rounded-2xl border border-neutral-200 bg-white p-6 sm:p-7">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 text-xs font-bold">
          {String(number).padStart(2, "0")}
        </span>

        <h3 className="font-bold">{title}</h3>
      </div>

      <div className="mt-5 text-sm leading-8 text-neutral-600">
        {children}
      </div>
    </div>
  );
}

function Concept({
  title,
  symbol,
  children,
}: {
  title: string;
  symbol: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-bold">{title}</h3>

        <div
          dir="ltr"
          className="flex h-10 min-w-10 items-center justify-center rounded-xl bg-neutral-100 px-3 text-sm"
        >
          <InlineMath math={symbol} />
        </div>
      </div>

      <div className="mt-4 text-sm leading-8 text-neutral-600">
        {children}
      </div>
    </div>
  );
}

export default function SampleSpaceAndEventsPage() {
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

      {/* Breadcrumb */}
      <div className="border-b border-neutral-100">
        <div className="mx-auto max-w-[900px] px-6 py-5">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <Link href="/learn" className="hover:text-black">
              یادگیری
            </Link>

            <span>/</span>

            <Link
              href="/learn/engineering-probability"
              className="hover:text-black"
            >
              آمار و احتمال مهندسی
            </Link>

            <span>/</span>

            <span className="text-neutral-700">
              اصول احتمال
            </span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="border-b border-neutral-100">
        <div className="mx-auto max-w-[900px] px-6 pb-16 pt-14 lg:pt-20">
          <div className="flex items-center gap-3 text-xs text-neutral-400">
            <span className="rounded-full bg-orange-50 px-3 py-1.5 text-orange-600">
              فصل ۲
            </span>

            <span>درس ۲</span>

            <span>·</span>

            <span>فضای نمونه و پیشامدها</span>
          </div>

          <h1 className="mt-7 text-4xl font-black leading-[1.4] tracking-[-1px] sm:text-5xl">
            فضای نمونه و پیشامدها
          </h1>

          <p className="mt-6 max-w-[760px] text-base leading-9 text-neutral-500 sm:text-lg">
            قبل از اینکه بتوانیم احتمال یک رویداد را محاسبه کنیم،
            باید بدانیم دقیقاً درباره چه نتایجی صحبت می‌کنیم.
            در این درس دو مفهوم پایه را می‌سازیم:
            <strong className="mx-1 text-neutral-700">
              فضای نمونه
            </strong>
            و
            <strong className="mx-1 text-neutral-700">
              پیشامد
            </strong>
            .
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Sample Space",
              "Events",
              "Union",
              "Intersection",
              "Complement",
              "Venn Diagrams",
              "DeMorgan's Laws",
            ].map((item) => (
              <span
                key={item}
                dir="ltr"
                className="rounded-full border border-neutral-200 px-3 py-1.5 text-xs text-neutral-500"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="mx-auto max-w-[900px] px-6 py-16">
        {/* Introduction */}
        <section>
          <div className="mb-8 flex items-center gap-4">
            <span className="text-xs font-bold text-orange-600">
              02.01
            </span>

            <h2 className="text-2xl font-black sm:text-3xl">
              قبل از احتمال، نتیجه‌ها را مشخص کنیم
            </h2>
          </div>

          <p className="text-[15px] leading-9 text-neutral-600">
            یک آزمایش تصادفی را در نظر بگیر. نتیجه آن را نمی‌توانیم
            با قطعیت از قبل پیش‌بینی کنیم، اما معمولاً می‌توانیم
            مجموعه تمام نتایج ممکن را مشخص کنیم.
          </p>

          <p className="mt-5 text-[15px] leading-9 text-neutral-600">
            این مجموعه را
            <strong className="mx-1 text-neutral-900">
              فضای نمونه
            </strong>
            می‌نامیم و با
            <InlineMath math="S" />
            نشان می‌دهیم.
          </p>

          <Formula>
            S = \{\text{تمام نتایج ممکن آزمایش}\}
          </Formula>
        </section>

        {/* Sample space */}
        <section className="mt-20">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-xs font-bold text-orange-600">
              02.02
            </span>

            <h2 className="text-2xl font-black sm:text-3xl">
              فضای نمونه چیست؟
            </h2>
          </div>

          <p className="text-[15px] leading-9 text-neutral-600">
            فضای نمونه باید به اندازه‌ای دقیق تعریف شود که هر نتیجه
            ممکن آزمایش در آن قرار بگیرد. بسته به نوع آزمایش،
            این مجموعه می‌تواند چند عضو محدود یا حتی بی‌نهایت عضو
            داشته باشد.
          </p>

          <Example number={1} title="تعیین جنسیت نوزاد">
            <p>
              اگر تنها نتیجه موردنظر جنسیت نوزاد باشد، می‌توانیم
              فضای نمونه را به شکل زیر تعریف کنیم:
            </p>

            <Formula>
              S = \{g,b\}
            </Formula>

            <p>
              که در آن
              <InlineMath math="g" />
              نشان‌دهنده دختر و
              <InlineMath math="b" />
              نشان‌دهنده پسر است.
            </p>
          </Example>

          <Example number={2} title="ترتیب پایان یک مسابقه">
            <p>
              فرض کن ۷ اسب در یک مسابقه شرکت کرده‌اند و می‌خواهیم
              ترتیب کامل پایان مسابقه را ثبت کنیم.
            </p>

            <p className="mt-4">
              هر نتیجه یک جایگشت از اعداد ۱ تا ۷ است. بنابراین تعداد
              نتایج ممکن برابر است با:
            </p>

            <Formula>
              |S| = 7! = 5040
            </Formula>

            <p>
              برای مثال نتیجه
              <span dir="ltr" className="mx-1">
                (2,3,1,6,5,4,7)
              </span>
              یعنی اسب شماره ۲ اول، اسب شماره ۳ دوم و اسب شماره ۱
              سوم شده است و به همین ترتیب.
            </p>
          </Example>

          <Example number={3} title="پرتاب دو سکه">
            <p>
              اگر دو سکه را پرتاب کنیم، برای هر سکه دو نتیجه ممکن
              داریم: شیر یا خط.
            </p>

            <Formula>
              S = \{(H,H),(H,T),(T,H),(T,T)\}
            </Formula>

            <p>
              بنابراین فضای نمونه چهار عضو دارد.
            </p>
          </Example>

          <Example number={4} title="پرتاب دو تاس">
            <p>
              برای هر تاس ۶ نتیجه ممکن وجود دارد. چون نتیجه دو تاس
              را با یک زوج مرتب نمایش می‌دهیم:
            </p>

            <Formula>
              S = \{(i,j): i,j \in \{1,2,3,4,5,6\}\}
            </Formula>

            <p>
              در نتیجه تعداد نقاط فضای نمونه برابر است با:
            </p>

            <Formula>
              |S| = 6 \times 6 = 36
            </Formula>
          </Example>

          <Example number={5} title="طول عمر یک قطعه">
            <p>
              فرض کن طول عمر یک ترانزیستور را بر حسب ساعت اندازه
              می‌گیریم. در این حالت نتیجه یک عدد حقیقی نامنفی است.
            </p>

            <Formula>
              S = \{x \in \mathbb{R}: x \geq 0\}
            </Formula>

            <p>
              این مثال نشان می‌دهد که فضای نمونه الزاماً یک مجموعه
              متناهی نیست.
            </p>
          </Example>
        </section>

        {/* Event */}
        <section className="mt-20">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-xs font-bold text-orange-600">
              02.03
            </span>

            <h2 className="text-2xl font-black sm:text-3xl">
              پیشامد چیست؟
            </h2>
          </div>

          <p className="text-[15px] leading-9 text-neutral-600">
            هر زیرمجموعه‌ای از فضای نمونه را یک
            <strong className="mx-1 text-neutral-900">
              پیشامد
            </strong>
            یا Event می‌نامیم.
          </p>

          <Formula>
            E \subseteq S
          </Formula>

          <p className="text-[15px] leading-9 text-neutral-600">
            اگر نتیجه آزمایش در مجموعه
            <InlineMath math="E" />
            قرار بگیرد، می‌گوییم پیشامد
            <InlineMath math="E" />
            رخ داده است.
          </p>

          <Example number={6} title="پیشامد در پرتاب دو سکه">
            <p>
              در آزمایش پرتاب دو سکه، پیشامد «در سکه اول شیر ظاهر
              شود» برابر است با:
            </p>

            <Formula>
              E = \{(H,H),(H,T)\}
            </Formula>
          </Example>

          <Example number={7} title="جمع دو تاس برابر ۷">
            <p>
              اگر دو تاس پرتاب کنیم، پیشامد اینکه مجموع دو تاس برابر
              ۷ باشد:
            </p>

            <Formula>
              E = \{(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)\}
            </Formula>
          </Example>
        </section>

        {/* Set operations */}
        <section className="mt-20">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-xs font-bold text-orange-600">
              02.04
            </span>

            <h2 className="text-2xl font-black sm:text-3xl">
              عملیات روی پیشامدها
            </h2>
          </div>

          <p className="text-[15px] leading-9 text-neutral-600">
            چون پیشامدها مجموعه‌ای از نتایج هستند، می‌توانیم روی
            آنها همان عملیات اصلی نظریه مجموعه‌ها را انجام دهیم.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Concept title="اجتماع" symbol="E \cup F">
              <p>
                اجتماع دو پیشامد شامل تمام نتایجی است که حداقل در
                یکی از دو پیشامد قرار دارند.
              </p>

              <Formula>
                E \cup F = \{x : x \in E \text{ or } x \in F\}
              </Formula>
            </Concept>

            <Concept title="اشتراک" symbol="E \cap F">
              <p>
                اشتراک شامل نتایجی است که همزمان در هر دو پیشامد
                قرار دارند.
              </p>

              <Formula>
                E \cap F = \{x : x \in E \text{ and } x \in F\}
              </Formula>
            </Concept>

            <Concept title="متمم" symbol="E^c">
              <p>
                متمم
                <InlineMath math="E" />
                شامل تمام نتایج فضای نمونه است که در
                <InlineMath math="E" />
                قرار ندارند.
              </p>

              <Formula>
                E^c = S \setminus E
              </Formula>
            </Concept>

            <Concept title="مجموعه تهی" symbol="\varnothing">
              <p>
                مجموعه تهی هیچ نتیجه‌ای ندارد. اگر دو پیشامد هیچ
                نتیجه مشترکی نداشته باشند، اشتراک آنها مجموعه تهی
                است.
              </p>

              <Formula>
                E \cap F = \varnothing
              </Formula>
            </Concept>
          </div>
        </section>

        {/* Figure 2.1 */}
        <figure className="my-14 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
          <img
            src={`${BASE_PATH}/images/figure-2-1-and-2-2.jpg`}
            alt="نمودارهای ون برای اجتماع، اشتراک، متمم و زیرمجموعه"
            className="h-auto w-full"
          />

          <figcaption className="border-t border-neutral-200 px-5 py-4 text-center text-xs text-neutral-400">
            نمودار ون برای نمایش عملیات روی پیشامدها
          </figcaption>
        </figure>

        {/* Mutually exclusive */}
        <section className="mt-20">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-xs font-bold text-orange-600">
              02.05
            </span>

            <h2 className="text-2xl font-black sm:text-3xl">
              پیشامدهای ناسازگار
            </h2>
          </div>

          <p className="text-[15px] leading-9 text-neutral-600">
            اگر دو پیشامد هیچ نتیجه مشترکی نداشته باشند، نمی‌توانند
            به صورت همزمان رخ دهند. به این دو پیشامد
            <strong className="mx-1 text-neutral-900">
              ناسازگار
            </strong>
            یا Mutually Exclusive می‌گوییم.
          </p>

          <Formula>
            E \cap F = \varnothing
          </Formula>

          <Example number={8} title="جمع ۶ و جمع ۷">
            <p>
              در پرتاب دو تاس، پیشامد جمع برابر ۷ و پیشامد جمع برابر
              ۶ را در نظر بگیر.
            </p>

            <Formula>
              E = \{(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)\}
            </Formula>

            <Formula>
              F = \{(1,5),(2,4),(3,3),(4,2),(5,1)\}
            </Formula>

            <p>
              هیچ زوج مرتبی در هر دو مجموعه وجود ندارد؛ بنابراین:
            </p>

            <Formula>
              E \cap F = \varnothing
            </Formula>
          </Example>
        </section>

        {/* Multiple events */}
        <section className="mt-20">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-xs font-bold text-orange-600">
              02.06
            </span>

            <h2 className="text-2xl font-black sm:text-3xl">
              اجتماع و اشتراک چند پیشامد
            </h2>
          </div>

          <p className="text-[15px] leading-9 text-neutral-600">
            عملیات اجتماع و اشتراک فقط به دو پیشامد محدود نیستند.
            اگر مجموعه‌ای از پیشامدها داشته باشیم، می‌توانیم همه
            آنها را در یک اجتماع یا اشتراک قرار دهیم.
          </p>

          <Formula>
            \bigcup_{i=1}^{n} E_i
          </Formula>

          <p className="text-[15px] leading-9 text-neutral-600">
            این عبارت شامل تمام نتایجی است که حداقل در یکی از
            پیشامدهای
            <InlineMath math="E_1,\ldots,E_n" />
            قرار دارند.
          </p>

          <Formula>
            \bigcap_{i=1}^{n} E_i
          </Formula>

          <p className="text-[15px] leading-9 text-neutral-600">
            در مقابل، اشتراک شامل نتایجی است که در تمام این
            پیشامدها قرار دارند.
          </p>
        </section>

        {/* Complement */}
        <section className="mt-20">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-xs font-bold text-orange-600">
              02.07
            </span>

            <h2 className="text-2xl font-black sm:text-3xl">
              متمم یک پیشامد
            </h2>
          </div>

          <p className="text-[15px] leading-9 text-neutral-600">
            متمم پیشامد
            <InlineMath math="E" />
            شامل تمام نتایجی است که در فضای نمونه وجود دارند اما
            در
            <InlineMath math="E" />
            نیستند.
          </p>

          <Formula>
            E^c = \{x \in S : x \notin E\}
          </Formula>

          <Example number={9} title="متمم جمع ۷">
            <p>
              اگر
              <InlineMath math="E" />
              رویداد «جمع دو تاس برابر ۷ است» باشد، آنگاه
              <InlineMath math="E^c" />
              رویداد «جمع دو تاس برابر ۷ نیست» خواهد بود.
            </p>

            <Formula>
              E^c = \{(i,j)\in S : i+j \neq 7\}
            </Formula>
          </Example>

          <div className="rounded-2xl border border-orange-100 bg-orange-50 p-6">
            <p className="text-sm leading-8 text-neutral-700">
              چون آزمایش باید حتماً یک نتیجه داشته باشد، هیچ نتیجه‌ای
              نمی‌تواند خارج از فضای نمونه باشد. بنابراین متمم فضای
              نمونه مجموعه تهی است:
            </p>

            <Formula>
              S^c = \varnothing
            </Formula>
          </div>
        </section>

        {/* Subset */}
        <section className="mt-20">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-xs font-bold text-orange-600">
              02.08
            </span>

            <h2 className="text-2xl font-black sm:text-3xl">
              رابطه زیرمجموعه بودن
            </h2>
          </div>

          <p className="text-[15px] leading-9 text-neutral-600">
            اگر تمام نتایج موجود در پیشامد
            <InlineMath math="E" />
            در پیشامد
            <InlineMath math="F" />
            نیز وجود داشته باشند، می‌گوییم
            <InlineMath math="E" />
            زیرمجموعه
            <InlineMath math="F" />
            است.
          </p>

          <Formula>
            E \subseteq F
          </Formula>

          <p className="text-[15px] leading-9 text-neutral-600">
            این رابطه یک تفسیر احتمالی مهم هم دارد: اگر
            <InlineMath math="E" />
            رخ دهد، رخ دادن
            <InlineMath math="F" />
            نیز قطعی است.
          </p>

          <Formula>
            E \subseteq F
            \quad \Longrightarrow \quad
            E \text{ occurs } \Rightarrow F \text{ occurs}
          </Formula>

          <p className="mt-6 text-[15px] leading-9 text-neutral-600">
            اگر هر دو رابطه برقرار باشند:
          </p>

          <Formula>
            E \subseteq F
            \quad \text{and} \quad
            F \subseteq E
            \quad \Longrightarrow \quad
            E = F
          </Formula>
        </section>

        {/* Figure 2.2 */}
        <figure className="my-14 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
          <img
            src={`${BASE_PATH}/images/figure-2-1-and-2-2.jpg`}
            alt="نمودار ون رابطه زیرمجموعه بودن E و F"
            className="h-auto w-full"
          />

          <figcaption className="border-t border-neutral-200 px-5 py-4 text-center text-xs text-neutral-400">
            نمایش رابطه زیرمجموعه بودن با نمودار ون
          </figcaption>
        </figure>

        {/* Venn */}
        <section className="mt-20">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-xs font-bold text-orange-600">
              02.09
            </span>

            <h2 className="text-2xl font-black sm:text-3xl">
              نمودار ون
            </h2>
          </div>

          <p className="text-[15px] leading-9 text-neutral-600">
            برای دیدن رابطه بین پیشامدها، می‌توانیم فضای نمونه را
            به شکل یک مستطیل و هر پیشامد را به شکل یک ناحیه درون آن
            نمایش دهیم. این نمایش را نمودار ون می‌نامیم.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Concept title="اجتماع" symbol="E \cup F">
              ناحیه‌ای که حداقل به یکی از دو مجموعه تعلق دارد.
            </Concept>

            <Concept title="اشتراک" symbol="E \cap F">
              ناحیه مشترک بین دو پیشامد.
            </Concept>

            <Concept title="متمم" symbol="E^c">
              تمام فضای نمونه به جز خود پیشامد.
            </Concept>
          </div>
        </section>

        {/* Algebra */}
        <section className="mt-20">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-xs font-bold text-orange-600">
              02.10
            </span>

            <h2 className="text-2xl font-black sm:text-3xl">
              قوانین جبر مجموعه‌ها
            </h2>
          </div>

          <p className="text-[15px] leading-9 text-neutral-600">
            اجتماع، اشتراک و متمم از قوانین مشابه جبر معمولی
            پیروی می‌کنند. دانستن این روابط بعداً هنگام ساده‌سازی
            عبارت‌های احتمالی بسیار مفید خواهد بود.
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-neutral-200 p-6">
              <h3 className="font-bold">قوانین جابجایی</h3>

              <Formula>
                E \cup F = F \cup E
              </Formula>

              <Formula>
                E \cap F = F \cap E
              </Formula>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-6">
              <h3 className="font-bold">قوانین شرکت‌پذیری</h3>

              <Formula>
                (E \cup F)\cup G = E\cup(F\cup G)
              </Formula>

              <Formula>
                (E\cap F)\cap G = E\cap(F\cap G)
              </Formula>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-6">
              <h3 className="font-bold">قوانین توزیع‌پذیری</h3>

              <Formula>
                (E\cup F)\cap G = (E\cap G)\cup(F\cap G)
              </Formula>

              <Formula>
                (E\cap F)\cup G = (E\cup G)\cap(F\cup G)
              </Formula>
            </div>
          </div>
        </section>

        {/* Figure 2.3 */}
        <figure className="my-14 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
          <img
            src={`${BASE_PATH}/images/figure-2-3.jpg`}
            alt="نمودار ون برای بررسی قانون توزیع‌پذیری"
            className="h-auto w-full"
          />

          <figcaption className="border-t border-neutral-200 px-5 py-4 text-center text-xs text-neutral-400">
            بررسی یک قانون توزیع‌پذیری با نمودار ون
          </figcaption>
        </figure>

        {/* DeMorgan */}
        <section className="mt-20">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-xs font-bold text-orange-600">
              02.11
            </span>

            <h2 className="text-2xl font-black sm:text-3xl">
              قوانین دمورگان
            </h2>
          </div>

          <p className="text-[15px] leading-9 text-neutral-600">
            دو رابطه بسیار مهم بین اجتماع، اشتراک و متمم وجود دارد
            که به قوانین دمورگان معروف‌اند.
          </p>

          <Formula>
            \left(\bigcup_{i=1}^{n}E_i\right)^c
            =
            \bigcap_{i=1}^{n}E_i^c
          </Formula>

          <Formula>
            \left(\bigcap_{i=1}^{n}E_i\right)^c
            =
            \bigcup_{i=1}^{n}E_i^c
          </Formula>

          <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <h3 className="font-bold">
              چطور آنها را به خاطر بسپاریم؟
            </h3>

            <p className="mt-4 text-sm leading-8 text-neutral-600">
              وقتی متمم وارد پرانتز یک اجتماع می‌شود، اجتماع به
              اشتراک تبدیل می‌شود و متمم روی تک‌تک مجموعه‌ها اعمال
              می‌شود. همین اتفاق برای اشتراک هم برعکس رخ می‌دهد.
            </p>
          </div>
        </section>

        {/* Figure DeMorgan */}
        <figure className="my-14 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
          <img
            src={`${BASE_PATH}/images/demorgans-laws.jpg`}
            alt="روابط متمم اجتماع و اشتراک بر اساس قوانین دمورگان"
            className="mx-auto h-auto max-w-full"
          />

          <figcaption className="border-t border-neutral-200 px-5 py-4 text-center text-xs text-neutral-400">
            قوانین دمورگان
          </figcaption>
        </figure>

        {/* Quick check */}
        <section className="mt-20">
          <div className="rounded-3xl bg-black p-7 text-white sm:p-10">
            <span className="text-xs text-neutral-500">
              بررسی سریع
            </span>

            <h2 className="mt-4 text-2xl font-black">
              قبل از رفتن به درس بعدی
            </h2>

            <p className="mt-4 text-sm leading-8 text-neutral-400">
              اگر دو تاس پرتاب کنیم و
              <InlineMath math="E" />
              رویداد «جمع دو تاس حداقل ۱۰ است» باشد، کدام عبارت
              رویداد متمم را بهتر توصیف می‌کند؟
            </p>

            <details className="mt-7 rounded-2xl border border-neutral-800">
              <summary className="cursor-pointer list-none px-5 py-4 text-sm font-medium">
                نمایش پاسخ
              </summary>

              <div className="border-t border-neutral-800 px-5 py-5">
                <p className="text-sm leading-8 text-neutral-300">
                  متمم
                  <InlineMath math="E^c" />
                  یعنی «جمع دو تاس کمتر از ۱۰ است».
                </p>

                <Formula>
                  E^c = \{(i,j): i+j < 10\}
                </Formula>
              </div>
            </details>
          </div>
        </section>
      </article>

      {/* Navigation */}
      <section className="border-t border-neutral-100 bg-neutral-50">
        <div className="mx-auto flex max-w-[900px] flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/learn/engineering-probability/axioms-of-probability/introduction"
            className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-5 py-4 text-sm text-neutral-600 transition hover:border-neutral-400 hover:text-black"
          >
            <span>←</span>
            درس قبل
          </Link>

          <Link
            href="/learn/engineering-probability/axioms-of-probability/probability-axioms"
            className="flex items-center gap-3 rounded-xl bg-black px-5 py-4 text-sm font-bold !text-white transition hover:bg-neutral-800"
          >
            درس بعد
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