
export default {
  name: 'imageWithText',
  title: 'Image / Video with Text',
  type: 'object',
  fields: [
    {
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video Embed (YouTube, Vimeo, etc.)', value: 'embed' },
          { title: 'Video URL', value: 'url' },
          { title: 'Video Upload', value: 'upload' }
        ],
        layout: 'radio'
      },
      initialValue: 'image',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.mediaType !== 'image'
    },
    {
      name: 'videoEmbed',
      title: 'Video Embed (iframe/URL)',
      type: 'url',
      hidden: ({ parent }) => parent?.mediaType !== 'embed'
    },
    {
      name: 'videoUrl',
      title: 'Video File URL',
      type: 'url',
      hidden: ({ parent }) => parent?.mediaType !== 'url'
    },
    {
      name: 'videoUpload',
      title: 'Upload Video',
      type: 'file',
      options: {
        accept: 'video/*'
      },
      hidden: ({ parent }) => parent?.mediaType !== 'upload'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'button',
      title: 'Button',
      type: 'object',
      fields: [
        { name: 'label', title: 'Button Label', type: 'string' },
        { name: 'url', title: 'Button URL', type: 'url' }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    },
    prepare({ title, media }) {
      return {
        title: title || 'Image with Text',
        media
      }
    }
  }
}
