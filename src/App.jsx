import Home from './pages/Home'
import Bootstrap from './pages/Bootstrap'
import NavBar from './components/NavBar'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='bootstrap' element={< Bootstrap />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
