import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'empower-asia',
  title: 'Empower Asia',
  projectId: 'q2vlba35',
  dataset: 'production',
  apiVersion: '2021-10-21',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
