import { TiDocumentText as icon } from 'react-icons/ti';

export default {
  name: 'testimonials',
  title: 'Testimonial Quotes',
  type: 'document',
  icon,
  fields: [
    { 
      name: 'name', 
      title: 'Name', 
      type: 'string',
    },
    { 
      name: 'quote', 
      title: 'Quote', 
      type: 'array',
      of: [{type: 'block'}]
    }
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
