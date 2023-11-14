import { BiCarousel as icon } from 'react-icons/bi';

export default {
    name: 'eventgallery',
    title: 'Event Gallery',
    description: 'A catch-all for images available for viewing on the website.',
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
    ],
    preview: {
        select: {
          title: 'alt',
        },
      },
  }