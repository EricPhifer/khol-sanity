import { FiUsers as icon } from 'react-icons/fi';

export default {
    name: 'members',
    title: 'Board Members',
    type: 'document',
    icon,
    fields: [
      {
        name: 'name',
        title: 'Name of Member',
        type: 'string',
      },
      {
          name: 'image', 
          title: 'Member Image', 
          type: 'image',
          options: {
              hotspot: true
          } 
      },
      {
        name: 'alt',
        title: 'Alternative Text for Image',
        type: 'string',
      },
      { 
        name: 'content', 
        title: 'Content', 
        type: 'array',
        of: [{type: 'block'}]
      }
    ],
    preview: {
        select: {
          title: 'name',
        },
      },
  }