import React from 'react';

type InputProps = {
  label: string;
  id: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  value?: string|number;
  onChange?:(e: React.ChangeEvent<HTMLInputElement>) => void;
  // Add other props as needed, like 'value', 'onChange', etc.
}

const Input: React.FC<InputProps> = ({ label, id, ...rest }) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={id} className="mb-2 text-lg">{label}</label>
      <input
        id={id}
        {...rest}
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
    </div>
  );
};

export default Input;
