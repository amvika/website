import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './Components/Navbar'
import WhatsAppButton from './Components/WhatsAppButton'
import OurFrancises from './Pages/OurFranchise/index'

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
// Import pages or create placeholder pages
const Home = () => <div className="pt-20 p-4">Home Page</div>

const HowItWorks = () => <div className="pt-20 p-4">How It Works Page</div>
const Blog = () => <div className="pt-20 p-4">Blog Page</div>
const Features = () => <div className="pt-20 p-4">Features Page</div>
const Login = () => <div className="pt-20 p-4">Login Page</div>
const SignUp = () => <div className="pt-20 p-4">Sign Up Page</div>

import CA from './Pages/CA'
import Footer from './Components/Footer'
import AmvikaSoftware from './Pages/AmbikaSoftware/Index'
import GrowWith from './Pages/GrowWithUs'
import AboutUs from './Pages/AboutUS/Index'
import ContactUs from './Pages/ContactPage'


const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="min-h-screen">
          <Navbar />
          <WhatsAppButton />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<AmvikaSoftware />} />
            <Route path="/c-a-services" element={<CA />} />
            <Route path="/grow-with-us" element={<GrowWith/>} />
            {/* <Route path="/website" element={<Website/>} /> */}
            <Route path="/our-franchise" element={<OurFrancises/>} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs/>} />
          </Routes>
          <Footer/>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

// Component to handle scrolling to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default App