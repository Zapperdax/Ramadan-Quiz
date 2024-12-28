"use client";
import React from 'react';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      className={className ? className : 'w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300'}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
