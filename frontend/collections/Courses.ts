import type { CollectionConfig } from 'payload'

export const Courses: CollectionConfig = {
  slug: 'courses',

  versions: {
    drafts: true,
  },

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
      label: 'نامک',
    },

    {
      name: 'instructor',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      label: 'مدرس',
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
          label: 'عنوان فصل',
        },

        {
          name: 'lessons',
          type: 'relationship',
          relationTo: 'articles',
          hasMany: true,
          label: 'درس‌های این فصل',
        },
      ],
    },
  ],
}