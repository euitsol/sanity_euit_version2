export default {
    name: 'professiona_expert_opinion',
    title: 'Professional Expert Opinion',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'job_title',
        title: 'Job title',
        type: 'string',
      },
      {
        name: 'post_link',
        title: 'Post Link',
        type: 'string',
      },
      {
        name: 'person_image',
        title: 'Person Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'feedback_image',
        title: 'Feedback Image/Screen shot',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      }
      
    ],
  };
  