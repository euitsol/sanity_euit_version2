export default {
    name: 'partners',
    title: 'Our Partners',
    type: 'document',
    fields: [
      {
        name: 'partner_name',
        title: 'Partner Name',
        type: 'string',
      },
  
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }
    ],
  };
  