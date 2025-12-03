frontend/src/components/App.jsx [81:91]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
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
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



frontend/src/components/App.jsx [95:105]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
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
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



