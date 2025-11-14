import { CollectionConfig } from 'payload'

export const ResearchPapers: CollectionConfig = {
  slug: 'research-papers',
  admin: {
    useAsTitle: 'Label',
    defaultColumns: ['Label', 'Year', 'URL', 'CreatedTime'],
  },
  fields: [
    { name: 'URL', type: 'text', required: true },

    { name: 'AMEND', type: 'checkbox', defaultValue: false },

    { name: 'Age', type: 'text' },

    { name: 'Area', type: 'text' },

    { name: 'BodyType', type: 'text' },

    { name: 'CortisolExerciseCleaning', type: 'checkbox', defaultValue: false },

    { name: 'CreatedTime', type: 'text' },

    { name: 'Effect', type: 'text' },

    {
      name: 'FilesAndMedia',
      type: 'array',
      fields: [{ name: 'file', type: 'upload', relationTo: 'media' }],
    },

    { name: 'FitnessCleaning', type: 'checkbox', defaultValue: false },

    { name: 'FundingNotes', type: 'textarea' },

    { name: 'Label', type: 'text' },

    { name: 'LastEditedTime', type: 'text' },

    { name: 'MetaChecked', type: 'checkbox', defaultValue: false },

    { name: 'NULL', type: 'checkbox', defaultValue: false },

    { name: 'NumberOfParticipants', type: 'number' },

    // Participants counts
    { name: 'ParticipantsCortisol', type: 'number' },
    { name: 'ParticipantsInflammation', type: 'number' },
    { name: 'ParticipantsMuscleDamage', type: 'number' },
    { name: 'ParticipantsMuscleSoreness', type: 'number' },
    { name: 'ParticipantsOxidativeStress', type: 'number' },
    { name: 'ParticipantsPain', type: 'number' },
    { name: 'ParticipantsSleepQuality', type: 'number' },

    { name: 'Participants', type: 'textarea' },

    { name: 'Product', type: 'text' },

    // RelatedToResults fields (primitive text — NO relations)
    { name: 'RelatedToResults1', type: 'textarea' },
    { name: 'RelatedToResults2', type: 'textarea' },

    { name: 'Results', type: 'textarea' },

    { name: 'Sex', type: 'text' },

    { name: 'Source', type: 'textarea' },

    // Studies categories
    { name: 'StudiesCortisol', type: 'number' },
    { name: 'StudiesInflammation', type: 'number' },
    { name: 'StudiesMuscleDamage', type: 'number' },
    { name: 'StudiesMuscleSoreness', type: 'number' },
    { name: 'StudiesOxidativeStress', type: 'number' },
    { name: 'StudiesPain', type: 'number' },
    { name: 'StudiesSleepQuality', type: 'number' },

    { name: 'Supplement', type: 'text' },

    { name: 'TLDR', type: 'textarea' },

    { name: 'TrialDesign', type: 'text' },

    { name: 'TrialLength', type: 'text' },

    { name: 'Year', type: 'text' },

    { name: 'Confidence', type: 'text' },
  ],
}

export default ResearchPapers
