import React, { useState } from "react"
import { useGlobalContext } from "../../context/context"

const UserRegistration = () => {
  const { handleUserRegistration } = useGlobalContext()
  const [fName, setFName] = useState("")
  const [lName, setLName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPW, setConfirmPW] = useState("")
  const [userType, setUserType] = useState("artist")

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleUserRegistration(
          fName,
          lName,
          email,
          password,
          confirmPW,
          userType
        )
      }}
    >
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
      <button>Register</button>
    </form>
  )
}

export default UserRegistration
