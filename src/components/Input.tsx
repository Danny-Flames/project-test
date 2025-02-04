import React, { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
  labelClassName?: string;
  rightElement?: React.ReactNode;
  isPasswordInput?: boolean;
  hideLabel?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  containerClassName = '',
  labelClassName = '',
  className = '',
  rightElement,
  isPasswordInput = false,
  hideLabel = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  // Determine if we should show the password toggle
  const shouldShowPasswordToggle = isPasswordInput && !rightElement;

  // Password toggle button
  const passwordToggleButton = (
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="text-gray-400"
    >
      {showPassword ? (
        <MdVisibilityOff className="h-5 w-5" />
      ) : (
        <MdVisibility className="h-5 w-5" />
      )}
    </button>
  );

  // Determine input type
  const inputType = isPasswordInput
    ? showPassword ? 'text' : 'password'
    : props.type || 'text';

  return (
    <div className={`${containerClassName}`}>
      {label && !hideLabel && (
        <label
          htmlFor={props.id}
          className={`block text-sm font-normal text-gray-700 mb-1 ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <div className="relative w-full">
        <input
          className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 h-12 input ${className}`}
          {...props}
          type={inputType}
        />
        {(rightElement || shouldShowPasswordToggle) && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {shouldShowPasswordToggle ? passwordToggleButton : rightElement}
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};