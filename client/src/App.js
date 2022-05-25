import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigator from "./components/reusables/Navigator"
import Dashboard from "./components/layout/Dashboard"
import Index from "./components/layout/Index"
import UserLogin from "./components/reusables/UserLogin"
import ProjectProposal from "./components/layout/ProjectProposal"
import "./styles/app.css"

function App() {
  return (
    <Router>
      <Navigator />
      <main class="main-container">
        <Routes>
          {/* Temporary Route */}
          <Route path="/login" element={<UserLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/proposal" element={<ProjectProposal />} />
          {/* Temporary Route */}
          <Route path="/" element={<Index />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
