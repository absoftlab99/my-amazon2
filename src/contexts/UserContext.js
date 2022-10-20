import React, { Children, createContext } from 'react';

const AuthContext = createContext();

const UserContext = ({children}) => {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;