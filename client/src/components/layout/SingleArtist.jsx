import React, {useEffect, useState} from 'react'
import axios from "axios"
import {useParams} from "react-router-dom"

const SingleArtist = () => {
  const {id} = useParams()
  const [foundUser, setFoundUser] = useState({})
  
  useEffect(() => {
    axios.get(`http://localhost:8000/api/artists/${id}`).then(res => {
      setFoundUser(res.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div>
      {foundUser ? <p>{foundUser.fName} {foundUser.lName}</p> : <p>No User Found!</p>}
    </div>
  )
}

export default SingleArtist