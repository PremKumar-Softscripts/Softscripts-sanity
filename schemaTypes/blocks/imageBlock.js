export default {
  name: 'imageBlock',
  title: 'Image Block',
  type: 'object',
  fields: [
    // -------- Content --------
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
    }
      ],
}
