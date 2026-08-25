import Link from "next/link";

export default function LearningFooter() {
  return (
    <footer className="border-t border-neutral-100">
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
  );
}