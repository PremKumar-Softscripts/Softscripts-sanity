export default {
  name: 'cardSection',
  title: 'Card Section',
  type: 'object',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Card',
          fields: [
            {
              name: 'image',
              title: 'Card Image',
              type: 'image',
              options: { hotspot: true },
            },
            {
              name: 'title',
              title: 'Card Title',
              type: 'string',
            },
            {
              name: 'paragraph',
              title: 'Card Description',
              type: 'text',
            },
            {
              name: 'button',
              title: 'Button',
              type: 'object',
              fields: [
                {
                  name: 'text',
                  title: 'Button Text',
                  type: 'string',
                },
                {
                  name: 'slug',
                  title: 'Slug',
                  type: 'slug',
                  options: {
                    source: 'text',
                    maxLength: 96,
                    slugify: input =>
                      input
                        .toLowerCase()
                        .replace(/\s+/g, '-')
                        .replace(/[^a-z0-9-]/g, '')
                        .slice(0, 96),
                  },
                },
              ],
            },
          ],
        },
      ],
      validation: Rule => Rule.min(1).warning('Add at least one card.'),
    },
  ],

  preview: {
    select: {
      title: 'sectionTitle'
    },
    prepare({ title }) {
      return {
        title: title || 'Card Section',
        subtitle: 'Card Block with multiple cards'
      }
    }
  }
}
