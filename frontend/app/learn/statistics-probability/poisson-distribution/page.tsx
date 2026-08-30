import LessonLayout from "@/app/components/learning/LessonLayout";
import { BlockMath, InlineMath } from "react-katex";

import "katex/dist/katex.min.css";

const lessons = [
  {
    title: "مبانی احتمال",
    href: "/learn/statistics-probability/basics-of-probability",
  },
  {
    title: "احتمال شرطی",
    href: "/learn/statistics-probability/conditional-probability",
  },
  {
    title: "قضیه بیز",
    href: "/learn/statistics-probability/bayes-theorem",
  },
  {
    title: "توزیع پواسون",
    href: "/learn/statistics-probability/poisson-distribution",
  },
];

export default function PoissonDistributionPage() {
  return (
    <LessonLayout
      courseTitle="آمار و احتمال"
      chapterTitle="توزیع پواسون"
      lessonNumber={4}
      totalLessons={4}
      lessons={lessons}
    >
      <article dir="rtl">
        <h1 className="text-3xl font-bold tracking-tight">
          توزیع پواسون
        </h1>

        <p className="mt-4 leading-8 text-neutral-600">
          توزیع <strong>پواسون (Poisson)</strong> برای زمانی استفاده می‌شود
          که بخواهیم بدانیم در یک بازهٔ مشخص، یک اتفاق چند بار رخ می‌دهد.
        </p>

        {/* تعریف */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            توزیع پواسون چیست؟
          </h2>

          <p className="mt-4 leading-8">
            توزیع <strong>پواسون (Poisson)</strong> زمانی استفاده می‌شود
            که بخواهیم بدانیم:
          </p>

          <blockquote className="mt-5 border-r-4 border-black bg-neutral-50 px-5 py-4 leading-8">
            «در یک بازهٔ مشخص، یک اتفاق چند بار رخ می‌دهد؟»
          </blockquote>

          <p className="mt-5 leading-8">
            مثلاً:
          </p>

          <ul className="mt-3 space-y-2 pr-6 leading-8">
            <li>در یک ساعت چند مشتری وارد فروشگاه می‌شوند؟</li>
            <li>در یک روز چند تماس با شرکت می‌گیریم؟</li>
            <li>در یک کیلومتر جاده چند تصادف رخ می‌دهد؟</li>
            <li>در یک صفحه چند خطای چاپ وجود دارد؟</li>
          </ul>

          <p className="mt-5 leading-8">
            فرض اصلی این است که{" "}
            <strong>میانگین وقوع اتفاق را می‌دانیم</strong> و می‌خواهیم
            احتمال رخ‌دادن تعداد مشخصی از آن اتفاق را حساب کنیم.
          </p>
        </section>

        {/* مثال */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            مثال ساده
          </h2>

          <p className="mt-4 leading-8">
            فرض کن به‌طور میانگین در هر ساعت{" "}
            <strong>۳ مشتری</strong> وارد دفتر می‌شوند.
          </p>

          <p className="mt-5 leading-8">
            بنابراین:
          </p>

          <div dir="ltr" className="my-6 text-center text-xl">
            <BlockMath math="\lambda = 3" />
          </div>

          <p className="leading-8">
            حالا می‌پرسیم:
          </p>

          <p className="mt-2 leading-8">
            احتمال اینکه در یک ساعت دقیقاً{" "}
            <strong>۵ مشتری</strong> وارد شوند چقدر است؟
          </p>
        </section>

        {/* فرمول */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            فرمول توزیع پواسون
          </h2>

          <p className="mt-4 leading-8">
            فرمول احتمال وقوع دقیقاً{" "}
            <InlineMath math="k" /> اتفاق به شکل زیر است:
          </p>

          <div dir="ltr" className="my-8 overflow-x-auto text-center">
            <BlockMath math="P(X = k) = \frac{e^{-\lambda}\lambda^k}{k!}" />
          </div>

          <p className="leading-8">
            در این فرمول:
          </p>

          <ul className="mt-3 space-y-2 pr-6 leading-8">
            <li>
              <InlineMath math="\lambda" /> میانگین تعداد اتفاق‌ها در بازه
              موردنظر است.
            </li>

            <li>
              <InlineMath math="k" /> تعداد اتفاق‌هایی است که می‌خواهیم
              احتمال آن را محاسبه کنیم.
            </li>

            <li>
              <InlineMath math="e" /> عدد نپر است.
            </li>

            <li>
              <InlineMath math="k!" /> فاکتوریل عدد <InlineMath math="k" /> است.
            </li>
          </ul>
        </section>

        {/* حل مثال */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            حل مثال
          </h2>

          <p className="mt-4 leading-8">
            در مثال ما میانگین ورود مشتری‌ها در هر ساعت ۳ نفر است و می‌خواهیم
            احتمال ورود دقیقاً ۵ مشتری را محاسبه کنیم.
          </p>

          <p className="mt-5 leading-8">
            بنابراین:
          </p>

          <div dir="ltr" className="my-6 overflow-x-auto text-center">
            <BlockMath math="\lambda = 3 \qquad k = 5" />
          </div>

          <p className="leading-8">
            حالا این مقادیر را در فرمول قرار می‌دهیم:
          </p>

          <div dir="ltr" className="my-8 overflow-x-auto text-center">
            <BlockMath math="P(X = 5) = \frac{e^{-3}3^5}{5!}" />
          </div>

          <p className="leading-8">
            نتیجه تقریباً برابر است با:
          </p>

          <div dir="ltr" className="my-8 overflow-x-auto text-center">
            <BlockMath math="P(X = 5) \approx 0.1008" />
          </div>

          <p className="leading-8">
            یعنی حدود <strong>۱۰٪ احتمال</strong> دارد که در یک ساعت دقیقاً
            ۵ مشتری وارد شوند.
          </p>
        </section>

        {/* λ */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            λ چه معنایی دارد؟
          </h2>

          <p className="mt-4 leading-8">
            در پواسون،{" "}
            <strong>
              <InlineMath math="\lambda" /> همان میانگین تعداد اتفاق‌ها در
              آن بازه است.
            </strong>
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="px-4 py-3 text-right font-semibold">
                    λ
                  </th>

                  <th className="px-4 py-3 text-right font-semibold">
                    معنی
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-neutral-100">
                  <td dir="ltr" className="px-4 py-3">
                    <InlineMath math="2" />
                  </td>

                  <td className="px-4 py-3">
                    میانگین ۲ اتفاق در ساعت
                  </td>
                </tr>

                <tr className="border-b border-neutral-100">
                  <td dir="ltr" className="px-4 py-3">
                    <InlineMath math="5" />
                  </td>

                  <td className="px-4 py-3">
                    میانگین ۵ اتفاق در ساعت
                  </td>
                </tr>

                <tr>
                  <td dir="ltr" className="px-4 py-3">
                    <InlineMath math="10" />
                  </td>

                  <td className="px-4 py-3">
                    میانگین ۱۰ اتفاق در ساعت
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* تغییر بازه */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            اگر بازه را تغییر دهیم چه می‌شود؟
          </h2>

          <p className="mt-4 leading-8">
            اگر بازه را عوض کنیم، <InlineMath math="\lambda" /> هم متناسب با
            آن عوض می‌شود.
          </p>

          <p className="mt-5 leading-8">
            مثلاً اگر میانگین <strong>۳ مشتری در ساعت</strong> باشد، در ۲
            ساعت میانگین تعداد مشتری‌ها برابر است با:
          </p>

          <div dir="ltr" className="my-8 overflow-x-auto text-center">
            <BlockMath math="\lambda = 3 \times 2 = 6" />
          </div>
        </section>

        {/* نکته */}
        <section className="mt-12">
          <div className="border-r-4 border-black bg-neutral-50 px-6 py-5">
            <h3 className="font-bold">
              نکته
            </h3>

            <p className="mt-2 leading-8">
              در توزیع پواسون، <InlineMath math="\lambda" /> میانگین تعداد
              اتفاق‌ها در بازه موردنظر است. با داشتن{" "}
              <InlineMath math="\lambda" /> می‌توانیم احتمال وقوع تعداد
              مشخصی از اتفاق‌ها را محاسبه کنیم.
            </p>
          </div>
        </section>
      </article>
    </LessonLayout>
  );
}