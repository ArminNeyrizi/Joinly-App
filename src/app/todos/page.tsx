import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { AppShell } from "@/components/layout/app-shell";
import { getAuthUser } from "@/modules/auth/repository/auth.repository";
import { TodoBoard } from "@/modules/todo/components/todo-board";
import { getTodoPageData } from "@/modules/todo/services/todo.service";

export const metadata: Metadata = {
  title: "کارهای من",
  description: "مدیریت کارها، اولویت‌ها و موعدهای دانشجویی در Joinly",
};

export default async function TodosPage() {
  let data;

  try {
    const user = await getAuthUser();
    data = await getTodoPageData(user.id);
  } catch {
    redirect("/auth/login");
  }

  return (
    <AppShell currentPath="todos">
      <div className="flex flex-col gap-8">
        <header className="flex flex-col gap-2">
          <p className="text-sm font-medium text-primary">برنامه‌ریزی روزانه</p>
          <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">کارها را روشن و قدم‌به‌قدم پیش ببر</h1>
          <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">همه تکلیف‌ها، تمرین‌ها و موعدهای مهمت را در یک نمای ساده نگه دار.</p>
        </header>
        <TodoBoard initialData={data} />
      </div>
    </AppShell>
  );
}
