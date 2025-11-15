import { getPayload } from 'payload'
import config from '../payload.config'

const run = async () => {
  console.log('Initializing Payload…')
  const payload = await getPayload({ config })

  console.log('Clearing all collections…')

  // Get all collections except users
  const collections = Object.values(payload.collections).filter((c) => c.config.slug !== 'users')

  for (const col of collections) {
    console.log(` - Clearing ${col.config.slug}`)
    await payload.db.deleteMany({
      collection: col.config.slug,
      where: {},
    })
  }

  console.log('Database cleared (except users).')
  process.exit(0)
}

run()
