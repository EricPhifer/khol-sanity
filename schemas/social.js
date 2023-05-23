import { IoLogoMarkdown as icon } from 'react-icons/io';

export default {
  name: 'social',
  title: 'Social Connections',
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
      title: 'Link to Social Media Page',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'alt',
    },
  },
}