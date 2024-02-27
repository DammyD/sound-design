export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'image',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'company',
      type: 'string',
      title: 'Company',
    },
    {
      name: 'message',
      type: 'text',
      title: 'Message',
    },
  ],
}
