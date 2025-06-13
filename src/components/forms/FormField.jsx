import React from 'react';

const FormField = ({ id, label, type = 'text', placeholder, value, onChange, isRequired = false, rows = 1 }) => {
    const InputComponent = type === 'textarea' ? 'textarea' : 'input';

    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-[#655945] font-medium mb-2">
                {label} {isRequired && <span className="text-red-500">*</span>}
            </label>
            <InputComponent
                id={id}
                type={type === 'textarea' ? undefined : type}
                onChange={onChange}
                required={isRequired}
                rows={rows}
                className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-educare-primary text-gray-800 ${type === 'textarea' ? 'resize-y' : ''}`}
            />
        </div>
    );
};

export default FormField;