import React, { useState, useEffect } from 'react';
import './App.css';
import { API, Storage, graphqlOperation } from 'aws-amplify';
import { Auth } from '@aws-amplify/auth';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listNotes, listNoteTypes, listNotesByUpdatedAt } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';

const initialFormState = { name: '', description: '', noteNoteTypeId: '' }

function App() {


  const [user, setUser] = useState({ username: '' });
  const [notes, setNotes] = useState([]);
  const [noteTypes, setNoteTypes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    fetchNoteTypes();
  }, []);

  useEffect(() => {
    fetchNotesByUpdatedAt(user);
  }, [user]);

  async function fetchUser() {
    await Auth.currentUserInfo().then(oUser => {
      setUser(oUser);
    });
  }

  async function fetchNoteTypes() {
    const apiData = await API.graphql({ query: listNoteTypes });
    var items = apiData.data.listNoteTypes.items;
    // Sort small list!
    items.sort(function (a, b) {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    });
    items.splice(0, 0, { id: "", name: "" });
    setNoteTypes(items);
  }

  /*
  async function fetchNotes(user) {
    if (!user || !user.username || user.username.length < 0) {
      return;
    }      
    const apiData = await API.graphql(
      graphqlOperation(listNotes,   
        {
          filter: {
            owner: {
              eq: user.username
            }
          }
        }      
      )
    );
    const notesFromAPI = apiData.data.listNotes.items;
    await Promise.all(notesFromAPI.map(async note => {
      if (note.image) {
        const image = await Storage.get(note.image);
        note.image = image;
      }
      return note;
    }))
    setNotes(apiData.data.listNotes.items);
  }
  */

  async function fetchNotesByUpdatedAt(user) {
    if (!user || !user.username || user.username.length < 0) {
      return;
    }
    const apiData = await API.graphql(
      graphqlOperation(listNotesByUpdatedAt,
        // Sort and filter long arrays
        {
          owner: user.username,
          sortDirection: 'DESC',
          limit: 100
        }
      )
    );
    const notesFromAPI = apiData.data.listNotesByUpdatedAt.items;
    await Promise.all(notesFromAPI.map(async note => {
      if (note.image) {
        const image = await Storage.get(note.image);
        note.image = image;
      }
      return note;
    }))
    setNotes(apiData.data.listNotesByUpdatedAt.items);
  }

  async function createNote() {
    if (!formData.name || !formData.description) return;
    const apiData = await API.graphql({ query: createNoteMutation, variables: { input: formData } });
    const obj = apiData.data.createNote;
    if (formData.image) {
      const image = await Storage.get(formData.image);
      obj.image = image;
    }
    setNotes([obj, ...notes]);
    setFormData(initialFormState);
  }

  async function deleteNote({ id }) {
    await API.graphql({ query: deleteNoteMutation, variables: { input: { id } } });
    const newNotesArray = notes.filter(note => note.id !== id);
    setNotes(newNotesArray);
  }

  async function onChange(e) {
    if (!e.target.files[0]) return
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name });
    await Storage.put(file.name, file);
    fetchNotesByUpdatedAt(user); // if the item is already created the image will be add here 
  }

  async function onChangeSelect(e) {
    var id = e.target.value;
    setFormData({ ...formData, noteNoteTypeId: id });
  }

  return (
    <div className="App">
      <div>
        <p>{user ? user.username : ""}</p>
      </div>
      <h1>My Notes App</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value })}
        placeholder="Note name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value })}
        placeholder="Note description"
        value={formData.description}
      />
      <input
        type="file"
        onChange={onChange}
      />
      <select onChange={onChangeSelect} value={formData.noteNoteTypeId}>
        {
          noteTypes.map(noteType => (
            <option value={noteType.id} key={noteType.id}>{noteType.name}</option>
          ))
        }
      </select>
      <button onClick={createNote}>Create Note</button>
      <div style={{ marginBottom: 30 }}>
        {
          notes.map(note => (
            <div key={note.id || note.name}>
              <h2>{note.name}</h2>
              <p>{note.description}</p>
              <p>{note.NoteType ? note.NoteType.name : ""}</p>
              <p>{note.createdAt}</p>
              <p>{note.updatedAt}</p>
              <p>{note.owner}</p>
              <button onClick={() => deleteNote(note)}>Delete note</button>
              {
                note.image && <img alt={note.name} src={note.image} style={{ width: 400 }} />
              }
            </div>
          ))
        }
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);