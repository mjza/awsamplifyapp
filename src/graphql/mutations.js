/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
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
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
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
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
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
export const createNoteType = /* GraphQL */ `
  mutation CreateNoteType(
    $input: CreateNoteTypeInput!
    $condition: ModelNoteTypeConditionInput
  ) {
    createNoteType(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateNoteType = /* GraphQL */ `
  mutation UpdateNoteType(
    $input: UpdateNoteTypeInput!
    $condition: ModelNoteTypeConditionInput
  ) {
    updateNoteType(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteNoteType = /* GraphQL */ `
  mutation DeleteNoteType(
    $input: DeleteNoteTypeInput!
    $condition: ModelNoteTypeConditionInput
  ) {
    deleteNoteType(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
