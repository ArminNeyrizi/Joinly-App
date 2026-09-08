import type { CollectionConfig } from 'payload'

export const Courses: CollectionConfig = {
  slug: 'courses',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'نام دوره',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'curriculum',
      type: 'array',
      label: 'سرفصل‌های دوره',
      fields: [
        {
          name: 'chapterTitle',
          type: 'text',
          required: true,
          label: 'عنوان فصل (مثلا: احتمالات مهندسی)',
        },
        {
          name: 'lessons',
          type: 'relationship',
          relationTo: 'articles', // اتصال جادویی به کالکشن مقالات
          hasMany: true, // یک فصل می‌تواند چندین درس/مقاله داشته باشد
          required: true,
          label: 'درس‌های این فصل',
        },
      ],
    },
  ],
}
