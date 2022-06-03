import React, { useEffect, useState } from "react"
import axios from "axios"

const AllJobs = () => {
  const [allJobs, setAllJobs] = useState([])
  console.log(typeof allJobs)
  return (
    <section className="all-jobs-container">
      <div>
        {allJobs ? <p>No Jobs Available right now...</p> : <p>All JOBS</p>}
      </div>
    </section>
  )
}

export default AllJobs
