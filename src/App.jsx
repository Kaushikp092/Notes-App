import React, { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

const App = () => {
   const [notes, setNotes] = useState(() => {
      const notes = JSON.parse(localStorage.getItem('notes'));
      return notes || [];
   });//checking here if notes is already in localstorage then it will show directly or shows No Notes Yet

   //using useEffect to store notes in localstorage
   useEffect(() => {
      localStorage.setItem("notes", JSON.stringify(notes));
   }, [notes]); //add to dependency and run this whenever notes changes

   const deleteNote = (id) => {
      const confirmDelete = window.confirm(
         "Are you sure you want to delete this note?"
      );

      if (confirmDelete) {
         setNotes(notes.filter((note) => note.id !== id));
      }
   };

   return (
      <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
         <h2 className="text-2xl font-bold mb-4 text-center">Notes App</h2>
         <NoteForm notes={notes} setNotes={setNotes} />{" "}
         {/* form data while store in setNotes in Arrays form */}
         <NoteList notes={notes} deleteNote={deleteNote} />
         {/* showing data sent in input in list*/}
      </div>
   );
};

export default App;
