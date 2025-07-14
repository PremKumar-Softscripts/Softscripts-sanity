import { FaGripLines } from 'react-icons/fa';

export default {
  name: 'footerSetting',
  title: 'Footer',
  type: 'document',
  icon: FaGripLines,
  fields: [
    {
      name: 'footerTitle',
      title: 'Footer Title',
      type: 'string',
      description: 'Title of the footer section.',
    },
    {
      name: 'footerLogo',
      title: 'Footer Logo',
      type: 'image',
      description: 'Logo to display in the footer (optional).',
    },
    {
      name: 'footerText',
      title: 'Footer Text',
      type: 'text',
      description: 'Additional text content for the footer (e.g., about or description).',
    },

    //Multiple Footer Menus with Slug
    {
      name: 'footerMenus',
      title: 'Footer Menus',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Footer Menu Group',
          fields: [
            {
              name: 'menuTitle',
              type: 'string',
              title: 'Menu Title',
            },
            {
              name: 'links',
              type: 'array',
              title: 'Links',
              of: [
                {
                  type: 'object',
                  title: 'Link',
                  fields: [
                    {
                      name: 'label',
                      type: 'string',
                      title: 'Link Label',
                    },
                    {
                      name: 'slug',
                      type: 'slug',
                      title: 'Slug',
                      options: {
                        source: 'label',
                        maxLength: 96,
                        slugify: input =>
                          input
                            .toLowerCase()
                            .replace(/\s+/g, '-')
                            .replace(/[^a-z0-9-]/g, '')
                            .slice(0, 96),
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      description: 'Create multiple footer menus, each with its own title and links.',
    },

    // Address
    {
      name: 'addressSection',
      title: 'Address Section',
      type: 'object',
      fields: [
        {
          name: 'addressTitle',
          type: 'string',
          title: 'Address Title',
        },
        {
          name: 'address',
          type: 'string',
          title: 'Address',
        },
        {
          name: 'email',
          type: 'string',
          title: 'Email',
        },
        {
          name: 'phone',
          type: 'string',
          title: 'Phone Number',
        },
      ],
      description: 'Address, email, and phone details to be shown in the footer.',
    },

    //Social Links
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Social Link',
          fields: [
            {
              name: 'platform',
              type: 'string',
              title: 'Platform Name (e.g., Facebook, Twitter)',
            },
            {
              name: 'url',
              type: 'url',
              title: 'Profile URL',
            },
            {
              name: 'iconName',
              type: 'string',
              title: 'Icon Class or Name (e.g., "facebook-f", "twitter")',
              description: 'Use a FontAwesome icon class or SVG name.',
            },
          ],
        },
      ],
      description: 'List of social icons and their URLs.',
    },
    {
      name: 'copyrightText',
      title: 'Copyright',
      type: 'string',
      description: 'e.g., © 2025 Your Company. All rights reserved.',
    },
  ],
};
