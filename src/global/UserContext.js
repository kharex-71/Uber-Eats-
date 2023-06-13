import React,{useState,createContext} from 'react';

export const PracticeContext = createContext();

export const PracticeProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const userLogged = (user) => {
        setUser(user)
    }

    
    return(
        <PracticeContext.Provider value={{user,userLogged}}>
            {children}
        </PracticeContext.Provider>
    )
}

