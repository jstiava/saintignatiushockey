import type { CollectionConfig } from 'payload'

export const Teams: CollectionConfig = {
    slug: 'teams',
    labels: {
        singular: 'Team',
        plural: 'Teams',
    },
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'season'],
    },
    fields: [
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            admin: {
                position: 'sidebar',
                description: 'Used to generate the page URL',
            },
        },
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'season',
            type: 'text',
            required: true,
        },
        {
            name: 'isActive',
            type: 'checkbox',
        },
        {
            name: 'description',
            type: 'textarea',
            required: false,
            maxLength: 300,
            admin: {
                rows: 5,
                placeholder: 'Enter a short description...',
                description: 'Maximum 300 characters.',
            },
        },
    ],
}
