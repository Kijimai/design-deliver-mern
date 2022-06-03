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
    _id: "6296db58c77ec80fb0e37f95",
    fName: "Carson",
    lName: "Reynolds",
    email: "Shea.Lowe69@hotmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1038.jpg",
    userType: "employer",
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
