export default {
  name: 'eventRegistration',
  title: 'Event Registration',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email()
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string'
    },
    {
      name: 'message',
      title: 'Message / Notes',
      type: 'text'
    },
    {
      name: 'event',
      title: 'Registered Event',
      type: 'reference',
      to: [{ type: 'event' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'registeredAt',
      title: 'Registered At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true
    },
    {
      name: 'status',
      title: 'Reply Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Replied', value: 'replied' },
          { title: 'Ignored', value: 'ignored' }
        ],
        layout: 'radio'
      },
      initialValue: 'pending'
    }
  ]
}
