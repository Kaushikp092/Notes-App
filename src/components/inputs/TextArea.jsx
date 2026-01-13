import React from "react";

const TextArea = ({ label, name, value, onChange, requried = false }) => {
   return (
      <div className="mb-4">
         <label htmlFor={name} className="black font-semibold">
            {label}
         </label>
         <textarea
            name={name}
            type="text"
            className="w-full p-2 border rounded-lg"
            value={value}
            onChange={onChange} 
            required
         ></textarea>
      </div>
   );
};

export default TextArea;
