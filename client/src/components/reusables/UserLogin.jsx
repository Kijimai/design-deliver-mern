import React, { useState } from "react"
import { Button } from "@mui/material"
import axios from "axios"

const UserLogin = () => {
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  const handleLogin = async (e) => {
    console.log("submitting login")
    e.preventDefault()
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/login",
        {
          email: loginEmail,
          password: loginPassword,
        }
      )
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="loginEmail">Email: </label>
        <input
          type="text"
          id="loginEmail"
          onChange={(e) => setLoginEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="loginPassword">Password: </label>
        <input
          type="password"
          id="loginPassword"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
      </div>
      <button>Login</button>
    </form>
  )
}

export default UserLogin
