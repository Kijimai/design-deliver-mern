import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const AllArtists = () => {
  const [allArtists, setAllArtists] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8000/api/all_artists").then((res) => {
      console.log(res.data)
      setAllArtists(res.data)
    })
  }, [])

  return (
    <section className="all-artists-section">
      <h2>All artists</h2>
      <div className="all-artists-container">
        {allArtists ? (
          allArtists.map((artist, index) => {
            return (
              <Link to={`/artist/${artist._id}`}>
                <div key={artist._id} className="single-artist">
                  <img
                    src={artist.avatar}
                    alt={`${artist.fName} ${artist.lName}`}
                  />
                  <p>
                    {artist.fName} {artist.lName}
                  </p>
                </div>
              </Link>
            )
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  )
}

export default AllArtists
