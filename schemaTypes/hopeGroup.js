import { FaUsers } from 'react-icons/fa'

export default {
  name: 'hopeGroup',
  title: 'Hope Group',
  type: 'document',
  icon: FaUsers,
  fields: [
    {
      name: 'title',
      title: 'Group Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },

    // 🔗 Meet At
    {
      name: 'meetAt',
      title: 'Meet At',
      type: 'object',
      fields: [
        {
          name: 'type',
          title: 'Meeting Type',
          type: 'string',
          options: {
            list: [
              { title: 'In-Person', value: 'location' },
              { title: 'Online', value: 'online' }
            ],
            layout: 'radio'
          }
        },
        {
          name: 'platform',
          title: 'Platform or Location',
          type: 'string',
          description: 'E.g., Zoom, Google Meet, or Church Hall Room A'
        },
        {
          name: 'url',
          title: 'Link (if online)',
          type: 'url',
          hidden: ({ parent }) => parent?.type !== 'online'
        }
      ]
    },

    // 🧑‍🤝‍🧑 Leaders
    {
      name: 'leaders',
      title: 'Leader(s)',
      type: 'array',
      of: [{ type: 'string' }]
    },

    // 📅 Day & Time
    {
      name: 'day',
      title: 'Day',
      type: 'string',
      options: {
        list: [
          'Sunday', 'Monday', 'Tuesday', 'Wednesday',
          'Thursday', 'Friday', 'Saturday'
        ]
      }
    },
    {
      name: 'time',
      title: 'Time',
      type: 'string',
      description: 'e.g., 6:30 PM'
    },

    // 🧒 Age Groups
    {
      name: 'ageGroup',
      title: 'Age Group',
      type: 'string',
      options: {
        list: [
          { title: 'All Ages', value: 'all' },
          { title: 'Adults', value: 'adults' },
          { title: 'Teens', value: 'teens' },
          { title: 'Kids', value: 'kids' },
          { title: 'Young Adults', value: 'youngAdults' },
          { title: 'Seniors', value: 'seniors' }
        ]
      }
    },

    // 🏫 Campus
    {
      name: 'campus',
      title: 'Campus',
      type: 'string'
    },

    // 🎯 Group Type
    {
      name: 'type',
      title: 'Group Type',
      type: 'string',
      description: 'e.g., class'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'day'
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? `Meets on ${subtitle}` : 'Hope Group'
      }
    }
  }
}
