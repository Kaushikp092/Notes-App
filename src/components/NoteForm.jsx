import React, { useState } from "react";

const NoteForm = ({ notes, setNotes }) => {
   //if multiple inputs is there then instead of defining single useState we use object
   const [formData, setFormData] = useState({
      title: "",
      priority: "Medium",
      category: "Work",
      description: "",
   });

   // single function to multiple use
   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value, //accessing value using name and able to select or write into input
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      //validation check that title and description should not be empty
      if (!formData.title || !formData.description) return;

      //Create note object
      const newNote = { id: Date.now(), ...formData };

      //Add notes to state
      setNotes([newNote, ...notes]);

      //Reset form data After submitting data
      setFormData({
         title: "",
         category: "Work",
         priority: "Medium",
         description: ""

   })
   };
   return (
      <form onSubmit={handleSubmit} className="mb-6">
         {/* title input */}
         <div className="mb-4">
            <label htmlFor="title" className="black font-semibold">
               Title
            </label>
            <input
               name="title"
               type="text"
               className="w-full p-2 border rounded-lg"
               value={formData.title}
               onChange={handleChange} //change this into function handleChange
            />
         </div>
         {/* Priority input */}
         <div className="mb-4">
            <label htmlFor="priority" className="black font-semibold">
               Priority
            </label>
            <select
               name="priority"
               type="text"
               className="w-full p-2 border rounded-lg"
               value={formData.priority}
               onChange={handleChange} //change this into function handleChange
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
               name="category"
               type="text"
               className="w-full p-2 border rounded-lg"
               value={formData.category}
               onChange={handleChange} //change this into function handleChange
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
               name="description"
               type="text"
               className="w-full p-2 border rounded-lg"
               value={formData.description}
               onChange={handleChange} //change this into function handleChange
            ></textarea>
         </div>
         <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600">
            Add Note
         </button>
         {/* added simple styling to the button */}
      </form>
   );
};

export default NoteForm;
