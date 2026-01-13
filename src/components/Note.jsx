import React from "react";

const Note = ({ note, deleteNote }) => {
   return (
      <div
         className="p-4 bg-white rounded-lg shadow-md border-l-6"
         style={{
            borderColor:
               note.priority === "High"
                  ? "red"
                  : note.priority === "Medium"
                  ? "orange"
                  : "green",
         }}
      >
         {/* creating div below add note button where all input data will show in ui */}

         {/* Showing input title in first*/}
         <h3 className="text-lg font-bold">{note.title}</h3>

         {/* Showing priority*/}
         <p className="text-sm text-gray-600">
            <strong>Priority:</strong> {note.priority}
         </p>

         {/* Showing category*/}
         <p className="text-sm text-gray-600">
            <strong>Category:</strong> {note.category}
         </p>

         {/* Showing Description*/}
         <p className="text-sm text-gray-600">
            <strong>Description:</strong> {note.description}
         </p>

         <button
            onClick={() => deleteNote(note.id)}
            className="mt-3 text-red-500 cursor-pointer transition hover:text-re>d-700"
         >
            Delete
         </button>
      </div>
   );
};

export default Note;
