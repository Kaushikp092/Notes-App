import React, { useState } from "react";

const NoteForm = () => {
   const [title, setTitle] = useState("");
   const [priority, setPriority] = useState("Medium"); //default medium
   const [category, setCategory] = useState("Work"); //default word
   const [description, setDescription] = useState("");
   return (
      <form action="" className="mb-6">
         {/* title input */}
         <div className="mb-4">
            <label htmlFor="title" className="black font-semibold">
               Title
            </label>
            <input
               type="text"
               className="w-full p-2 border rounded-lg"
               value={title}
               onChange={(e) => setPriority(e.target.value)} //use onChange to write into input field and use event(e) to write in input and show value in input
            />
         </div>

         {/* Priority input */}
         <div className="mb-4">
            <label htmlFor="priority" className="black font-semibold">
               Priority
            </label>
            <select
               type="text"
               className="w-full p-2 border rounded-lg"
               value={priority}
               onChange={(e) => setPriority(e.target.value)} //here also onChange is required to change the the option in input field
            >
               <option value="High">High</option>
               <option value="Medium">Medium</option>
               <option value="Low">Low</option>
            </select>
         </div>

         {/* Category input */}
         <div className="mb-4">
            <label htmlFor="category" className="black font-semibold">
               Category
            </label>
            <select
               type="text"
               className="w-full p-2 border rounded-lg"
               value={category}
               onChange={(e) => setCategory(e.target.value)} //here also onChange is required to change the Option in input field
            >
               <option value="Work">Work</option>
               <option value="Personal">Personal</option>
               <option value="Ideas">Ideas</option>
            </select>
         </div>

         {/* textarea input */}
         <div className="mb-4">
            <label htmlFor="description" className="black font-semibold">
               Description
            </label>
            <textarea
               type="text"
               className="w-full p-2 border rounded-lg"
               value={description}
               onChange={(e) => setDescription(e.target.value)} //here also onChange is required to change the description text area
            ></textarea>
         </div>

          <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600">Add Note</button> {/* added simple styling to the button */}
      </form>
   );
};

export default NoteForm;
