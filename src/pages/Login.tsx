/**
 * Login Page Component
 * 
 * This component renders a login form with email and password inputs.
 * It handles form validation, user authentication, and redirects after successful login.
 * 
 * Features:
 * - Email and password validation using react-hook-form
 * - API integration with axios for login requests
 * - Toast notifications for success/error feedback
 * - Local storage management for auth tokens and user data
 * - Responsive layout with decorative side panel on larger screens
 * 
 * @component
 * @example
 * ```tsx
 * <Login />
 * ```
 */

import { useState } from 'react'
import Input from '../components/Input'
import { Link, useNavigate } from 'react-router'
import { useForm, type SubmitHandler } from 'react-hook-form'
import type { LoginType } from '../types/LoginType'
import type { AxiosError, AxiosResponse } from 'axios'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginType>();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    /**
     * Handles the login form submission
     * 
     * @param {LoginType} data - The form data containing email and password
     */
    const onLoginSubmit: SubmitHandler<LoginType> = (data) => {
        setIsLoading(true);
        // Send the request to the backend
        axios.post(import.meta.env.VITE_API_URL + '/auth/login', data)
            .then((response: AxiosResponse<LoginType>) => {
                toast.success('Login successful! Redirecting to homepage...');
                // Delete previous tokens
                localStorage.removeItem('token');
                localStorage.removeItem('refresh_token');
                localStorage.removeItem('user');
                // Decode token and save to local storage
                localStorage.setItem('token', response.data.access_token);
                localStorage.setItem('refresh_token', response.data.refresh_token);
                localStorage.setItem('user', JSON.stringify(response.data.user));

                setTimeout(() => {
                    navigate('/');
                }, 5000);
                setIsLoading(false);
            }).catch((error: AxiosError<LoginType>) => {
                if (error.code === 'ERR_NETWORK'){
                    toast.error('Network error. Please check your internet connection and try again.');
                } else {
                    toast.error(error.response?.data.message);
                }
            })
    }
    return (
        <div className="min-h-screen to-slate-900 flex flex-col md:flex-row items-center justify-center">
            <div className="min-h-screen w-full md:w-1/3 p-6 md:p-12 flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4">Welcome Back!</h1>
            <p className="text-sm text-slate-500 mb-8 md:mb-10">Please fill in the form below to login.</p>
          <form className="space-y-6" onSubmit={handleSubmit(onLoginSubmit)}>
            <Input id="email" type="email" label="Email" {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address"
              }
            })} placeholder="your@email.com" error={errors.email} />
            <Input id="password" type="password" label="Password" {...register("password", { required: "Password is required" })} placeholder="••••••••" error={errors.password} />
            <button 
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-md shadow-md transition-all duration-200 ease-in-out hover:shadow-lg transform hover:-translate-y-0.5"
            >
                {isLoading ? 'Logging in...' : 'Login'}
            </button>
            <p className="text-sm text-slate-500 text-center">Don't have an account? <Link to="/register">Register here</Link></p>
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