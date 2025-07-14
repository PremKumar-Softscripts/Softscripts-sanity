import { FaEnvelopeOpenText } from 'react-icons/fa'

export default {
  name: 'contactRegistration',
  title: 'Contact Submissions',
  type: 'document',
  icon: FaEnvelopeOpenText,
  fields: [
    {
      name: 'name',
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
      title: 'Message',
      type: 'text'
    },
    {
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true
    }
  ]
}
