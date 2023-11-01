import React, { useState } from "react";
import CreateAreaWishlist from "./CreateAreaWishlist";
import '../style/Wishlist.css'

function App() {
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
    <div className="wishlist-container">
      <div className="wishlist-header">
        <h1>My Wishlist</h1>
      </div>

      <CreateAreaWishlist onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <div className="wishlist-created-wish">
            <h1>{noteItem.title}</h1>
            <p>{noteItem.content}</p>
            <button onClick={() => deleteNote(index)}>DELETE</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;