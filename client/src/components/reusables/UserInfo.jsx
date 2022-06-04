import React from "react"
import { useGlobalContext } from "../../context/context"
import placeholderAvatar from "../../images/Placeholder-avatar.png"

const UserInfo = () => {
  const { currentUser } = useGlobalContext()

  return (
    <div className="user-info-container">
      <img
        className="user-avatar"
        src={currentUser.avatar ? currentUser.avatar : placeholderAvatar}
        alt="user avatar"
      />
      <div className="user-info">
        <p>
          User:
          {currentUser ? `${currentUser.fName} ${currentUser.lName}` : "N/A"}
        </p>
        <p>Email: {currentUser.email ? currentUser.email : "N/A"}</p>
        <p>Role: {currentUser.userType}</p>
      </div>
    </div>
  )
}

export default UserInfo
