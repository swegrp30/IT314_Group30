import React, { useState } from "react";
import CreateAreaNotes from "./CreateAreaNotes";
import '../style/Notes.css'

function Notes() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="notes-container">
      <div className="notes-header">
        <h1>Opinions </h1>
      </div>

      <CreateAreaNotes onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <div className="notes-created-wish">
            <h1>{noteItem.title}</h1>
            <p>{noteItem.content}</p>
            <button onClick={() => deleteNote(index)}>DELETE</button>
          </div>
        );
      })}
    </div>
  );
}

export default Notes;