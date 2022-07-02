export default {
    name: 'student_success',
    title: 'Student Success',
    type: 'document',
    fields: [
      {
        name: 'student_name',
        title: 'Student Name',
        type: 'string',
      },
      {
        name: 'course',
        title: 'Course',
        type: 'string',
      },
      {
        name: 'batch',
        title: 'Batch',
        type: 'string',
      },
      {
        name: 'post_link',
        title: 'post Link',
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
  