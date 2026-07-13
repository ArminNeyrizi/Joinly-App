"use server";

import { revalidatePath } from "next/cache";

import { getAuthUser } from "@/modules/auth/repository/auth.repository";
import { apiError, apiSuccess } from "@/types/api";

import { createTodo, deleteTodo, getTodoPageData, toggleTodo, updateTodo } from "../services/todo.service";
import { todoIdSchema, todoInputSchema, todoToggleSchema, todoUpdateSchema } from "../validation";

function refreshTodoPages() {
  revalidatePath("/todos", "page");
  revalidatePath("/dashboard", "page");
}

function errorResponse(error: unknown) {
  if (error instanceof Error && error.message === "TODO_NOT_FOUND") return apiError("TODO_NOT_FOUND");
  if (error instanceof Error && error.message === "STUDENT_NOT_FOUND") return apiError("STUDENT_NOT_FOUND");
  return apiError("UNAUTHORIZED");
}

export async function getTodosAction() {
  try {
    const user = await getAuthUser();
    return apiSuccess(await getTodoPageData(user.id));
  } catch (error) {
    return errorResponse(error);
  }
}

export async function createTodoAction(input: unknown) {
  const parsed = todoInputSchema.safeParse(input);
  if (!parsed.success) return apiError(parsed.error.issues[0]?.message ?? "INVALID_INPUT");
  try {
    const user = await getAuthUser();
    await createTodo(user.id, parsed.data);
    refreshTodoPages();
    return apiSuccess(await getTodoPageData(user.id), "CREATED");
  } catch (error) {
    return errorResponse(error);
  }
}

export async function updateTodoAction(input: unknown) {
  const parsed = todoUpdateSchema.safeParse(input);
  if (!parsed.success) return apiError(parsed.error.issues[0]?.message ?? "INVALID_INPUT");
  try {
    const user = await getAuthUser();
    const { id, ...data } = parsed.data;
    await updateTodo(user.id, id, data);
    refreshTodoPages();
    return apiSuccess(await getTodoPageData(user.id), "UPDATED");
  } catch (error) {
    return errorResponse(error);
  }
}

export async function toggleTodoAction(input: unknown) {
  const parsed = todoToggleSchema.safeParse(input);
  if (!parsed.success) return apiError("INVALID_INPUT");
  try {
    const user = await getAuthUser();
    await toggleTodo(user.id, parsed.data.id, parsed.data.completed);
    refreshTodoPages();
    return apiSuccess(await getTodoPageData(user.id), "UPDATED");
  } catch (error) {
    return errorResponse(error);
  }
}

export async function deleteTodoAction(input: unknown) {
  const parsed = todoIdSchema.safeParse(input);
  if (!parsed.success) return apiError("INVALID_INPUT");
  try {
    const user = await getAuthUser();
    await deleteTodo(user.id, parsed.data.id);
    refreshTodoPages();
    return apiSuccess(await getTodoPageData(user.id), "DELETED");
  } catch (error) {
    return errorResponse(error);
  }
}
