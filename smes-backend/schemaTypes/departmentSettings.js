
export default {
    name: 'departmentSettings',
    title: 'Department Settings',
    type: 'document',
    fields: [
        {
            name: 'address',
            title: 'Official Physical Address',
            type: 'text',

        },
        {
            name: 'generalEmail',
            title: 'General / SMES Email Address',
            type: 'string',
        },
        {
            name: 'generalPhone',
            title: 'General Department Phone Number',
            type: 'string',
        },
        {
            name: 'workingHours',
            title: 'Working Hours',
            type: 'string',
            description: 'e.g., Mon-Fri, 9:00 AM - 5:00 PM'
        },
        {
            name: 'mapEmbedUrl',
            title: 'Google Maps Embed URL',
            type: 'url',
            description: 'Go to Google Maps -> Share -> Embed a map -> Copy the "src" URL'
        },
        {
            name: 'registrationFormUrl',
            title: 'Google Form Embed URL',
            type: 'url',
            description: 'https://docs.google.com/forms/d/e/1FAIpQLSf-mV35rDdldeGaqo-SdRWe078xFHaoSEDFw5WzyVaufIapdA/viewform?usp=header'
        }
    ]
}