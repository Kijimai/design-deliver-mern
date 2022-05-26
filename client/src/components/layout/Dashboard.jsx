import React from "react"
import UserInfo from "../reusables/UserInfo"
import MatchedJobs from "../reusables/MatchedJobs"
import MatchedArtists from "../reusables/MatchedArtists"
import { useGlobalContext } from "../../context/context"

const Dashboard = () => {
  const { currentUser } = useGlobalContext()

  return (
    <div className="dashboard-container">
      <div className="user-controls-container">
        <UserInfo />
      </div>
      <div className="dashboard-right">
        {currentUser.userType === "artist" && <MatchedJobs />}
        {currentUser.userType === "employer" && <MatchedArtists />}
      </div>
    </div>
  )
}

export default Dashboard
