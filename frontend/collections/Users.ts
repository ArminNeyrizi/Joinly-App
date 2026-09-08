import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',

  auth: true,

  admin: {
    useAsTitle: 'name',
  },

  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'student',
      options: [
        {
          label: 'Student',
          value: 'student',
        },
        {
          label: 'Instructor',
          value: 'instructor',
        },
        {
          label: 'Admin',
          value: 'admin',
        },
      ],
    },
  ],
}