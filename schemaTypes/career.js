import { FaBriefcase } from 'react-icons/fa'

export default {
  name: 'career',
  title: 'Careers',
  type: 'document',
  icon: FaBriefcase,
  fields: [
    {
      name: 'title',
      title: 'Job Title',
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
      title: 'Job Description',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g., On-site, Remote, City/State'
    },
    {
      name: 'jobType',
      title: 'Job Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-Time', value: 'fullTime' },
          { title: 'Part-Time', value: 'partTime' },
          { title: 'Internship', value: 'internship' },
          { title: 'Volunteer', value: 'volunteer' },
          { title: 'Contract', value: 'contract' }
        ]
      }
    },
    {
      name: 'department',
      title: 'Department / Ministry',
      type: 'string'
    },
    {
      name: 'postedDate',
      title: 'Posted Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    },
    {
      name: 'applicationLink',
      title: 'Application Link',
      type: 'url',
      description: 'External form or page where candidates can apply'
    },
    {
      name: 'deadline',
      title: 'Application Deadline',
      type: 'datetime'
    },
    {
      name: 'isOpen',
      title: 'Currently Accepting Applications?',
      type: 'boolean',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'jobType'
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? subtitle.replace(/([A-Z])/g, ' $1').trim() : ''
      }
    }
  }
}
