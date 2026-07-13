import type { Todo } from "@/generated/prisma/client";

import {
  createTodoForStudent,
  deleteTodoForStudent,
  findStudentByUserId,
  findTodosByStudentId,
  updateTodoForStudent,
} from "../repository/todo.repository";
import type { TodoInput, TodoItem, TodoPageData, TodoPriority } from "../types";

function mapTodo(todo: Todo): TodoItem {
  return {
    id: todo.id,
    title: todo.title,
    description: todo.description ?? undefined,
    completed: todo.completed,
    priority: todo.priority as TodoPriority,
    dueDate: todo.dueDate?.toISOString(),
    createdAt: todo.createdAt.toISOString(),
    updatedAt: todo.updatedAt.toISOString(),
  };
}

async function requireStudentId(userId: string) {
  const student = await findStudentByUserId(userId);
  if (!student) throw new Error("STUDENT_NOT_FOUND");
  return student.id;
}

export async function getTodoPageData(userId: string): Promise<TodoPageData> {
  const studentId = await requireStudentId(userId);
  const todos = (await findTodosByStudentId(studentId)).map(mapTodo);
  const now = Date.now();

  return {
    todos,
    summary: {
      total: todos.length,
      active: todos.filter((todo) => !todo.completed).length,
      completed: todos.filter((todo) => todo.completed).length,
      overdue: todos.filter((todo) => !todo.completed && todo.dueDate && new Date(todo.dueDate).getTime() < now).length,
    },
  };
}

export async function createTodo(userId: string, input: TodoInput) {
  const studentId = await requireStudentId(userId);
  await createTodoForStudent(studentId, {
    ...input,
    dueDate: input.dueDate ? new Date(`${input.dueDate}T23:59:59`) : undefined,
  });
}

export async function updateTodo(userId: string, id: string, input: TodoInput) {
  const studentId = await requireStudentId(userId);
  await updateTodoForStudent(id, studentId, {
    ...input,
    description: input.description ?? null,
    dueDate: input.dueDate ? new Date(`${input.dueDate}T23:59:59`) : null,
  });
}

export async function toggleTodo(userId: string, id: string, completed: boolean) {
  const studentId = await requireStudentId(userId);
  await updateTodoForStudent(id, studentId, { completed });
}

export async function deleteTodo(userId: string, id: string) {
  const studentId = await requireStudentId(userId);
  await deleteTodoForStudent(id, studentId);
}
