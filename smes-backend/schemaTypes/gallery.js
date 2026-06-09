
export default {
  name: 'gallery',
  title: 'Gallery Images',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Image Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category (e.g., Field Trip, Academics, Event)',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Upload Image',
      type: 'image',
      options: {
        hotspot: true // Lets you crop the image focal point in the dashboard!
      },
      validation: Rule => Rule.required()
    }
  ]
}