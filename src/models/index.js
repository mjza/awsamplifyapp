// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Note, NodeType } = initSchema(schema);

export {
  Note,
  NodeType
};