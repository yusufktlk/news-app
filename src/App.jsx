import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Business from './pages/Business'
import Sports from './pages/Sports'
import Technology from './pages/Technology'
import Fashion from "./pages/Fashion"
import Movies from "./pages/Movies"
import Books from "./pages/Books"
import Arts from "./pages/Arts"



function App() {
  

  return (
     <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/arts" element={<Arts />} />
            <Route path="/business" element={<Business />} />
            <Route path="/books" element={<Books />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/technology" element={<Technology />} />
          </Routes>
          <Footer />
        </Router>
     </>
  )
}

export default App
