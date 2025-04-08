import React from 'react'

const AuthContext = React.createContext({
    user: null,
    setUser: () => {},
    isLoggedIn: false,
    setIsLoggedIn: () => {}
})

export default AuthContext;