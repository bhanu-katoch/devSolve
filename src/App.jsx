import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Guidelines from './pages/Guidelines'
import Navbar from "./components/Navbar";
import RegisterJunior from './pages/RegisterJunior'
import RegisterSenior from './pages/ProjectLead'

export default function App() {
  return (
    <Router>
      <Navbar/>
      <div style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/register-junior" element={<RegisterJunior />} />
          <Route path="/project-lead" element={<RegisterSenior />} />
        </Routes>
      </div>
    </Router>
  )
}
