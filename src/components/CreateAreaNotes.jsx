import React, { useState } from "react";
import '../style/Notes.css'

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function handleKeyUp(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevent form submission on Enter press
      if (note.title.trim() !== "" && note.content.trim() !== "") {
        // Only add the wish if at least one of the fields (title, content) is not empty.
        props.onAdd({
          title: note.title.trim().replace(/\s{2,}/g, ' '),
          content: note.content.trim().replace(/\s{2,}/g, ' ').replace(/\n{2,}/g, '\n')
        });
        setNote({
          title: "",
          content: ""
        });
      }
    }
  }

  function submitNote(event) {
    event.preventDefault(); // Prevent form submission
    if (note.title.trim() !== "" && note.content.trim() !== "") {
      // Only add the wish if anyone of the field (title, content) is not empty.
      props.onAdd({
        title: note.title.trim().replace(/\s{2,}/g, ' '),
        content: note.content.trim().replace(/\s{2,}/g, ' ').replace(/\n{2,}/g, '\n')
      });
      setNote({
        title: "",
        content: ""
      });
    }
  }

  return (
    <div>
      <form className="notes-form">
        <input
          className="notes-form-input"
          name="title"
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          className="notes-form-textarea"
          name="content"
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          value={note.content}
          placeholder="Take a note"
          rows="3"
        />
        <button className="notes-form-add-button" onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
