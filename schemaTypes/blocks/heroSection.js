export default {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    // -------- Content --------
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    },
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'text', title: 'Text', type: 'string' },
            { name: 'url', title: 'Link', type: 'url' },
            { name: 'openInNewTab', title: 'Open in New Tab', type: 'boolean' },
          ],
        },
      ],
    },

    // -------- Background Selector --------
    {
      name: 'backgroundType',
      title: 'Background Type',
      type: 'string',
      options: {
        list: ['color', 'image', 'video', 'gradient'],
        layout: 'dropdown',
      },
    },

    // -------- Background: Color --------
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      hidden: ({ parent }) => parent?.backgroundType !== 'color',
    },

    // -------- Background: Image --------
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      hidden: ({ parent }) => parent?.backgroundType !== 'image',
    },

    // -------- Background: Video Type Selector --------
    {
      name: 'videoSourceType',
      title: 'Video Source Type',
      type: 'string',
      options: {
        list: ['upload', 'embed'],
        layout: 'radio',
      },
      hidden: ({ parent }) => parent?.backgroundType !== 'video',
    },

    // -------- Background: Video Upload --------
    {
      name: 'backgroundVideo',
      title: 'Video File (MP4)',
      type: 'file',
      options: {
        accept: 'video/mp4',
      },
      hidden: ({ parent }) =>
        parent?.backgroundType !== 'video' || parent?.videoSourceType !== 'upload',
    },

    // -------- Background: Video Embed --------
    {
      name: 'videoEmbedCode',
      title: 'Embed Code (YouTube/Vimeo)',
      type: 'text',
      description: 'Paste embed iframe code from YouTube, Vimeo, etc.',
      hidden: ({ parent }) =>
        parent?.backgroundType !== 'video' || parent?.videoSourceType !== 'embed',
    },

    // -------- Background: Gradient --------
    {
      name: 'backgroundGradient',
      title: 'Gradient (CSS string)',
      type: 'string',
      hidden: ({ parent }) => parent?.backgroundType !== 'gradient',
    }
  ],
}
