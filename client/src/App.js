import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./components/layout/Dashboard"
import Index from "./components/layout/Index"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  )
}

export default App
