import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import deskStructure from './schemaTypes/deskStructure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { colorInput } from '@sanity/color-input'
import { media } from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'Softscripts',

  projectId: '1i1sis37',
  dataset: 'production',

   plugins: [
    deskTool({
      structure: deskStructure
    }),
    visionTool(),
    colorInput(),
    media()
  ],

  schema: {
    types: schemaTypes,
  },
})
