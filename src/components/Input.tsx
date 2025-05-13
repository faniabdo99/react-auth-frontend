import React from 'react'
import type { FieldError } from 'react-hook-form'
import ErrorMessage from './ErrorMessage'

/**
 * Interface for Input component props
 * @interface InputProps
 */
interface InputProps {
  /** Unique identifier for the input element */
  id: string
  /** Label text to display above the input */
  label: string
  /** Type of input (e.g., "text", "password", "email"). Defaults to "text" */
  type?: string
  /** Current value of the input */
  value?: string
  /** Handler function called when input value changes */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /** Placeholder text to display when input is empty */
  placeholder?: string
  /** Error object from react-hook-form containing validation errors */
  error?: FieldError
  /** Additional props to spread to the input element */
  [key: string]: any
}

/**
 * Input component that renders a labeled form input with error handling
 * 
 * @component
 * @param {InputProps} props - The component props
 * @param {string} props.id - Unique identifier for the input element
 * @param {string} props.label - Label text to display above the input
 * @param {string} [props.type="text"] - Type of input
 * @param {string} [props.value] - Current value of the input
 * @param {Function} [props.onChange] - Handler function for value changes
 * @param {string} [props.placeholder] - Placeholder text
 * @param {FieldError} [props.error] - Error object from react-hook-form
 * @returns {JSX.Element} Rendered Input component
 */
const Input = ({ id, label, type = "text", value, onChange, placeholder, error, ...props }: InputProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-md border ${error ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:ring-2 ${error ? 'focus:ring-red-500' : 'focus:ring-blue-500'} focus:border-transparent transition duration-200 ease-in-out text-sm placeholder:text-sm`}
        placeholder={placeholder}
        {...props}
      />
      {error && <ErrorMessage message={error.message as string} />}
    </div>
  )
}

export default Input