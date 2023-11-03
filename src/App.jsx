import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Button from './components/button'
import Card from './components/card/card'
import Navbar from './components/navbar'
import NavigationDotVertical from './components/navigationDotVertical'

import './App.css'
import Slider from './components/slider/slider'
import Absolute from './components/absolute/absolute'
import Modal from './components/modal/modal'

function App() {
  return (
    <div className="bg-slate-300 h-[100vh]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="button" element={<Button />} />
          <Route path="modal" element={<Modal />} />
          <Route path="rel-abs" element={<Absolute />} />
          <Route path="slider" element={<Slider />} />
          <Route path="navigation" element={<NavigationDotVertical />} />
          <Route path="card" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
