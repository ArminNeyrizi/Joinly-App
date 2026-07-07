export type DayOfWeek =
  | "SATURDAY"
  | "SUNDAY"
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY";

export type EnrollmentStatus = "PENDING" | "CONFIRMED" | "DROPPED";

export type ScheduleSlot = {
  day: DayOfWeek;
  startTime: string;
  endTime: string;
};

export type Academy = {
  id: string;
  slug: string;
  name: string;
  description?: string;
};

export type LearningPath = {
  id: string;
  slug: string;
  name: string;
  description?: string;
  academyId: string;
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

export type Semester = {
  id: string;
  name: string;
  isActive: boolean;
  enrollmentStart: string;
  enrollmentEnd: string;
};

export type Student = {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  academyId: string;
};

export type Enrollment = {
  id: string;
  studentId: string;
  sectionId: string;
  semesterId: string;
  status: EnrollmentStatus;
};

export type CourseWithSections = Course & {
  sections: CourseSection[];
  academy: Academy;
  learningPath?: LearningPath;
};

export type EnrollmentItem = {
  enrollment: Enrollment;
  section: CourseSection;
  course: Course;
};

export type EnrollmentSummary = {
  totalUnits: number;
  minUnits: number;
  maxUnits: number;
  itemCount: number;
  isEnrollmentOpen: boolean;
  semester: Semester;
};

export type EnrollmentPageData = {
  student: Student;
  academy: Academy;
  learningPaths: LearningPath[];
  courses: CourseWithSections[];
  enrollments: EnrollmentItem[];
  completedCourseIds: string[];
  summary: EnrollmentSummary;
};
