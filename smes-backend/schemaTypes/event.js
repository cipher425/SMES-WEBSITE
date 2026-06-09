export default {
  name: 'event',
  title: 'Department Events',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'date',
      title: 'Date (e.g., Nov 10, 2026)',
      type: 'string', 
    },
    {
      name: 'time',
      title: 'Time (e.g., 02:00 PM)',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    }
  ]
}