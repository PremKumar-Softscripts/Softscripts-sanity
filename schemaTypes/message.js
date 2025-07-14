import { FaVideo } from 'react-icons/fa'

export default {
  name: 'message',
  title: 'Message',
  type: 'document',
  icon: FaVideo,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string'
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'bannerImage',
      title: 'Thumbnail / Banner',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'videoType',
      title: 'Video Type',
      type: 'string',
      options: {
        list: [
          { title: 'YouTube / Vimeo / Loom Embed', value: 'embed' },
          { title: 'Video Upload', value: 'upload' },
          { title: 'Direct Video URL', value: 'url' }
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'videoEmbed',
      title: 'Video Embed Code',
      type: 'text',
      hidden: ({ parent }) => parent?.videoType !== 'embed'
    },
    {
      name: 'videoFile',
      title: 'Uploaded Video',
      type: 'file',
      options: { accept: 'video/*' },
      hidden: ({ parent }) => parent?.videoType !== 'upload'
    },
    {
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      hidden: ({ parent }) => parent?.videoType !== 'url'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: Rule => Rule.required()
    }
  ]
}
