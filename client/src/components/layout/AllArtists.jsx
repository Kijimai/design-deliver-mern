import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const AllArtists = () => {
  const [allArtists, setAllArtists] = useState([])
  const [featuredArtist, setFeaturedArtist] = useState({})

  useEffect(() => {
    axios.get("http://localhost:8000/api/all_artists").then((res) => {
      console.log(res.data)
      setAllArtists(res.data)
    })
    axios
      .get("http://localhost:8000/api/featured_artist")
      .then((res) => {
        setFeaturedArtist(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <section className="all-artists-section">
      <article className="featured-artist-container">
        <div className="featured-artist-info">
          <div className="left">
            <img
              className="featured-artist-avatar"
              src={featuredArtist.avatar}
              alt={`${featuredArtist.fName} ${featuredArtist.lName}`}
            />
            <p className="artist-name">
              {featuredArtist.fName} {featuredArtist.lName}
            </p>
          </div>
          <div className="right">
            <h2>Featured Artist</h2>
            <p className="bio">{featuredArtist.bio}</p>
            <ul className="expertise-container">
              {featuredArtist.expertise &&
                featuredArtist.expertise.map((item, index) => {
                  return <li key={index}>{item}</li>
                })}
            </ul>
            <Link to={`/artist/${featuredArtist._id}`}>
              Visit {featuredArtist.fName}'s Page
            </Link>
          </div>
        </div>
      </article>
      <h2>All artists</h2>
      <div className="all-artists-container">
        {allArtists ? (
          allArtists.map((artist) => {
            return (
              <div key={artist._id} className="single-artist">
                <Link to={`/artist/${artist._id}`}>
                  <img
                    src={artist.avatar}
                    alt={`${artist.fName} ${artist.lName}`}
                  />
                  <p>
                    {artist.fName} {artist.lName}
                  </p>
                </Link>
                <ul className="expertise-container">
                  {artist.expertise.map((item) => {
                    return <li>{item}</li>
                  })}
                </ul>
              </div>
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
