# Auth Frontend

A modern, responsive authentication frontend application built with React, TypeScript, and Vite. This application provides a clean and user-friendly interface for user authentication, including login and registration functionality.

## Features

- 🔐 User Authentication (Login/Register)
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive Design
- 🔄 Session Management
- 🚀 Built with Vite for optimal performance
- 🎯 TypeScript for type safety
- 🎨 Toast Notifications for user feedback

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- React Hook Form
- Axios
- React Toastify

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

## Getting Started

1. Clone the repository:
```bash
git clone [your-repository-url]
cd auth-frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## Project Structure

```
src/
├── assets/         # Static assets
├── components/     # Reusable React components
├── hooks/         # Custom React hooks
├── pages/         # Page components
├── types/         # TypeScript type definitions
├── App.tsx        # Main application component
├── main.tsx       # Application entry point
└── index.css      # Global styles
```

## Features in Detail

### Authentication
- Login functionality with email/password
- Registration system
- Session management using JWT tokens
- Secure token storage in session storage

### UI/UX
- Clean and modern interface
- Responsive design for all screen sizes
- Toast notifications for user feedback
- Smooth transitions and animations
- Loading states and error handling