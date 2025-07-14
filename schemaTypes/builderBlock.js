export default {
  name: 'builderBlock',
  type: 'object',
  title: 'Builder Block',
  fields: [
     {
      name: 'label',
      title: 'Label (for editor only)',
      type: 'string',
      description: 'Short label to help identify this section in the page builder UI.'
    },
    {
      name: 'block',
      title: 'Page Blocks',
      type: 'array',
      of: [
        {
          type: 'heroSection',
          title: 'Hero Section'
        },
        {
          type: 'textBlock',
          title: 'Text Block'
        },
        {
          type: 'imageBlock',
          title: 'Image Block'
        },
        {
          type: 'videoBlock',
          title: 'Video Block'
        },
        {
          type: 'buttonBlock',
          title: 'Button Block'
        },
        {
          type: 'cardSection',
          title: 'Card Section'
        },
        {
          type:'imageWithText',
          title:'Image with Text'
        }

      ]
    }
  ]
}
