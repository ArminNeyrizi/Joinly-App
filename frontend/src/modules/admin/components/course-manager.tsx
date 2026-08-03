"use client";

import { useState, useTransition } from "react";
import { BookOpen, Pencil, Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  createCourseAction,
  deleteCourseAction,
  updateCourseAction,
} from "../actions";

type CourseRow = {
  id: string;
  code: string;
  name: string;
  description: string | null;
  units: number;
  academyId: string;
  learningPathId: string | null;
  academy: { name: string };
  sections: { id: string }[];
};

type Props = {
  initialCourses: CourseRow[];
  academies: { id: string; name: string }[];
};

const emptyForm = {
  code: "",
  name: "",
  description: "",
  units: 3,
  academyId: "",
};

export function CourseManager({ initialCourses, academies }: Props) {
  const [courses, setCourses] = useState(initialCourses);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [isPending, startTransition] = useTransition();

  function openCreate() {
    setForm({ ...emptyForm, academyId: academies[0]?.id ?? "" });
    setEditingId(null);
    setShowForm(true);
  }

  function openEdit(course: CourseRow) {
    setForm({
      code: course.code,
      name: course.name,
      description: course.description ?? "",
      units: course.units,
      academyId: course.academyId,
    });
    setEditingId(course.id);
    setShowForm(true);
  }

  function handleSubmit() {
    startTransition(async () => {
      const payload = {
        code: form.code,
        name: form.name,
        description: form.description || undefined,
        units: Number(form.units),
        academyId: form.academyId,
        prerequisiteCourseIds: [],
      };

      const result = editingId
        ? await updateCourseAction(editingId, payload)
        : await createCourseAction(payload);

      if (result.success) {
        setCourses(result.data as unknown as CourseRow[]);
        setShowForm(false);
      }
    });
  }

  function handleDelete(courseId: string) {
    if (!confirm("این درس حذف شود؟ در صورت وجود گروه یا ثبت‌نام فعال ممکن است خطا بدهد.")) return;
    startTransition(async () => {
      const result = await deleteCourseAction(courseId);
      if (result.success) {
        setCourses(result.data as unknown as CourseRow[]);
      }
    });
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">مدیریت دروس</h2>
        <Button size="sm" onClick={openCreate}>
          <Plus className="size-4" />
          درس جدید
        </Button>
      </div>

      {showForm && (
        <Card className="border-purple-500/30 bg-card/50">
          <CardHeader>
            <CardTitle className="text-base">
              {editingId ? "ویرایش درس" : "تعریف درس جدید"}
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            <input
              placeholder="کد درس"
              value={form.code}
              onChange={(e) => setForm({ ...form, code: e.target.value })}
              className="h-9 rounded-lg border border-border/50 bg-card/50 px-3 text-sm outline-none"
            />
            <input
              placeholder="نام درس"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="h-9 rounded-lg border border-border/50 bg-card/50 px-3 text-sm outline-none"
            />
            <input
              type="number"
              min={1}
              max={6}
              placeholder="تعداد واحد"
              value={form.units}
              onChange={(e) => setForm({ ...form, units: Number(e.target.value) })}
              className="h-9 rounded-lg border border-border/50 bg-card/50 px-3 text-sm outline-none"
            />
            <select
              value={form.academyId}
              onChange={(e) => setForm({ ...form, academyId: e.target.value })}
              className="h-9 rounded-lg border border-border/50 bg-card/50 px-3 text-sm outline-none"
            >
              {academies.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.name}
                </option>
              ))}
            </select>
            <textarea
              placeholder="توضیحات (اختیاری)"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="col-span-full min-h-20 rounded-lg border border-border/50 bg-card/50 px-3 py-2 text-sm outline-none"
            />
            <div className="col-span-full flex gap-2">
              <Button size="sm" disabled={isPending} onClick={handleSubmit}>
                {editingId ? "ذخیره تغییرات" : "ایجاد درس"}
              </Button>
              <Button size="sm" variant="ghost" onClick={() => setShowForm(false)}>
                انصراف
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-3">
        {courses.map((course) => (
          <Card key={course.id} className="border-border/50 bg-card/50">
            <CardContent className="flex items-center justify-between gap-4 py-4">
              <div className="flex items-center gap-3">
                <BookOpen className="size-4 text-purple-400" />
                <div>
                  <p className="font-medium">{course.name}</p>
                  <p className="font-mono text-xs text-muted-foreground">
                    {course.code} · {course.units} واحد · {course.academy.name} ·{" "}
                    {course.sections.length} گروه
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="icon-sm" variant="ghost" onClick={() => openEdit(course)}>
                  <Pencil className="size-4" />
                </Button>
                <Button
                  size="icon-sm"
                  variant="ghost"
                  className="text-destructive"
                  onClick={() => handleDelete(course.id)}
                >
                  <Trash2 className="size-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
