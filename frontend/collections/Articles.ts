import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical' // <-- ۱. ایمپورت ادیتور

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'عنوان مقاله / درس',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'این فیلد آدرس URL مقاله را می‌سازد (مثلا: basic-counting-principle)',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'محتوای اصلی',
      editor: lexicalEditor(), // <-- ۲. اضافه کردن این خط
    },
  ],
}
