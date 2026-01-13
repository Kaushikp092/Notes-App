import React from "react";

const TextInput = ({ label, name, value, onChange, requried = false }) => {
   return (
      <div className="mb-4">
         <label htmlFor={name} className="black font-semibold">
            {label}
         </label>
         <input
            name={name}
            type="text"
            className="w-full p-2 border rounded-lg"
            value={value}
            onChange={onChange}
            required={requried}
         />
      </div>
   );
};

export default TextInput;
