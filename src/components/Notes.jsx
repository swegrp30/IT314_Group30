import React, { useState } from "react";
import CreateAreaNotes from "./CreateAreaNotes";
import '../style/Notes.css'
import ShowComments from "./ShowComments";
import Comments from "./Comments";

function Notes() {
  

  

  return (
    <div className="notes-container">
      <div className="notes-header">
        <h1>Comments</h1>
      </div>
      <ShowComments/>
      <Comments/>
      
      
    </div>
  );
}

export default Notes;