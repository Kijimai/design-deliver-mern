import React from "react"
import UserInfo from "../reusables/UserInfo"
import { useGlobalContext } from "../../context/context"

const Dashboard = () => {
  

  return (
    <div>
      <div className="user-controls-container">
        <UserInfo />
      </div>

    </div>
  )
}

export default Dashboard
