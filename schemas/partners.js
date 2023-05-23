import { IoLogoMarkdown as icon } from 'react-icons/io';

export default {
    name: 'partners',
    title: 'Our Partners',
    type: 'document',
    icon,
    fields: [
        {
            name: 'image', 
            title: 'Background Image', 
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
          name: 'source',
          title: 'Credit to the Creator or Owner of the Image',
          type: 'string',
        },
        {
          name: 'link',
          title: 'Link to Partners Website (URL)',
          type: 'string',
        },
    ],
    preview: {
        select: {
          title: 'alt',
        },
      },
  }