import React from "react";
import Note from "./Note";

const NoteList = ({ notes, deleteNote }) => {
   // checking here if notes list is empty then no notes yet will shown after add note button
   if (notes.length === 0) {
      return <p className="text-center text-gray-500">No Notes Yet</p>;
   }
   return (
      <div className="space-y-4">
         {notes.map((note) => (
            // create new note.jsx component to make code clean and easy to understand
            <Note key={note.id} note={note} deleteNote={deleteNote} />
         ))}
      </div>
   );
};

export default NoteList;
