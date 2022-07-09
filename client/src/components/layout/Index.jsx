import React, { useState } from "react"
import UserRegistration from "../reusables/UserRegistration"
import UserLogin from "../reusables/UserLogin"
import { indexImages } from "../../utils/IndexImages"
import { useGlobalContext } from "../../context/context"
const Index = () => {
  const [showReg, setShowReg] = useState(true)
  const [showLogin, setShowLogin] = useState(false)
  const { globalError } = useGlobalContext()
  const randNum = Math.floor(Math.random() * indexImages.length)

  console.log(indexImages)
  return (
    <>
      <div className="forms-container">
        <img
          className="index-splash-image"
          src={indexImages[randNum]}
          alt="..."
        />
        <div className="login-reg-container">
          <div className="login-reg-container__btn-container">
            <button
              disabled={!showReg && showReg}
              onClick={() => {
                setShowReg(true)
                setShowLogin(false)
              }}
            >
              Register
            </button>
            <button
              disabled={!showLogin && showLogin}
              onClick={() => {
                setShowReg(false)
                setShowLogin(true)
              }}
            >
              Login
            </button>
          </div>
          {showReg && <UserRegistration />}
          {showLogin && <UserLogin />}
        </div>
      </div>
    </>
  )
}

export default Index
