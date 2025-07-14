import { FaClock } from 'react-icons/fa'

export default {
  name: 'liveService',
  title: 'Live Service',
  type: 'document',
  icon: FaClock,
  fields: [
    {
      name: 'title',
      title: 'Service Title',
      type: 'string',
      initialValue: 'Next Live Service'
    },
    {
      name: 'startTime',
      title: 'Next Service Start Time',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'streamUrl',
      title: 'Streaming URL (Optional)',
      type: 'url',
      description: 'Link to the live service page, YouTube, Vimeo, or custom player'
    },
    {
      name: 'note',
      title: 'Note (Optional)',
      type: 'text',
      description: 'E.g., “Join us Sunday at 10 AM EST for worship”'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'startTime'
    }
  }
}
