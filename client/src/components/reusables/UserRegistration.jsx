import React, { useState } from "react"
import { useGlobalContext } from "../../context/context"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const UserRegistration = () => {
  const { setCurrentUser } = useGlobalContext()
  const navigate = useNavigate()
  const [fName, setFName] = useState("")
  const [lName, setLName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPW, setConfirmPW] = useState("")
  const [userType, setUserType] = useState("artist")
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
    if (!fName || !lName || !email || !password || !password) {
      console.log("Dont leave a thing empty!")
      return setError({ message: "Dont leave a thing empty!", show: true })
    }
    setCurrentUser({ fName, lName, email, password, confirmPW, userType })
    setError({ message: "", show: false })
  }

  return (
    <form className="registration-form">
      <h2>Sign up for an account!</h2>
      <div className="form-group">
        <label htmlFor="fName">First Name: </label>
        <input
          className="form-input"
          type="text"
          id="fName"
          onChange={(e) => setFName(e.target.value)}
          value={fName}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lName">Last Name: </label>
        <input
          className="form-input"
          type="text"
          id="lName"
          onChange={(e) => setLName(e.target.value)}
          value={lName}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email: </label>
        <input
          className="form-input"
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password: </label>
        <input
          className="form-input"
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPW">Confirm Password: </label>
        <input
          className="form-input"
          type="password"
          id="confirmPW"
          onChange={(e) => setConfirmPW(e.target.value)}
          value={confirmPW}
        />
      </div>
      <div className="form-group">
        <label htmlFor="userType">User Type: </label>
        <select
          id="userType"
          onChange={(e) => setUserType(e.target.value)}
          value={userType}
        >
          <option value="artist">Artist</option>
          <option value="employer">Employer</option>
        </select>
      </div>
      <Button
        variant="contained"
        onClick={() => {
          handleUserRegistration(
            fName,
            lName,
            email,
            password,
            confirmPW,
            userType
          )
          navigate("/dashboard")
        }}
      >
        Register
      </Button>
    </form>
  )
}

export default UserRegistration
