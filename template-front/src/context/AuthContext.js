import { createContext, useState } from 'react';

export const AuthContext = createContext(!null);

export const AuthProvider = ({ children }) => {
    let localStorageUser = localStorage.getItem('user');
    let localStorageUserObject = localStorageUser ? JSON.parse(localStorageUser) : {};
    let localStorageAuth = localStorage.getItem('auth');
    let localStorageAuthObject = localStorageAuth ? JSON.parse(localStorageAuth) : {};
    const [user, setUser] = useState(localStorageUserObject);
    const auth = localStorageAuthObject;

    const signOut = () => {
        localStorage.clear();
        setUser(null);
        auth.refreshToken = null;
        auth.status = null;
        auth.token = null;
    };

    const getToken = () => {
        return auth.token;
    };

    const getRefreshToken = () => {
        return auth.refreshToken;
    };

    return (
        <AuthContext.Provider value={{ user, auth, signOut, getToken, getRefreshToken }}>
            {children}
        </AuthContext.Provider>
    );
};