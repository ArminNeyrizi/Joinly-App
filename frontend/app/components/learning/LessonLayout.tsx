import type { ReactNode } from "react";
import LearningHeader from "./LearningHeader";
import LearningFooter from "./LearningFooter";
import LessonSidebar from "./LessonSidebar";

type LessonLayoutProps = {
  children: ReactNode;
  courseTitle: string;
  chapterTitle: string;
  lessonNumber: number;
  totalLessons: number;
  lessons: {
    title: string;
    href: string;
  }[];
};

export default function LessonLayout({
  children,
  courseTitle,
  chapterTitle,
  lessonNumber,
  totalLessons,
  lessons,
}: LessonLayoutProps) {
  const progress = (lessonNumber / totalLessons) * 100;

  return (
    <main dir="rtl" className="min-h-screen bg-white text-neutral-950">
      <LearningHeader />

      <div className="border-b border-neutral-100">
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center gap-2 px-6 py-4 text-xs text-neutral-400">
          <a href="/" className="hover:text-black">
            خانه
          </a>

          <span>/</span>

          <a href="/learn" className="hover:text-black">
            یادگیری
          </a>

          <span>/</span>

          <a
            href="/learn/engineering-probability"
            className="hover:text-black"
          >
            {courseTitle}
          </a>

          <span>/</span>

          <span className="text-neutral-700">
            {chapterTitle}
          </span>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1100px] gap-12 px-6 py-14 lg:grid-cols-[1fr_250px]">
        <article className="min-w-0">
          {children}
        </article>

        <LessonSidebar
          courseTitle={courseTitle}
          chapterTitle={chapterTitle}
          lessonNumber={lessonNumber}
          totalLessons={totalLessons}
          lessons={lessons}
          progress={progress}
        />
      </div>

      <LearningFooter />
    </main>
  );
}