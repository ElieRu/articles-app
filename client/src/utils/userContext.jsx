
import { createContext, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = createContext({
    user: "user"
});

export function useUser() {
    const user = useContext(UserContext)
    return {user: user}
}

export function UserContextProvider ({children}) {
    const {isLoading, user} = useAuth0();
    let my_user = null
    if (isLoading) {
        my_user = true
    } else {
        my_user = {
            name: user.email
        }
    }
    return <UserContext.Provider value={my_user}>
        {children}
    </UserContext.Provider>
}
