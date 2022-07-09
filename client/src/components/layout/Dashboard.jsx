import React, { useEffect } from "react"
import UserInfo from "../reusables/UserInfo"
import MatchedJobs from "../reusables/MatchedJobs"
import MatchedArtists from "../reusables/MatchedArtists"
import JobPostForm from "../reusables/JobPostForm"
import { useJwt } from "react-jwt"
import { useGlobalContext } from "../../context/context"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"

const Dashboard = () => {
  const navigate = useNavigate()
  const { currentUser, isLoggedIn, setGlobalError } = useGlobalContext()
  const { decodedToken } = useJwt()
  
  const getToken = async () => {
    const response = await axios.get(
      "http://localhost:8000/api/users/dashboard"
    )
    console.log(response)
  }
  useEffect(() => {
    getToken()
  })

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
        {currentUser.userType === "employer" && (
          <Link to="/dashboard/post_job">Post a Job</Link>
        )}
      </div>
      <div className="dashboard-right">
        {currentUser.userType === "artist" && <MatchedJobs />}
        {currentUser.userType === "employer" && <MatchedArtists />}
      </div>
    </div>
  )
}

export default Dashboard
