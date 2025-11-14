import { CollectionConfig } from 'payload'

export const Supplements: CollectionConfig = {
  slug: 'supplements',
  labels: {
    singular: 'Supplement',
    plural: 'Supplements',
  },
  admin: {
    useAsTitle: 'name',
  },

  fields: [
    { name: 'name', type: 'text', required: true },

    // -------------------------------------
    // Dosage
    // -------------------------------------
    {
      type: 'group',
      name: 'dosage',
      fields: [
        { name: 'cortisol', type: 'number' },
        { name: 'inflammation', type: 'number' },
        { name: 'muscleDamage', type: 'number' },
        { name: 'muscleSoreness', type: 'number' },
        { name: 'oxidativeStress', type: 'number' },
        { name: 'pain', type: 'number' },
        { name: 'sleepQuality', type: 'number' },
      ],
    },

    // -------------------------------------
    // Grade Score
    // -------------------------------------
    {
      type: 'group',
      name: 'gradeScore',
      fields: [
        { name: 'cortisol', type: 'text' },
        { name: 'inflammation', type: 'text' },
        { name: 'muscleDamage', type: 'text' },
        { name: 'muscleSoreness', type: 'text' },
        { name: 'oxidativeStress', type: 'text' },
        { name: 'pain', type: 'text' },
        { name: 'sleepQuality', type: 'text' },
      ],
    },

    // -------------------------------------
    // Linear Score
    // -------------------------------------
    {
      type: 'group',
      name: 'linearScore',
      fields: [
        { name: 'cortisol', type: 'number' },
        { name: 'inflammation', type: 'number' },
        { name: 'muscleDamage', type: 'number' },
        { name: 'muscleSoreness', type: 'number' },
        { name: 'oxidativeStress', type: 'number' },
        { name: 'pain', type: 'number' },
        { name: 'sleepQuality', type: 'number' },
      ],
    },

    // -------------------------------------
    // Max Values
    // -------------------------------------
    {
      type: 'group',
      name: 'maxValues',
      fields: [
        { name: 'cortisol', type: 'number' },
        { name: 'inflammation', type: 'number' },
        { name: 'muscleDamage', type: 'number' },
        { name: 'muscleSoreness', type: 'number' },
        { name: 'oxidativeStress', type: 'number' },
        { name: 'pain', type: 'number' },
        { name: 'sleepQuality', type: 'number' },
      ],
    },

    // -------------------------------------
    // Sum Values
    // -------------------------------------
    {
      type: 'group',
      name: 'sumValues',
      fields: [
        { name: 'cortisol', type: 'number' },
        { name: 'inflammation', type: 'number' },
        { name: 'muscleDamage', type: 'number' },
        { name: 'muscleSoreness', type: 'number' },
        { name: 'oxidativeStress', type: 'number' },
        { name: 'pain', type: 'number' },
        { name: 'sleepQuality', type: 'number' },
      ],
    },

    // -------------------------------------
    // TLDR for each category
    // -------------------------------------
    {
      type: 'group',
      name: 'tldr',
      fields: [
        { name: 'cortisol', type: 'textarea' },
        { name: 'inflammation', type: 'textarea' },
        { name: 'muscleDamage', type: 'textarea' },
        { name: 'muscleSoreness', type: 'textarea' },
        { name: 'oxidativeStress', type: 'textarea' },
        { name: 'pain', type: 'textarea' },
        { name: 'sleepQuality', type: 'textarea' },
      ],
    },

    // -------------------------------------
    // Relationship to RESULTS (study outcomes)
    // -------------------------------------
    {
      name: 'results',
      type: 'relationship',
      relationTo: 'results',
      hasMany: true,
      admin: {
        allowCreate: false, // studies should be created in Results collection
      },
    },

    // -------------------------------------
    // Label field (you had this in your CSV)
    // -------------------------------------
    {
      name: 'label',
      type: 'text',
    },
  ],
}

export default Supplements
