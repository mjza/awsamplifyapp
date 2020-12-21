/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote {
    onCreateNote {
      id
      name
      description
      image
      createdAt
      updatedAt
      NoteType {
        id
        name
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote {
    onUpdateNote {
      id
      name
      description
      image
      createdAt
      updatedAt
      NoteType {
        id
        name
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote {
    onDeleteNote {
      id
      name
      description
      image
      createdAt
      updatedAt
      NoteType {
        id
        name
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateNoteType = /* GraphQL */ `
  subscription OnCreateNoteType {
    onCreateNoteType {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNoteType = /* GraphQL */ `
  subscription OnUpdateNoteType {
    onUpdateNoteType {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNoteType = /* GraphQL */ `
  subscription OnDeleteNoteType {
    onDeleteNoteType {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
