import type { CollectionConfig } from 'payload'

export const ResearchPapers: CollectionConfig = {
  slug: 'research-papers',
  admin: {
    useAsTitle: 'Label',
    defaultColumns: ['Label', 'Year', 'URL', 'CreatedTime'],
  },

  fields: [
    {
      type: 'tabs',
      tabs: [
        // ----------------------------------------
        // 📌 TAB: Basic Info
        // ----------------------------------------
        {
          label: 'Basic Info',
          fields: [
            { name: 'URL', type: 'text', required: true },
            { name: 'Label', type: 'text' },
            { name: 'Product', type: 'text' },
            { name: 'Supplement', type: 'text' },
            { name: 'Year', type: 'text' },
            { name: 'TLDR', type: 'textarea' },
            { name: 'Effect', type: 'text' },
            { name: 'Area', type: 'text' },
            { name: 'BodyType', type: 'text' },
            { name: 'Age', type: 'text' },
            { name: 'Confidence', type: 'text' },
          ],
        },

        // ----------------------------------------
        // 📌 TAB: Meta / Cleaning Flags
        // ----------------------------------------
        {
          label: 'Meta & Cleaning',
          fields: [
            { name: 'AMEND', type: 'checkbox', defaultValue: false },
            { name: 'FitnessCleaning', type: 'checkbox', defaultValue: false },
            { name: 'CortisolExerciseCleaning', type: 'checkbox', defaultValue: false },
            { name: 'MetaChecked', type: 'checkbox', defaultValue: false },
            { name: 'NULL', type: 'checkbox', defaultValue: false },
            { name: 'FundingNotes', type: 'textarea' },
            { name: 'Source', type: 'textarea' },
            { name: 'CreatedTime', type: 'text' },
            { name: 'LastEditedTime', type: 'text' },
            { name: 'FilesAndMedia', type: 'text' },
          ],
        },

        // ----------------------------------------
        // 📌 TAB: Participants & Study Counts
        // ----------------------------------------
        {
          label: 'Participants & Study Counts',
          fields: [
            { name: 'NumberOfParticipants', type: 'number' },

            // Participants breakdown
            { name: 'ParticipantsCortisol', type: 'number' },
            { name: 'ParticipantsInflammation', type: 'number' },
            { name: 'ParticipantsMuscleDamage', type: 'number' },
            { name: 'ParticipantsMuscleSoreness', type: 'number' },
            { name: 'ParticipantsOxidativeStress', type: 'number' },
            { name: 'ParticipantsPain', type: 'number' },
            { name: 'ParticipantsSleepQuality', type: 'number' },

            { name: 'Participants', type: 'textarea' },
          ],
        },

        // ----------------------------------------
        // 📌 TAB: Studies Categories
        // ----------------------------------------
        {
          label: 'Studies Breakdown',
          fields: [
            { name: 'StudiesCortisol', type: 'number' },
            { name: 'StudiesInflammation', type: 'number' },
            { name: 'StudiesMuscleDamage', type: 'number' },
            { name: 'StudiesMuscleSoreness', type: 'number' },
            { name: 'StudiesOxidativeStress', type: 'number' },
            { name: 'StudiesPain', type: 'number' },
            { name: 'StudiesSleepQuality', type: 'number' },
          ],
        },

        // ----------------------------------------
        // 📌 TAB: Results (No Relationships)
        // ----------------------------------------
        {
          label: 'Results',
          fields: [
            { name: 'RelatedToResults1', type: 'textarea' },
            { name: 'RelatedToResults2', type: 'textarea' },
            { name: 'Results', type: 'textarea' },
          ],
        },

        // ----------------------------------------
        // 📌 TAB: Trial Info
        // ----------------------------------------
        {
          label: 'Trial Info',
          fields: [
            { name: 'Sex', type: 'text' },
            { name: 'TrialDesign', type: 'text' },
            { name: 'TrialLength', type: 'text' },
          ],
        },
      ],
    },
  ],
}

export default ResearchPapers
