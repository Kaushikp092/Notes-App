import React, { useState } from "react";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import TextArea from "./inputs/TextArea";

const NoteForm = ({ notes, setNotes }) => {
   //if multiple inputs is there then instead of defining single useState we use object
   const [formData, setFormData] = useState({
      title: "",
      priority: "Medium",
      category: "Work",
      description: "",
   });

   const [isFormVisible, setIsFormVisible] = useState(false);

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
         description: "",
      });
   };
   return (
      <>
         {/* Toggle Button */}
         {/* Add new functionality onclick*/}
         <button
            onClick={() => setIsFormVisible(!isFormVisible)}
            className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4"
         >
            {isFormVisible ? "Hide Form" : "Add New Note"}
         </button>

         {/* Form */}
         {/* if isformvisible is true then only the form automatically will be shown in ui*/}
         {isFormVisible && (
            <form onSubmit={handleSubmit} className="mb-6">
               {/* title input */}
               <TextInput
                  label="Title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  requried
               />

               {/* Priority input */}
               <SelectInput
                  // labal=title
                  label="Priority"
                  //name is for setting input field options
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  // sending priority options here
                  options={[
                     //passing in objects arrays form
                     { value: "High", label: "High" },
                     { value: "Medium", label: "Medium" },
                     { value: "Low", label: "Low" },
                  ]}
               />

               {/* Category input */}
               <SelectInput
                  label="Category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  //sending category options
                  options={[
                     { value: "Work", label: "Work" },
                     { value: "Personal", label: "Personal" },
                     { value: "Ideas", label: "Ideas" },
                  ]}
               />

               {/* textarea input */}
               <TextArea
                  label="Description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  requried
               />

               <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600">
                  Add Note
               </button>
               {/* added simple styling to the button */}
            </form>
         )}
      </>
   );
};

export default NoteForm;
