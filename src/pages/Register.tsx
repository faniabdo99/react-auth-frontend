/**
 * Register Page Component
 * 
 * This component renders a registration form with name, email and password inputs.
 * It handles form validation, user registration, and redirects after successful account creation.
 * 
 * Features:
 * - Name, email and password validation using react-hook-form
 * - API integration with axios for registration requests
 * - Toast notifications for success/error feedback
 * - Responsive layout with decorative side panel on larger screens
 * - Password strength requirements enforcement
 * 
 * @component
 * @example
 * ```tsx
 * <Register />
 * ```
 */

import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import Input from '../components/Input'
import { useForm, type SubmitHandler } from 'react-hook-form'
import type { RegisterType } from '../types/RegisterType'
import axios, { type AxiosError } from 'axios'
import { toast } from 'react-toastify'

export default function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterType>();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    /**
     * Handles the registration form submission
     * 
     * Makes an API call to register the user and handles success/error responses
     * On success, redirects to login page after showing success message
     * On error, displays appropriate error message to user
     * 
     * @param {RegisterType} data - The form data containing name, email and password
     */
    const onRegisterSubmit: SubmitHandler<RegisterType> = (data) => {
        setIsLoading(true);
        // Send the request to the backend
        axios.post(import.meta.env.VITE_API_URL + '/auth/register', data)
            .then(() => {
                toast.success('Account created successfully! Redirecting to login page...');
                setTimeout(() => {
                    navigate('/login');
                }, 5000);
                setIsLoading(false);
            })
            .catch((error: AxiosError<RegisterType>) => {
                if (error.code === 'ERR_NETWORK'){
                    toast.error('Network error. Please check your internet connection and try again.');
                } else {
                    toast.error(error.response?.data.message);
                }
                setIsLoading(false);
            })
    }
    return (
        <div className="min-h-screen to-slate-900 flex flex-col md:flex-row items-center justify-center">
            <div className="min-h-screen w-full md:w-1/3 p-6 md:p-12 flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4">Welcome!</h1>
            <p className="text-sm text-slate-500 mb-8 md:mb-10">Please fill in the form below to create an account.</p>
          <form className="space-y-6" onSubmit={handleSubmit(onRegisterSubmit)}>
            <Input id="name" type="text" label="Name" {...register("name", { 
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters"
              }
            })} placeholder="Enter your name" error={errors.name} />
            <Input id="email" type="email" label="Email" {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address"
              }
            })} placeholder="your@email.com" error={errors.email} />
            <Input id="password" type="password" label="Password" {...register("password", { 
              required: "Password is required", 
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters"
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
                message: "Password must contain at least 8 characters, one letter, one number and one special character"
              }
            })} placeholder="••••••••" error={errors.password} />

            <button 
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-md shadow-md transition-all duration-200 ease-in-out hover:shadow-lg transform hover:-translate-y-0.5"
            >
                {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
            <p className="text-sm text-slate-500 text-center">Already have an account? <Link to="/login">Login here</Link></p>
          </form>
            </div>
            <div className="hidden md:block min-h-screen w-full md:w-2/3 bg-[url('https://picsum.photos/1920/1080?nature')] bg-cover bg-center relative">
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 md:p-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">Discover Our New AI Assistant</h2>
                <p className="text-lg md:text-xl text-center max-w-2xl">
                  Get personalized recommendations and insights with our cutting-edge AI technology. Your success journey starts here.
                </p>
              </div>
            </div>
      </div>
    )
}