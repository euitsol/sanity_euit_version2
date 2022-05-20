export default {
    name: 'course_product',
    title: 'Course_Product',
    type: 'document',
    fields: [
      {
        name: 'course_name',
        title: 'Course Name',
        type: 'string',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
      },
      {
        name: 'course_price',
        title: 'Course Price',
        type: 'number',
      },
      {
        name: 'overview',
        title: 'Course Overview',
        type: 'string',
      },
      {
        name: 'course_duration',
        title: 'Course Duration',
        type: 'number',
      },
      {
        name:'total_class',
        title:'Total Class',
        type:'number'
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
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        title: 'Course Module',
        name: 'course_module',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        title: 'Highlight',
        name: 'highlight',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        title: 'Topics',
        name: 'topics',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        title: 'Spftware Taught',
        name: 'software_taught',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        title: 'Career Support',
        name: 'career_support',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'course_name',
          maxLength: 96,
        },
      },
    ],
  };
  