import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Main from './pages/Main'
import Footer from './components/Footer'

function App() {

  return (
    <div className="bg-[#FFFBEB]">
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}

export default App
