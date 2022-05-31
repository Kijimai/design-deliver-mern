import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const SingleArtist = () => {
  const { id } = useParams()
  const [foundUser, setFoundUser] = useState({})

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/user/${id}`)
      .then((res) => {
        setFoundUser(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      {foundUser ? (
        <div>
          <p>
            {foundUser.fName} {foundUser.lName}
          </p>
          <div className="bio">
            <h3>Bio: </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              labore qui inventore eum a nam molestiae eaque voluptates soluta,
              harum delectus nemo rem tempore itaque.
            </p>
          </div>
          <h3>Expertise: </h3>
          <ul>
            <li>{foundUser.expertise}</li>
          </ul>
        </div>
      ) : (
        <p>No User Found!</p>
      )}
    </div>
  )
}

export default SingleArtist
