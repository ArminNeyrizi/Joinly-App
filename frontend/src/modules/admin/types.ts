export type AdminEnrollmentReview = {
  enrollment: {
    id: string;
    status: string;
    createdAt: string;
  };
  student: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  course: {
    id: string;
    code: string;
    name: string;
    units: number;
  };
  section: {
    id: string;
    sectionNumber: string;
    instructor: string;
  };
  semester: {
    id: string;
    name: string;
  };
};

export type AdminScheduleInput = {
  day: string;
  startTime: string;
  endTime: string;
};

export type AdminCourseInput = {
  code: string;
  name: string;
  description?: string;
  units: number;
  academyId: string;
  learningPathId?: string;
  prerequisiteCourseIds: string[];
};

export type AdminSectionInput = {
  courseId: string;
  sectionNumber: string;
  instructor: string;
  capacity: number;
  semesterId: string;
  schedules: AdminScheduleInput[];
};

export type AdminCourseSummary = {
  id: string;
  code: string;
  name: string;
  units: number;
  academyName: string;
  learningPathName?: string;
  sectionCount: number;
};
