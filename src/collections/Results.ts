import type { CollectionConfig } from 'payload'

export const Results: CollectionConfig = {
  slug: 'results',
  admin: {
    useAsTitle: 'product',
    defaultColumns: ['product', 'supplement', 'mainTag', 'score'],
  },
  fields: [
    {
      name: 'product',
      type: 'text',
      required: true,
    },
    {
      name: 'supplement',
      type: 'relationship',
      relationTo: 'supplements',
      required: true,
    },
    {
      name: 'researchPaper',
      type: 'relationship',
      relationTo: 'research-papers',
      required: false,
    },
    {
      name: 'mainTag',
      type: 'text',
    },
    {
      name: 'subTag',
      type: 'text',
    },

    // Benefit info
    {
      name: 'benefit',
      type: 'text',
    },
    {
      name: 'benefitValue',
      type: 'number',
    },

    // Filters (all booleans)
    { name: 'oxidativeStressFilter', type: 'checkbox' },
    { name: 'muscleDamageFilter', type: 'checkbox' },
    { name: 'muscleSorenessFilter', type: 'checkbox' },
    { name: 'inflammationFilter', type: 'checkbox' },
    { name: 'painFilter', type: 'checkbox' },
    { name: 'sleepQualityFilter', type: 'checkbox' },
    { name: 'cortisolFilter', type: 'checkbox' },
    { name: 'cortisolCleaning', type: 'checkbox' },

    // Numerical fields
    { name: 'score', type: 'number' },
    { name: 'participants', type: 'number' },
    { name: 'age', type: 'number' },
    { name: 'maxPain', type: 'number' },

    // Metadata
    { name: 'year', type: 'number' },
    { name: 'sex', type: 'text' },
    { name: 'bodyType', type: 'text' },
    { name: 'confidence', type: 'text' }, // or select?
    { name: 'trialDesign', type: 'text' },
    { name: 'trialLength', type: 'text' },
    { name: 'results', type: 'textarea' },
  ],
}
