import { FaCalendarAlt } from 'react-icons/fa'

export default {
  name: 'event',
  title: 'Events',
  type: 'document',
  icon: FaCalendarAlt,
  fields: [
    {
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'startDate',
      title: 'Start Date & Time',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'endDate',
      title: 'End Date & Time',
      type: 'datetime'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string'
    },
    {
      name: 'featuredImage',
      title: 'Banner Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'category',
      title: 'Event Category',
      type: 'reference',
      to: [{ type: 'category' }],
      options: {
        disableNew: false
      }
    },
    {
      name: 'isPublished',
      title: 'Publish this Event?',
      type: 'boolean',
      initialValue: true
    }
  ]
}
