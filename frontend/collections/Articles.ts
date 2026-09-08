import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Articles: CollectionConfig = {
  slug: 'articles',

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
      label: 'عنوان مقاله / درس',
    },

    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'نامک',
    },

    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      label: 'نویسنده',
    },

    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'محتوای اصلی',
      editor: lexicalEditor(),
    },
  ],
}