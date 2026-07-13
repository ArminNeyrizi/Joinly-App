"use client";

import * as React from "react";
import { CalendarDays, CheckCircle2, CircleAlert, ListChecks, Pencil, Plus, Trash2 } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

import { createTodoAction, deleteTodoAction, toggleTodoAction, updateTodoAction } from "../actions/todo.actions";
import type { TodoFilter, TodoInput, TodoItem, TodoPageData, TodoPriority } from "../types";

const priorities = [
  { value: "1", label: "کم" },
  { value: "2", label: "معمولی" },
  { value: "3", label: "مهم" },
  { value: "4", label: "فوری" },
];

const priorityLabel: Record<TodoPriority, string> = { 1: "کم", 2: "معمولی", 3: "مهم", 4: "فوری" };
const filters: Array<{ value: TodoFilter; label: string }> = [
  { value: "all", label: "همه" },
  { value: "active", label: "در جریان" },
  { value: "completed", label: "انجام‌شده" },
];

function toDateInput(date?: string) {
  return date ? date.slice(0, 10) : "";
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("fa-IR", { day: "numeric", month: "long", year: "numeric" }).format(new Date(date));
}

function TodoForm({ todo, onSaved, onCancel }: { todo?: TodoItem; onSaved: (data: TodoPageData) => void; onCancel?: () => void }) {
  const [priority, setPriority] = React.useState(String(todo?.priority ?? 2));
  const [error, setError] = React.useState("");
  const [isPending, startTransition] = React.useTransition();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const input: TodoInput = {
      title: String(form.get("title") ?? ""),
      description: String(form.get("description") ?? "") || undefined,
      priority: Number(priority) as TodoPriority,
      dueDate: String(form.get("dueDate") ?? "") || undefined,
    };

    startTransition(async () => {
      const result = todo ? await updateTodoAction({ id: todo.id, ...input }) : await createTodoAction(input);
      if (!result.success) {
        setError(result.error);
        return;
      }
      setError("");
      onSaved(result.data);
      if (!todo) {
        event.currentTarget.reset();
        setPriority("2");
      }
      onCancel?.();
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <FieldGroup>
        <Field data-invalid={Boolean(error)}>
          <FieldLabel htmlFor={todo ? `title-${todo.id}` : "todo-title"}>عنوان کار</FieldLabel>
          <Input id={todo ? `title-${todo.id}` : "todo-title"} name="title" defaultValue={todo?.title} placeholder="مثلاً مرور فصل سوم ساختمان داده" maxLength={120} required aria-invalid={Boolean(error)} />
          {error && <FieldError>{error}</FieldError>}
        </Field>
        <Field>
          <FieldLabel htmlFor={todo ? `description-${todo.id}` : "todo-description"}>توضیحات اختیاری</FieldLabel>
          <Textarea id={todo ? `description-${todo.id}` : "todo-description"} name="description" defaultValue={todo?.description} placeholder="جزئیات یا یادداشت کوتاه" rows={3} maxLength={500} />
        </Field>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field>
            <FieldLabel>اولویت</FieldLabel>
            <Select items={priorities} value={priority} onValueChange={(value) => setPriority(value ?? "2")}>
              <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
              <SelectContent><SelectGroup>{priorities.map((item) => <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>)}</SelectGroup></SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel htmlFor={todo ? `date-${todo.id}` : "todo-date"}>موعد</FieldLabel>
            <Input id={todo ? `date-${todo.id}` : "todo-date"} name="dueDate" type="date" defaultValue={toDateInput(todo?.dueDate)} />
          </Field>
        </div>
        <div className="flex items-center justify-end gap-2">
          {onCancel && <Button type="button" variant="ghost" onClick={onCancel}>انصراف</Button>}
          <Button type="submit" disabled={isPending}>
            {todo ? <Pencil data-icon="inline-start" /> : <Plus data-icon="inline-start" />}
            {isPending ? "در حال ذخیره..." : todo ? "ذخیره تغییرات" : "افزودن کار"}
          </Button>
        </div>
      </FieldGroup>
    </form>
  );
}

function TodoRow({ todo, onChanged }: { todo: TodoItem; onChanged: (data: TodoPageData) => void }) {
  const [editing, setEditing] = React.useState(false);
  const [isPending, startTransition] = React.useTransition();
  const overdue = Boolean(!todo.completed && todo.dueDate && new Date(todo.dueDate) < new Date());

  if (editing) {
    return <Card><CardContent><TodoForm todo={todo} onSaved={onChanged} onCancel={() => setEditing(false)} /></CardContent></Card>;
  }

  return (
    <article className={cn("group flex items-start gap-3 border-b border-border py-4 last:border-b-0", todo.completed && "opacity-60")}>
      <Checkbox aria-label={todo.completed ? "بازگرداندن کار به حالت در جریان" : "علامت‌گذاری به‌عنوان انجام‌شده"} checked={todo.completed} disabled={isPending} onCheckedChange={(checked) => startTransition(async () => { const result = await toggleTodoAction({ id: todo.id, completed: checked === true }); if (result.success) onChanged(result.data); })} className="mt-1" />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className={cn("font-medium text-pretty", todo.completed && "line-through")}>{todo.title}</h3>
          <Badge variant={todo.priority >= 3 ? "default" : "secondary"}>{priorityLabel[todo.priority]}</Badge>
          {overdue && <Badge variant="destructive">عقب‌افتاده</Badge>}
        </div>
        {todo.description && <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{todo.description}</p>}
        {todo.dueDate && <p className={cn("mt-2 flex items-center gap-1.5 text-xs text-muted-foreground", overdue && "text-destructive")}><CalendarDays className="size-4" /> موعد: {formatDate(todo.dueDate)}</p>}
      </div>
      <div className="flex shrink-0 items-center gap-1">
        <Button size="icon-sm" variant="ghost" aria-label="ویرایش کار" onClick={() => setEditing(true)}><Pencil /></Button>
        <AlertDialog>
          <AlertDialogTrigger render={<Button size="icon-sm" variant="ghost" aria-label="حذف کار"><Trash2 /></Button>} />
          <AlertDialogContent dir="rtl" size="sm">
            <AlertDialogHeader><AlertDialogTitle>این کار حذف شود؟</AlertDialogTitle><AlertDialogDescription>این عملیات قابل بازگشت نیست.</AlertDialogDescription></AlertDialogHeader>
            <AlertDialogFooter><AlertDialogCancel>انصراف</AlertDialogCancel><AlertDialogAction variant="destructive" onClick={() => startTransition(async () => { const result = await deleteTodoAction({ id: todo.id }); if (result.success) onChanged(result.data); })}>حذف</AlertDialogAction></AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </article>
  );
}

export function TodoBoard({ initialData }: { initialData: TodoPageData }) {
  const [data, setData] = React.useState(initialData);
  const [filter, setFilter] = React.useState<TodoFilter>("all");
  const visibleTodos = data.todos.filter((todo) => filter === "all" || (filter === "completed" ? todo.completed : !todo.completed));
  const completionRate = data.summary.total ? Math.round((data.summary.completed / data.summary.total) * 100) : 0;

  return (
    <div className="flex flex-col gap-6">
      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="خلاصه کارها">
        {[
          { label: "همه کارها", value: data.summary.total, icon: ListChecks },
          { label: "در جریان", value: data.summary.active, icon: CircleAlert },
          { label: "انجام‌شده", value: data.summary.completed, icon: CheckCircle2 },
          { label: "نرخ انجام", value: `${completionRate}٪`, icon: CheckCircle2 },
        ].map((stat) => <Card key={stat.label} size="sm"><CardHeader><CardDescription className="flex items-center gap-2"><stat.icon className="size-4" />{stat.label}</CardDescription><CardTitle className="text-2xl tabular-nums">{stat.value}</CardTitle></CardHeader></Card>)}
      </section>

      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <Card>
          <CardHeader>
            <CardTitle>فهرست کارها</CardTitle>
            <CardDescription>{data.summary.active ? `${data.summary.active} کار برای انجام داری` : "همه کارها انجام شده‌اند"}</CardDescription>
            <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="فیلتر کارها">
              {filters.map((item) => <Button key={item.value} size="sm" variant={filter === item.value ? "default" : "outline"} onClick={() => setFilter(item.value)}>{item.label}</Button>)}
            </div>
          </CardHeader>
          <CardContent>
            {visibleTodos.length ? visibleTodos.map((todo) => <TodoRow key={todo.id} todo={todo} onChanged={setData} />) : (
              <div className="flex min-h-64 flex-col items-center justify-center gap-3 text-center"><div className="flex size-12 items-center justify-center rounded-xl bg-muted"><ListChecks className="size-6 text-muted-foreground" /></div><div><h3 className="font-medium">کاری در این بخش نیست</h3><p className="mt-1 text-sm text-muted-foreground">یک کار تازه اضافه کن یا فیلتر دیگری را انتخاب کن.</p></div></div>
            )}
          </CardContent>
        </Card>

        <Card className="lg:sticky lg:top-20">
          <CardHeader><CardTitle>کار جدید</CardTitle><CardDescription>کارهای کوچک و مشخص، راحت‌تر انجام می‌شوند.</CardDescription></CardHeader>
          <CardContent><TodoForm onSaved={setData} /></CardContent>
        </Card>
      </div>
    </div>
  );
}
