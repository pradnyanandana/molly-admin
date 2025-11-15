import { seedResearchPapers } from './seedResearchPapers'

const run = async () => {
  try {
    await seedResearchPapers()
    console.log('✅ Seeding completed')
    process.exit(0)
  } catch (error) {
    console.error('❌ Seeding failed:', error)
    process.exit(1)
  }
}

run()
