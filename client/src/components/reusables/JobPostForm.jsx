import React, { useState, useEffect } from "react"
import axios from "axios"

const formItems = [
  "illustrator",
  "2d artist",
  "3d artist",
  "game concept artist",
  "film concept artist",
  "2d animator",
  "3d animator",
  "matte painter",
]

const JobPostForm = () => {
  const [title, setTitle] = useState("")
  const [postContent, setPostContent] = useState("")
  const [neededExpertise, setNeededExpertise] = useState([])

  const handleJobPostSubmit = (e) => {
    e.preventDefault()
    console.log(neededExpertise)
  }

  const handleChange = (e) => {
    const { value, checked } = e.target
    if (checked === true) {
      setNeededExpertise([...neededExpertise, value])
    } else {
      setNeededExpertise((previousVals) => {
        return setNeededExpertise(previousVals.filter((item) => item !== value))
      })
    }
  }

  return (
    <form className="job-post-form" onSubmit={handleJobPostSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="post-content">Message: </label>
        <textarea
          className="post-message"
          type="text"
          id="post-content"
          onChange={(e) => setPostContent(e.target.value)}
        >
          {postContent}
        </textarea>
      </div>
      <div className="form-group">
        {formItems.map((item, index) => {
          return (
            <div key={index} className="expertise-container">
              <label htmlFor={item}>{item}</label>
              <input
                id={item}
                type="checkbox"
                value={item}
                onChange={(e) => handleChange(e)}
              />
            </div>
          )
        })}
      </div>
      <button>Post Job</button>
    </form>
  )
}

export default JobPostForm
