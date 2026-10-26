import React from 'react'
import { Routes, Route } from 'react-router-dom'


import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import CollegeCard from './Components/CollegeCard'
import Styling from './Components/Styling'

import Home from './pages/Home'
import About from './pages/About'
import Admission from './pages/Admission'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import Faculty from './pages/Faculty'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />

     
          <Route path="/college-card" element={<CollegeCard />} />
          <Route path="/styling" element={<Styling />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
export default App;