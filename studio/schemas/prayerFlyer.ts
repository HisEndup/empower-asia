import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'prayerFlyer',
  title: 'Prayer Flyer',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'flyer',
      title: 'Flyer Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
      ],
    }),
    defineField({
      name: 'downloadLink',
      title: 'Download Link (PDF or image URL)',
      type: 'url',
    }),
  ],
  preview: {
    select: { title: 'title', media: 'flyer' },
  },
});
