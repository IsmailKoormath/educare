import React from 'react';

const SelectField = ({ id, label, value, onChange, options, isRequired = false }) => {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-[#655945] text-lg font-medium mb-2 sr-only"> 
                {label} {isRequired && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
                <select
                    id={id}
                    value={value}
                    onChange={onChange}
                    required={isRequired}
                    className="appearance-none w-full p-2 border border-gray-300 rounded-md bg-[#FFF3E1] text-[#655945] focus:outline-none focus:ring-2 focus:ring-educare-primary pr-10 cursor-pointer"
                >
                    <option value="" disabled hidden>{label}</option> 
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#655945]">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default SelectField;