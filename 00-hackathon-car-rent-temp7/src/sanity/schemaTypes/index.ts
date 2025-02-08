import { type SchemaTypeDefinition } from 'sanity'
import cars from './cars'
import order from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cars],
}