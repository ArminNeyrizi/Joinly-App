import type { Metadata } from "next";
import Link from "next/link";
import LessonLayout from "@/app/components/learning/LessonLayout";

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

export const metadata: Metadata = {
  title: "قضیه بیز | آمار و احتمال مهندسی | Joinly",
  description:
    "آموزش قضیه بیز با توضیح مفهومی، فرمول، مثال مهندسی و تمرین.",
};

const lessons = [
  {
    title: "احتمال چیست؟",
    href: "/learn/statistics-probability/basics-of-probability",
  },
  {
    title: "احتمال شرطی و استقلال",
    href: "/learn/statistics-probability/conditional-probability",
  },
  {
    title: "قضیه بیز",
    href: "/learn/statistics-probability/bayes-theorem",
  },
];

export default function BayesTheoremPage() {
  return (
    <LessonLayout
      courseTitle="آمار و احتمال مهندسی"
      chapterTitle="فصل ۱: مبانی احتمال"
      lessonNumber={3}
      totalLessons={5}
      lessons={lessons}
    >
      <div className="mb-5 text-sm font-medium text-orange-600">
        فصل ۱ · مبانی احتمال
      </div>

      <h1 className="text-4xl font-black leading-[1.4] tracking-tight sm:text-5xl">
        قضیه بیز
      </h1>

      <p className="mt-6 max-w-[760px] text-[16px] leading-8 text-neutral-500">
        چطور وقتی یک نتیجه را مشاهده کرده‌ایم، درباره علت احتمالی
        آن نتیجه فکر کنیم؟ قضیه بیز دقیقاً برای همین مسئله است.
      </p>

      <div className="mt-8 flex flex-wrap gap-3 text-xs text-neutral-500">
        <span className="rounded-full border border-neutral-200 px-4 py-2">
          ۲۰ دقیقه مطالعه
        </span>

        <span className="rounded-full border border-neutral-200 px-4 py-2">
          مقدماتی
        </span>

        <span className="rounded-full border border-neutral-200 px-4 py-2">
          مثال + تمرین
        </span>
      </div>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">
          ایده اصلی قضیه بیز
        </h2>

        <p className="mt-5 text-[16px] leading-9 text-neutral-600">
          فرض کنید یک اتفاق را مشاهده کرده‌ایم و می‌خواهیم بفهمیم
          چه علتی احتمال بیشتری دارد که باعث آن اتفاق شده باشد.
        </p>

        <p className="mt-5 text-[16px] leading-9 text-neutral-600">
          مثلاً می‌دانیم یک قطعه خراب است و می‌خواهیم احتمال بدهیم
          این قطعه از کدام خط تولید آمده است.
        </p>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">
          فرمول بیز
        </h2>

        <div className="my-8 rounded-2xl bg-neutral-950 p-8 text-center text-white">
          <div dir="ltr" className="text-3xl font-bold">
            P(A | B) = P(B | A) P(A) / P(B)
          </div>
        </div>

        <p className="text-[16px] leading-9 text-neutral-600">
          این فرمول به ما اجازه می‌دهد احتمال یک علت را با توجه
          به مشاهده یک نتیجه محاسبه کنیم.
        </p>
      </section>

      <section className="mt-14">
        <div className="mb-5 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-xs font-bold text-orange-700">
            مثال
          </span>

          <h2 className="text-2xl font-bold">
            مثال دو خط تولید
          </h2>
        </div>

        <p className="text-[16px] leading-9 text-neutral-600">
          کارخانه‌ای دو خط تولید A و B دارد. خط A، شصت درصد تولید
          و خط B، چهل درصد تولید را انجام می‌دهد.
        </p>

        <div className="my-7 overflow-hidden rounded-2xl border border-neutral-200">
          <div className="grid grid-cols-3 bg-neutral-50 p-4 text-sm font-bold">
            <span>خط</span>
            <span>سهم تولید</span>
            <span>نرخ خرابی</span>
          </div>

          <div className="grid grid-cols-3 border-t border-neutral-100 p-4 text-sm">
            <span>A</span>
            <span>۶۰٪</span>
            <span>۲٪</span>
          </div>

          <div className="grid grid-cols-3 border-t border-neutral-100 p-4 text-sm">
            <span>B</span>
            <span>۴۰٪</span>
            <span>۵٪</span>
          </div>
        </div>

        <p className="text-[16px] leading-9 text-neutral-600">
          حالا یک قطعه خراب پیدا کرده‌ایم. می‌خواهیم بدانیم احتمال
          اینکه این قطعه از خط B آمده باشد چقدر است.
        </p>

        <div className="my-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 text-center">
          <div dir="ltr" className="text-2xl font-bold">
            P(B | D)
          </div>

          <p className="mt-3 text-sm text-neutral-500">
            D یعنی قطعه معیوب است.
          </p>
        </div>

        <div className="rounded-2xl border-r-4 border-black bg-neutral-50 p-7">
          <h3 className="font-bold">
            حالا بیز وارد می‌شود
          </h3>

          <div dir="ltr" className="mt-5 text-center text-xl font-bold">
            P(B | D) = P(D | B)P(B) / P(D)
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">
          حل کامل مثال
        </h2>

        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-neutral-200 p-5">
            <span className="text-xs text-neutral-400">
              مرحله ۱
            </span>

            <p className="mt-2 font-medium">
              احتمال انتخاب محصول از خط B:
            </p>

            <div dir="ltr" className="mt-3 font-bold">
              P(B) = 0.40
            </div>
          </div>

          <div className="rounded-xl border border-neutral-200 p-5">
            <span className="text-xs text-neutral-400">
              مرحله ۲
            </span>

            <p className="mt-2 font-medium">
              احتمال خرابی در خط B:
            </p>

            <div dir="ltr" className="mt-3 font-bold">
              P(D | B) = 0.05
            </div>
          </div>

          <div className="rounded-xl border border-neutral-200 p-5">
            <span className="text-xs text-neutral-400">
              مرحله ۳
            </span>

            <p className="mt-2 font-medium">
              احتمال خرابی کل کارخانه:
            </p>

            <div dir="ltr" className="mt-3 font-bold">
              P(D) = (0.02)(0.60) + (0.05)(0.40)
            </div>

            <div dir="ltr" className="mt-3 font-bold">
              P(D) = 0.032
            </div>
          </div>
        </div>

        <div className="my-8 rounded-2xl bg-black p-8 text-center text-white">
          <p className="text-sm text-neutral-400">
            پاسخ نهایی
          </p>

          <div dir="ltr" className="mt-4 text-3xl font-black">
            P(B | D) = 0.625
          </div>

          <p className="mt-4 text-sm text-neutral-400">
            یعنی احتمال اینکه قطعه معیوب از خط B آمده باشد، ۶۲٫۵٪ است.
          </p>
        </div>
      </section>

      <section className="mt-14 rounded-2xl border-r-4 border-orange-500 bg-orange-50 p-7">
        <h3 className="font-bold">
          نکته‌ای که باید یاد بگیری
        </h3>

        <p className="mt-3 text-sm leading-8 text-neutral-700">
          P(B | D) و P(D | B) یکی نیستند. این یکی از رایج‌ترین
          اشتباهات در مسائل احتمال شرطی و بیز است.
        </p>
      </section>

      <section className="mt-14 rounded-2xl border border-neutral-200 p-7">
        <h2 className="text-xl font-bold">
          تمرین
        </h2>

        <p className="mt-5 text-[16px] leading-8 text-neutral-600">
          در یک کارخانه، ۷۰٪ محصولات از خط A و ۳۰٪ از خط B تولید
          می‌شوند. نرخ خرابی خط A برابر ۱٪ و نرخ خرابی خط B برابر
          ۴٪ است. اگر یک محصول معیوب انتخاب کنیم، احتمال اینکه
          محصول از خط B آمده باشد چقدر است؟
        </p>

        <details className="mt-6 rounded-xl border border-neutral-200">
          <summary className="cursor-pointer list-none p-5 text-sm font-medium">
            راهنمای حل
          </summary>

          <div className="border-t border-neutral-100 p-5 text-sm leading-8 text-neutral-500">
            ابتدا P(D) را با قانون احتمال کل به دست بیاورید،
            سپس از فرمول بیز استفاده کنید.
          </div>
        </details>
      </section>

      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        <Link
          href="/learn/statistics-probability/conditional-probability"
          className="rounded-2xl border border-neutral-200 p-6 hover:bg-neutral-50"
        >
          <span className="text-xs text-neutral-400">
            درس قبل
          </span>

          <div className="mt-3 flex items-center gap-3 text-sm font-bold">
            <ArrowLeft />
            احتمال شرطی و استقلال
          </div>
        </Link>

        <Link
          href="/learn/statistics-probability/random-variables"
          className="rounded-2xl bg-black p-6 !text-white hover:bg-neutral-800"
        >
          <span className="text-xs text-neutral-400">
            درس بعدی
          </span>

          <div className="mt-3 flex items-center justify-between text-sm font-bold">
            متغیرهای تصادفی
            <ArrowRight />
          </div>
        </Link>
      </div>
    </LessonLayout>
  );
}