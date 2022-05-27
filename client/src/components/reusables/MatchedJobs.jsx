import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const MatchedJobs = () => {
  const [foundJobs, setFoundJobs] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/all_projects")
      .then((res) => {
        setFoundJobs(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className="matched-jobs-container">
      {foundJobs &&
        foundJobs.map((job, index) => {
          return (
            <section key={index} className="matched-job">
              <div className="upper">
                <h3>{job.title}</h3>
                <p>{job.postContent}</p>
              </div>
              <ul className="expertise-required-container">
                {job.neededExpertise.map((item) => {
                  return <li>{item}</li>
                })}
              </ul>
            </section>
          )
        })}
    </div>
  )
}

export default MatchedJobs
