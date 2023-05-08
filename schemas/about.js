import { AiFillQuestionCircle as icon } from 'react-icons/ai';

export default {
  name: 'about',
  title: 'About Accordion',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    { 
      name: 'dropcontent', 
      title: 'Drop Content', 
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