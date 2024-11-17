/* eslint-disable react/prop-types */

import { createContext } from "react"

export const AuthContext = createContext(null)


export default function AuthProvider({children}) {

    const authInfo = {
        name: "Hasant",
        email: "hasant@example.com",
        isLoggedIn: true,
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
