import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
  isBtnActive?: boolean; // New prop to control active state
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth = false,
  isBtnActive = true, // Default to active
  className = "",
  ...props
}) => {
  const baseStyles = "px-4 py-2 rounded-md transition-colors";
  const variantStyles = {
    primary: isBtnActive
      ? "bg-red-700 text-white hover:bg-red-800"
      : "bg-red-400 text-gray-300 cursor-not-allowed",
    secondary: isBtnActive
      ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
      : "bg-gray-300 text-gray-500 cursor-not-allowed",
    outline: isBtnActive
      ? "border border-gray-300 text-gray-700 hover:bg-gray-50"
      : "border border-gray-200 text-gray-400 cursor-not-allowed",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${
        fullWidth ? "w-full" : ""
      } ${!isBtnActive ? "cursor-not-allowed" : ""} ${className}`}
      disabled={!isBtnActive}
      {...props}
    >
      {children}
    </button>
  );
};
