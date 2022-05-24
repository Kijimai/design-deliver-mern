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
  const [currentUser, setCurrentUser] = useState({})
  const [error, setError] = useState({ message: "", show: false })

  const handleUserRegistration = (
    fName,
    lName,
    email,
    password,
    confirmPW,
    userType
  ) => {
    console.log("Submitting!")
    console.log(fName, lName, email, password, confirmPW, userType)
  }

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        error,
        setError,
        handleUserRegistration,
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
