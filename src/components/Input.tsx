import React from 'react'
import type { FieldError } from 'react-hook-form'
import ErrorMessage from './ErrorMessage'

interface InputProps {
  id: string
  label: string
  type?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  error?: FieldError
  [key: string]: any
}

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