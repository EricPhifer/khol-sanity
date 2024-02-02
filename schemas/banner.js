import { GrContact as icon } from 'react-icons/gr';

export default {
    name: 'banner',
    title: 'Banner Message',
    type: 'document',
    icon,
    fields: [
      { 
        name: 'title', 
        title: 'CMS usaage only title', 
        type: 'string',
      },
      { 
        name: 'message', 
        title: 'Banner Message', 
        type: 'array',
        of: [
          {type: 'block'},
        ]
      },
    ],
  }