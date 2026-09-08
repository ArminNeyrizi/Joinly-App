import sharp from 'sharp'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'

import { Users } from './collections/Users'

const config = buildConfig({
  admin: {
    user: 'users',
  },

  collections: [
    Users,
  ],

  secret: process.env.PAYLOAD_SECRET || '',

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
    schemaName: 'payload',
    push: false,
  }),

  sharp,
})

export default config