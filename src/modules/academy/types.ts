export type Academy = {
  id: string;
  slug: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
};

export type AcademyWithStats = Academy & {
  courseCount: number;
  studentCount: number;
  learningPathCount: number;
};
