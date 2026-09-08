import sharp from 'sharp'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'

// Added the explicit .ts extension to resolve the MODULE_NOT_FOUND error
import { Users } from './collections/Users'

import { Articles } from './collections/Articles'
import { Courses } from './collections/Courses'


const config = buildConfig({
  admin: {
    user: 'users',
  },

  collections: [
    Users,
    Articles,
    Courses,
  ],

  secret: process.env.PAYLOAD_SECRET || '',

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
    schemaName: 'payload',
    push: true,
  }),

  sharp,
})

export default config
