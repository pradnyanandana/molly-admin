import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { parse } from 'csv-parse'
import config from '../payload.config.js'
import { getPayload } from 'payload'
import { ResearchPaperType } from '@/types/ResearchPaperType.js'

// Resolve dirname
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const seedResearchPapers = async () => {
  console.log('=== Starting Research Papers Seeder ===')

  // Validate env
  if (!process.env.DATABASE_URI || !process.env.PAYLOAD_SECRET) {
    throw new Error('Missing environment variables: DATABASE_URI or PAYLOAD_SECRET')
  }

  console.log('✓ Environment variables loaded')
  console.log('DATABASE_URI:', process.env.DATABASE_URI)

  try {
    console.log('=== Initializing Payload ===')
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized successfully!')

    // Read CSV
    const csvPath = path.join(dirname, './csv/papers.csv')
    console.log('Reading CSV from:', csvPath)

    if (!fs.existsSync(csvPath)) {
      throw new Error(`CSV file not found at: ${csvPath}`)
    }

    const fileContent = fs.readFileSync(csvPath, 'utf8')

    const records: ResearchPaperType[] = await new Promise((resolve, reject) => {
      parse(
        fileContent,
        {
          columns: true,
          skip_empty_lines: true,
          trim: true,
        },
        (err, output: ResearchPaperType[]) => (err ? reject(err) : resolve(output)),
      )
    })

    console.log(`\n✓ Loaded ${records.length} CSV rows`)
    console.log('=== Starting import ===\n')

    let successCount = 0
    let errorCount = 0

    for (const [index, row] of records.entries()) {
      const item = {
        URL: row['Paper'] || '',
        AMEND: row['AMEND'] === 'Yes',
        Age: row['Age'] || '',
        Area: row['Area'] || '',
        BodyType: row['Body Type'] || '',
        CortisolExerciseCleaning: row['Cortisol Exercise Cleaning'] === 'Yes',
        CreatedTime: row['Created time'] || '',
        Effect: row['Effect'] || '',
        FilesAndMedia: row['Files & media'] || '',
        FitnessCleaning: row['Fitness Cleaning'] === 'Yes',
        FundingNotes: row['Funding Notes'] || '',
        Label: row['Label'] || '',
        LastEditedTime: row['Last edited time'] || '',
        MetaChecked: row['Meta Checked'] === 'Yes',
        NULL: row['NULL'] === 'Yes',
        NumberOfParticipants: Number(row['Number of Participants']) || 0,
        ParticipantsCortisol: Number(row['Participants Cortisol']) || 0,
        ParticipantsInflammation: Number(row['Participants Inflammation']) || 0,
        ParticipantsMuscleDamage: Number(row['Participants Muscle Damage ']) || 0,
        ParticipantsMuscleSoreness: Number(row['Participants Muscle Soreness']) || 0,
        ParticipantsOxidativeStress: Number(row['Participants Oxidative Stress']) || 0,
        ParticipantsPain: Number(row['Participants Pain']) || 0,
        ParticipantsSleepQuality: Number(row['Participants Sleep Quality']) || 0,
        Product: row['Product'] || '',
        RelatedToResults1: row['Related to Results (1) (Research Papers )'] || '',
        RelatedToResults2: row['Related to Results (1) (Research Papers ) 1'] || '',
        Results: row['Results'] || '',
        Sex: row['Sex'] || '',
        Source: row['Source'] || '',
        StudiesCortisol: Number(row['Studies Cortisol']) || 0,
        StudiesInflammation: Number(row['Studies Inflammation']) || 0,
        StudiesMuscleDamage: Number(row['Studies Muscle Damage']) || 0,
        StudiesMuscleSoreness: Number(row['Studies Muscle Soreness']) || 0,
        StudiesOxidativeStress: Number(row['Studies Oxidative Stress']) || 0,
        StudiesPain: Number(row['Studies Pain']) || 0,
        StudiesSleepQuality: Number(row['Studies Sleep Quality']) || 0,
        Supplement: row['Supplement'] || '',
        TLDR: row['TLDR'] || '',
        TrialDesign: row['Trial Design'] || '',
        TrialLength: row['Trial Length'] || '',
        Year: row['Year'] || '',
      }

      try {
        const result = await payload.create({
          collection: 'research-papers',
          data: item,
        })

        successCount++
        console.log(`✅ [${index + 1}/${records.length}] Created: ${item.URL || result.id}`)
      } catch (error: unknown) {
        const err = error as Error
        errorCount++
        console.error(`❌ [${index + 1}/${records.length}] Failed: ${err.message}`)

        if (errorCount === 1) {
          console.error('First error details:', error)
          console.error('Problematic data:', JSON.stringify(item, null, 2))
        }
      }
    }

    console.log('\n=== Seed Summary ===')
    console.log(`Total records: ${records.length}`)
    console.log(`✅ Successfully imported: ${successCount}`)
    console.log(`❌ Failed: ${errorCount}`)
    console.log('=== Seed Complete ===\n')
  } catch (error) {
    console.error('\n❌ Seeder failed:', error)
    throw error
  }
}

// Run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedResearchPapers()
    .then(() => {
      console.log('Exiting...')
      process.exit(0)
    })
    .catch((error) => {
      console.error('Fatal error:', error)
      process.exit(1)
    })
}
