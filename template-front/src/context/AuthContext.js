import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    let localStorageUser = localStorage.getItem('user');
    let localStorageUserObject = localStorageUser ? JSON.parse(localStorageUser) : {};
    let localStorageAuth = localStorage.getItem('auth');
    let localStorageAuthObject = localStorageAuth ? JSON.parse(localStorageAuth) : {};
    const [user, setUser] = useState(localStorageUserObject);
    const auth = localStorageAuthObject;

    const signUp = async (name, email, password, phone, cpf) => {
        try {
            const register = await fetch(`${process.env.REACT_APP_BASE_URL}/users`, {
                method: 'PUT',
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    phone: phone,
                    doc: cpf
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then((response) => console.log(response.json()))
                .then(response => response);

            if (register && register.logged) {
                localStorage.setItem('user', JSON.stringify(register.logged));
                localStorage.setItem('auth', JSON.stringify(register.auth));
                localStorage.setItem('name', JSON.stringify(register.logged.name));
                setUser(register.logged);
                return register.logged;
            }
            return null;
        } catch (error) {
            return null;
        }
    };

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

    const login = async (email, password) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/login`, {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(response => response.json())
                .then(response => response);

            if (response && response.logged) {
                localStorage.setItem('user', JSON.stringify(response.logged));
                localStorage.setItem('auth', JSON.stringify(response.auth));
                localStorage.setItem('userid', response.logged._id);
                localStorage.setItem('name', response.logged.name);
                localStorage.setItem('token', response.auth.token);
                auth.refreshToken = response.auth.refreshToken;
                auth.status = response.auth.status;
                auth.token = response.auth.token;
                setUser(response.logged);
                return response.logged;
            }
            return null;
        } catch (error) {
            return null;
        }
    };

    return (
        <AuthContext.Provider value={{ user, auth, signUp, login, signOut, getToken, getRefreshToken }}>
            {children}
        </AuthContext.Provider>
    );
};