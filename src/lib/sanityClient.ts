import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'q2vlba35',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2021-10-21',
});

// Keep legacy export alias used by existing pages
export const sanityClient = client;

const builder = imageUrlBuilder(client);
export const urlFor = (source: SanityImageSource) => builder.image(source);

export interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  author?: string;
  publishedAt?: string;
  mainImage?: SanityImageSource & { alt?: string };
  excerpt?: string;
  body?: unknown[];
  category?: string;
}
