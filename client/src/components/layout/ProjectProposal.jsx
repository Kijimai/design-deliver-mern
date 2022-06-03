import React, { useState, useEffect } from "react"
import axios from "axios"

const ProjectProposal = () => {
  const [title, setTitle] = useState("")
  const [postContent, setPostContent] = useState("")
  const [neededExpertise, setNeededExpertise] = useState([])

  return (
    <form>
      <div className="form-group">
        <input type="hidden" value="user-id"/>
        <label htmlFor="title">Title: </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button>Submit Proposal</button>
    </form>
  )
}

export default ProjectProposal
