import Link from "next/link";

export default function LearningHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[74px] max-w-[1280px] items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="text-[25px] font-black tracking-[-1.5px]"
        >
          JOINLY<span className="text-orange-500">.</span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          <Link href="/learn" className="text-sm hover:text-orange-600">
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
          className="rounded-lg bg-black px-5 py-3 text-xs font-medium !text-white hover:bg-neutral-800"
        >
          ورود / ثبت‌نام
        </Link>
      </div>
    </header>
  );
}