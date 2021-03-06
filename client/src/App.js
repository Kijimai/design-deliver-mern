import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigator from "./components/reusables/Navigator"
import Dashboard from "./components/layout/Dashboard"
import Index from "./components/layout/Index"
import UserLogin from "./components/reusables/UserLogin"
import ProjectProposal from "./components/layout/ProjectProposal"
import "./styles/app.css"
import AllArtists from "./components/layout/AllArtists"
import AllJobs from "./components/layout/AllJobs"
import SingleArtist from "./components/layout/SingleArtist"
import EditUser from "./components/layout/EditUser"
import { useGlobalContext } from "./context/context"
import JobPosting from "./components/layout/JobPosting"

function App() {
  const { globalError } = useGlobalContext()

  return (
    <Router>
      {globalError && <p>{globalError.message}</p>}
      <Navigator />
      <main className="main-container">
        <Routes>
          {/* Temporary Route */}
          <Route path="/login" element={<UserLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/edit" element={<EditUser />} />
          <Route path="/dashboard/post_job" element={<JobPosting />} />
          <Route path="/proposal" element={<ProjectProposal />} />
          <Route path="/all_artists" element={<AllArtists />} />
          <Route path="/all_jobs" element={<AllJobs />} />
          <Route path="/artist/:id" element={<SingleArtist />} />
          {/* Temporary Route */}
          <Route path="/" element={<Index />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
