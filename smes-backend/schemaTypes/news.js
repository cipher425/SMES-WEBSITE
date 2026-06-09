
export default {
  name: 'news',
  title: 'Notice Board (News)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Notice Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'date',
      title: 'Date (e.g., Nov 12, 2026)',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
    },
    {
      name: 'file',
      title: 'Upload PDF Document (Optional)',
      type: 'file',
      options: {
        accept: 'application/pdf' 
      }
    },
    {
      name: 'externalLink',
      title: 'External Web Link (Optional)',
      type: 'url',
      description: 'Use this if you want to link to another website instead of uploading a PDF.'
    }
  ]
}