import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layouts/navbar/Navbar'
import Footer from './components/layouts/footer/Footer'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Contacts from './pages/contacts/Contacts'
import Pricing from './pages/pricing/Pricing'
import './index.css'
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
