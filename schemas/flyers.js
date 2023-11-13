
import { BiCarousel as icon } from 'react-icons/bi';

export default {
    name: 'flyers',
    title: 'Flyers',
    type: 'document',
    icon,
    fields: [
        {
          name: 'title',
          title: 'Title of Event',
          type: 'string',
        },

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
          name: 'date',
          title: 'Date of Event (will automatically sort soonest to furthest)',
          type: 'datetime',
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
          title: 'title',
        },
      },
  }