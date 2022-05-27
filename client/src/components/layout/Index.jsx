import React from "react"
import UserRegistration from "../reusables/UserRegistration"
import UserLogin from "../reusables/UserLogin"
import { indexImages } from "../../utils/IndexImages"
import { useGlobalContext } from "../../context/context"
const Index = () => {
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
        <UserRegistration />
      </div>
    </>
  )
}

export default Index
