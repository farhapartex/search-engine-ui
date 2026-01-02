import React from 'react';

const FormInput = ({
  label,
  id,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  extraLabel
}) => {
  return (
    <div>
      <div className={extraLabel ? "flex items-center justify-between mb-2" : "mb-2"}>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        {extraLabel}
      </div>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default FormInput;
