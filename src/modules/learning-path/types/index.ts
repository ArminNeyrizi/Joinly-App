import type { Course } from "@/modules/course/types";

export type LearningPath = {
  id: string;
  slug: string;
  name: string;
  description?: string;
  academyId: string;
  createdAt: string;
  updatedAt: string;
};

export type LearningPathDetail = LearningPath & {
  courses: Course[];
};
