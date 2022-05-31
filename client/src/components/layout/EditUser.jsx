import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
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

const EditUser = () => {
  const { id } = useParams()
  const [currentEditingUser, setCurrentEditingUser] = useState({})

  useEffect(() => {
    console.log("Fetching current user!")
    axios.get(`http://localhost:8000/api/user/edit/:${id}`)
  }, [])

  return (
    <form className="edit-user-form">
      <h2>Expertise</h2>
      <div className="form-group">
        <label htmlFor="">First Name</label>
        <input type="text" value={currentEditingUser.fName} />
      </div>
      {formItems.map((expertise, index) => {
        return (
          <div key={index} className="form-group">
            <input
              type="checkbox"
              id={expertise}
              value={expertise}
              name="expertise"
            />
            <label htmlFor={expertise}>{expertise}</label>
          </div>
        )
      })}
      <button>Update</button>
    </form>
  )
}

export default EditUser
