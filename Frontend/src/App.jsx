import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import EventHandling from './components/EventHandling'
import { SnackbarProvider } from 'notistack'
import Signup from './components/Signup'


const App = () => {
  return (
    <div>
      <SnackbarProvider>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path= '/' element={<Home />} />
        <Route path= '/Home' element={<Home />} />
        <Route path= '/EventHandling' element={<EventHandling />} />
        <Route path='/Signup' element={<Signup />}/>
      </Routes>
      </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App