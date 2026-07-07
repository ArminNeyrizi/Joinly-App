export type DashboardStats = {
  currentSemesterName: string;
  enrolledCoursesCount: number;
  totalUnitsCount: number;
};

export type DashboardEnrollmentItem = {
  id: string;
  courseName: string;
  courseUnits: number;
  status: string;
};

export type DashboardData = {
  studentName: string;
  academyName: string;
  stats: DashboardStats;
  activeEnrollments: DashboardEnrollmentItem[];
};
