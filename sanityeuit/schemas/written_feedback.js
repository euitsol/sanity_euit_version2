export default {
    name: 'written_feedback',
    title: 'Written Feedback',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'string',
      },
  
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'message',
        title: 'Feedback message',
        type: 'string',
      },
    ],
  };
  