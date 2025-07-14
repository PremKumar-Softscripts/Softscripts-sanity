import { FaCog } from 'react-icons/fa';

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: FaCog,
  fields: [
    // Basic Site Info
    {
      name: 'siteName',
      type: 'string',
      title: 'Site Name',
      description: 'Enter the name of your site.',
    },
    {
      name: 'favicon',
      type: 'image',
      title: 'Favicon',
      options: {
        hotspot: true,
      },
      description: 'Upload your site favicon (16x16px recommended).',
    }
  ],
};
