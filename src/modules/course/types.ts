export type DayOfWeek =
  | "SATURDAY"
  | "SUNDAY"
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY";

export type ScheduleSlot = {
  day: DayOfWeek;
  startTime: string;
  endTime: string;
};

export type Course = {
  id: string;
  code: string;
  name: string;
  description?: string;
  units: number;
  academyId: string;
  learningPathId?: string;
  prerequisiteIds: string[];
  createdAt: string;
  updatedAt: string;
};

export type CourseSection = {
  id: string;
  courseId: string;
  sectionNumber: string;
  instructor: string;
  capacity: number;
  enrolledCount: number;
  semesterId: string;
  schedules: ScheduleSlot[];
};

export type CourseWithSections = Course & {
  sections: CourseSection[];
  learningPathName?: string;
};

export type CourseDetail = CourseWithSections & {
  prerequisites: Course[];
};
