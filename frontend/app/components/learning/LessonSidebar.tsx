import Link from "next/link";

type LessonSidebarProps = {
  courseTitle: string;
  chapterTitle: string;
  lessonNumber: number;
  totalLessons: number;
  progress: number;
  lessons: {
    title: string;
    href: string;
  }[];
};

export default function LessonSidebar({
  courseTitle,
  chapterTitle,
  lessonNumber,
  totalLessons,
  progress,
  lessons,
}: LessonSidebarProps) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-[100px] rounded-2xl border border-neutral-200 p-5">
        <div className="text-xs font-medium text-neutral-400">
          {courseTitle}
        </div>

        <h3 className="mt-3 font-bold">
          {chapterTitle}
        </h3>

        <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-neutral-100">
          <div
            className="h-full rounded-full bg-black"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-3 text-xs text-neutral-400">
          درس {lessonNumber} از {totalLessons}
        </p>

        <div className="mt-5 space-y-2">
          {lessons.map((lesson, index) => (
            <Link
              key={lesson.href}
              href={lesson.href}
              className={`block rounded-lg px-3 py-3 text-xs transition ${
                index + 1 === lessonNumber
                  ? "bg-neutral-100 font-medium text-black"
                  : "text-neutral-500 hover:bg-neutral-50"
              }`}
            >
              {index + 1}. {lesson.title}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}