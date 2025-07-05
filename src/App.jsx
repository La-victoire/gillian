import gsap, { SplitText, ScrollTrigger } from 'gsap/all'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './tabs/About'
import Contact from './tabs/Contact'
import Portfolio from './tabs/Portfolio'
import PortfolioPage from './tabs/PortfolioPage'  
import Layout from './components/Layout'
import Home from './components/Home'

function App() {
  gsap.registerPlugin(ScrollTrigger, SplitText)
  return (
  <>
  <Router>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='/about-me' element={<About />}/>
        <Route path='/my-work' element={<Portfolio />}/>
        <Route path='/contact-me' element={<Contact />}/>
        <Route path='my-work/:slug' element={<PortfolioPage />}/>
        <Route path='*' element={<Contact />}/>
      </Route>
    </Routes>
  </Router>  
  </>
  )
}

export default App
