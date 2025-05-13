import { useEffect, useState } from "react";

function useIsLoggedIn() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
            const user = JSON.parse(localStorage.getItem('user') || '{}');
            setUser(user);
        }
    }, []);
    return { isLoggedIn, user };
}

export default useIsLoggedIn;