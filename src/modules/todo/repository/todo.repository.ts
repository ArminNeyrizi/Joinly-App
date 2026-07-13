import { prisma } from "@/lib/db";

export async function findStudentByUserId(userId: string) {
  return prisma.student.findUnique({
    where: { userId },
    select: { id: true },
  });
}

export async function findTodosByStudentId(studentId: string) {
  return prisma.todo.findMany({
    where: { studentId },
    orderBy: [{ completed: "asc" }, { priority: "desc" }, { dueDate: "asc" }, { createdAt: "desc" }],
  });
}

export async function createTodoForStudent(
  studentId: string,
  data: { title: string; description?: string; priority: number; dueDate?: Date },
) {
  return prisma.todo.create({
    data: { ...data, studentId },
  });
}

export async function updateTodoForStudent(
  id: string,
  studentId: string,
  data: { title?: string; description?: string | null; priority?: number; dueDate?: Date | null; completed?: boolean },
) {
  const result = await prisma.todo.updateMany({ where: { id, studentId }, data });
  if (result.count === 0) throw new Error("TODO_NOT_FOUND");
}

export async function deleteTodoForStudent(id: string, studentId: string) {
  const result = await prisma.todo.deleteMany({ where: { id, studentId } });
  if (result.count === 0) throw new Error("TODO_NOT_FOUND");
}
