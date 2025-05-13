/**
 * Props interface for the ErrorMessage component
 * @interface ErrorMessageProps
 * @property {string} message - The error message to display
 */
interface ErrorMessageProps {
  message: string
}

/**
 * ErrorMessage Component
 * 
 * A component that displays an error message in red text
 * 
 * @component
 * @param {ErrorMessageProps} props - The component props
 * @param {string} props.message - The error message to display
 * @returns {JSX.Element} A div containing the error message in red text
 * 
 * @example
 * ```jsx
 * <ErrorMessage message="An error occurred" />
 * ```
 */
const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="text-red-500 text-sm">{message}</div>
  )
}

export default ErrorMessage