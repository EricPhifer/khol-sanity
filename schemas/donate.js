import { FaDollarSign as icon } from 'react-icons/fa';

export default {
  name: 'donate',
  title: 'Donation Options',
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
      name: 'link',
      title: 'Link to Donation Page',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'alt',
    },
  },
}