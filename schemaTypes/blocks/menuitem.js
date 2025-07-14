
export default {
    name: 'menuitem',
    title: 'Menu Item',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Label',
        type: 'string'
      },
      {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title', 
        maxLength: 96,
        slugify: input =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')       
            .replace(/[^a-z0-9-]/g, '') 
            .slice(0, 96)
      }
    },
      {
        name: 'page',
        title: 'Linked Page',
        type: 'reference',
        to: [{ type: 'page' }]
      },
      {
        name: 'hasSubmenu',
        type: 'boolean',
        title: 'Has Submenu'
      },
      {
        name: 'submenuItems',
        title: 'Submenu Items',
        type: 'array',
        of: [{ type: 'menuitem' }],
        hidden: ({ parent }) => !parent?.hasSubmenu
      }
    ]
  }
  
