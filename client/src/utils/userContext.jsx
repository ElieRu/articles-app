
import { createContext, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";


const bien = () => {
    // const {isLoading, isAuthenticated, user} = useAuth0();
    return "bien"
}

// let g = Bien()

export const UserContext = createContext(bien())
export function UserContextProvider ({v, children}) {
    // const UserContext = createContext(bien())
    return <UserContext.Provider>
        {children}
    </UserContext.Provider>
}
