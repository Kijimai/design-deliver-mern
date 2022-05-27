import React from "react"
import UserInfo from "../reusables/UserInfo"
import MatchedJobs from "../reusables/MatchedJobs"
import MatchedArtists from "../reusables/MatchedArtists"
import { useGlobalContext } from "../../context/context"
import { useNavigate } from "react-router-dom"
const Dashboard = () => {
  const navigate = useNavigate()
  const { currentUser, isLoggedIn, setGlobalError } = useGlobalContext()
  if (!isLoggedIn) {
    setGlobalError({
      message: "You do not have permission to view this page!",
      show: true,
    })
    return navigate("/")
  }

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
