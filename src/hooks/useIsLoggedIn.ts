import { useEffect, useState } from "react";

/**
 * Custom hook to check if a user is logged in and get their user data
 * 
 * This hook checks localStorage for an authentication token and user data.
 * If found, it sets the logged in state to true and loads the user data.
 * 
 * @returns {Object} An object containing:
 *   - isLoggedIn {boolean} Whether the user is currently logged in
 *   - user {Object|null} The user data if logged in, null otherwise
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { isLoggedIn, user } = useIsLoggedIn();
 *   
 *   if (isLoggedIn) {
 *     return <div>Welcome {user.email}!</div>
 *   }
 *   return <div>Please log in</div>
 * }
 * ```
 */
function useIsLoggedIn() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
            const user = JSON.parse(sessionStorage.getItem('user') || '{}');
            setUser(user);
        }
    }, []);
    return { isLoggedIn, user };
}

export default useIsLoggedIn;