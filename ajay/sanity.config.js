import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default defineConfig({
  name: 'default',
  title: 'ajay',

  projectId: '4dlvglex',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S, context) => {
        return S.list()
          .title('Content')
          .items([
            // Orderable Projects
            orderableDocumentListDeskItem({type: 'project', S, context}),
            
            // Other regular document types
            ...S.documentTypeListItems().filter(
              (listItem) => !['project'].includes(listItem.getId())
            ),
          ])
      },
    }), 
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
