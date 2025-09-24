
import "./App.css";

import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";

import { useCallback, useState, useEffect } from "react";
import Inscription from "./Insriptions/Inscription.jsx";
import ConnectionForm from "./ConnectionForm/ConnectionForm.jsx";
import Map from "./Map/Map.jsx";
import Header from "./Header/Header.jsx";
import ErrorPage from "../Containers/ErrorPage.jsx";
import { AuthContext } from "./AuthContext/AuthContext";


const routerLogin = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/login", element: <Navigate to="/" replace /> },
            { path: "/inscription", element: <Navigate to="/" replace /> },
            { path: "", element: <Map /> },
        ],
    },
]);
const router = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        errorElement: <ErrorPage />,
        children: [
            { path: "", element: <Map /> },
            { path: "/inscription", element: <Inscription /> },
            { path: "/connection", element: <ConnectionForm /> },
        ],
    },
]);

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(false);
    const [userId, setUserId] = useState(false);
    const [userName, setUserName] = useState(false);
    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedUserId = localStorage.getItem("userId");
        const storedUserName = localStorage.getItem("userName");

        if (storedToken && storedUserId && storedUserName) {
            setIsLoggedIn(true);
            setToken(storedToken);
            setUserId(storedUserId);
            setUserName(storedUserName);
        }
    }, []);

    const login = useCallback((name, uid, token) => {
        setIsLoggedIn(true);
        setToken(token);
        setUserId(uid);
        setUserName(name);
        localStorage.setItem("token", token);
        localStorage.setItem("userId", uid);
        localStorage.setItem("userName", name);
    }, []);
    const logout = useCallback(() => {
        setIsLoggedIn(false);
        setToken(null);
        setUserId(null);
        setUserName(null);
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("userName");
    }, []);
    if (isLoggedIn)
        return (
            <AuthContext.Provider
                value={{
                    isLoggedIn: !!token,
                    token: token,
                    userId: userId,
                    userName: userName,
                    login: login,
                    logout: logout,
                }}
            >
                <RouterProvider router={routerLogin} />
            </AuthContext.Provider>
        );
    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: !!token,
                token: token,
                userId: userId,
                userName: userName,
                login: login,
                logout: logout,
            }}
        >
            <RouterProvider router={router} />
        </AuthContext.Provider>
    );
};

export default App;
