export const TODO_PRIORITIES = [1, 2, 3, 4] as const;

export type TodoPriority = (typeof TODO_PRIORITIES)[number];
export type TodoFilter = "all" | "active" | "completed";

export type TodoItem = {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: TodoPriority;
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
};

export type TodoInput = {
  title: string;
  description?: string;
  priority: TodoPriority;
  dueDate?: string;
};

export type TodoPageData = {
  todos: TodoItem[];
  summary: {
    total: number;
    active: number;
    completed: number;
    overdue: number;
  };
};
