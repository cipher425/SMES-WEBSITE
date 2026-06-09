
export default {
  name: 'teamMember',
  title: 'Team Members',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category (Where should this person appear?)',
      type: 'string',
      options: {
        list: [
          { title: 'Faculty Member', value: 'faculty' },
          { title: 'SMES Core Committee', value: 'smes' },
          { title: 'Head of Department', value: 'hod' },
          { title: 'Director', value: 'director' }
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'role',
      title: 'Role / Designation',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Director\'s Message / Short Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Profile Picture',
      type: 'image',
      options: {
        hotspot: true 
      }
    },
    // Added these for HOD/Faculty contact flexibility
    {
      name: 'email',
      title: 'Email Address (Optional)',
      type: 'string'
    },
    {
      name: 'phone',
      title: 'Office Phone Number (Optional)',
      type: 'string'
    }
  ]
}