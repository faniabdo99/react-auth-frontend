import { Link } from "react-router"
import useIsLoggedIn from "./hooks/useIsLoggedIn"

function App() {
  const { isLoggedIn, user } = useIsLoggedIn();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur p-12 rounded-lg shadow-xl border border-slate-200/20 transition duration-300 ease-in-out">
        <h1 className="text-3xl font-light text-slate-800 mb-10 text-center tracking-wide">
          Welcome to <span className="font-semibold">Our Glorious App!</span>
        </h1>
        {isLoggedIn ? (
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-light text-slate-800 mb-10 text-center tracking-wide">Welcome, {user.email}</h2>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => {
              localStorage.removeItem('token');
              localStorage.removeItem('refresh_token');
              localStorage.removeItem('user');
              window.location.reload();
            }}>Logout</button>
          </div>
        ) : (
          <>
        <Link to="/login" className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-4 px-8 rounded-md shadow-md transition-all duration-200 ease-in-out flex items-center justify-center space-x-2">
          <span>Login</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <br />
        <Link to="/register" className="w-full bg-blue-800 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-md shadow-md transition-all duration-200 ease-in-out flex items-center justify-center space-x-2">
          <span>Register</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        </>
        )}
      </div>
    </div>
  )
}

export default App
