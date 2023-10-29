import React, { createContext, useContext } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
    const user = {
        name: 'AAA',
        email: 'aaad456@gmail.com',
        password: '12345',
    };

    return (
        <AuthContext.Provider value={{ user }}>
            {props.children}
        </AuthContext.Provider>
    )
}