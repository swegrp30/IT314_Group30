import React, { useState } from "react";
import '../style/Notes.css'
import ShowComments from "./ShowComments";
import Comments from "./Comments";

function Notes() {
  

  

  return (
    <div className="notes-container">
      <div className="notes-header">
        <h1>Comments</h1>
      </div>
      <Comments/>
      <ShowComments/>
      
      
      
    </div>
  );
}

export default Notes;