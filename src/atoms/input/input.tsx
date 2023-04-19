import React, { ChangeEvent } from "react";

interface IProps {
  placeholder: string;
  value: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IProps> = ({ value, placeholder, name, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="border rounded-lg p-2 outline-none focus:border-2 focus:border-light-purple"
      name={name}
      maxLength={40}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
