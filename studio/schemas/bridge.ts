import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'bridge',
  title: 'Bridges for Buddhists',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short description shown on the card',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'pdfFile',
      title: 'PDF File',
      type: 'file',
      options: { accept: 'application/pdf' },
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Used for sorting (lower numbers appear first)',
    }),
  ],
  preview: {
    select: { title: 'title', order: 'order' },
    prepare({ title, order }) {
      return { title, subtitle: order != null ? `Order: ${order}` : '' };
    },
  },
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});
