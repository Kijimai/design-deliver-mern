import React, {
  useState,
  useEffect,
  useContext,
  useLayoutEffect,
  createContext,
} from "react"
import axios from "axios"

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [globalError, setGlobalError] = useState({ message: "", show: false })
  const [currentUser, setCurrentUser] = useState({
    fName: "test",
    lName: "test",
    email: "test-email",
    userType: "artist",
  })

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isLoggedIn,
        setIsLoggedIn,
        globalError,
        setGlobalError,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext, useGlobalContext }
