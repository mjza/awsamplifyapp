/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      image
      NoteType {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        NoteType {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getNoteType = /* GraphQL */ `
  query GetNoteType($id: ID!) {
    getNoteType(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listNoteTypes = /* GraphQL */ `
  query ListNoteTypes(
    $filter: ModelNoteTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNoteTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
