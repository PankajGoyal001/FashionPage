
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/common/Header'
import About from './pages/About'
import Footer from './components/common/Footer'
import NewArrival from './pages/NewArrival'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/arrival' element={<NewArrival/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
