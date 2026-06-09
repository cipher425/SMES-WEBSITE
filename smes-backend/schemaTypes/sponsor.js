
export default {
  name: 'sponsor',
  title: 'Sponsors & Partners',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Sponsor Company Name',
      type: 'string',
      
    },
    {
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      options: {
        hotspot: true 
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'website',
      title: 'Company Website URL (Optional)',
      type: 'url',
      description: 'If provided, clicking the logo will take the user to this website.'
    }
  ]
}