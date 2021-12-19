import { useState, createContext, useEffect } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [state, setState] = useState({
        email: '',
        session: ''
    })

    useEffect(() => {
        setState(JSON.parse(window.localStorage.getItem('session')))
    }, [])

    return (
        <UserContext.Provider value={[state, setState]}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }