import type { CollectionConfig } from 'payload'
import { Content } from '@/blocks/Content/config'
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'

const blocks = [
  Content,
  // PeopleList,
  // CardSlider,
  // AthleticTrophyBanner,
  // Map,
  // Carousel,
  // DramaticBanner,
  // StatisticsBanner,
  // Void,
  // Donate
]

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    group: 'Content',
    // components: {
    //   edit: {
    //     beforeDocumentControls: ['@/components/MakeFrontPageButton'],
    //   },
    //   listMenuItems: ['@/components/QuickAddPage'],
    // },
    defaultColumns: ['title', '_status', 'slug', 'updatedAt'],
    useAsTitle: 'title',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'General',
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'publishedAt',
              type: 'date',
              admin: {
                position: 'sidebar',
              },
            },
            {
              name: 'slug',
              type: 'text',
              required: true,
              admin: {
                position: 'sidebar',
              },
            },
          ],
        },
        {
          fields: [
            {
              name: 'blocks',
              type: 'blocks',
              blocks,
              required: false,
              admin: {
                initCollapsed: false,
              },
            },
          ],
          label: 'Content',
        },
      ],
    },
  ],
  versions: {
    drafts: {
      autosave: true,
      // schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
