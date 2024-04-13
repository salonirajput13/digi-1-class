import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { SnackbarProvider } from 'notistack'
import Login from './components/Login'
import Signup from './components/Signup'
import EventHandling from './components/EventHandling'
import ManageUsers from './components/ManageUsers'




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
        <Route path='/Login' element={<Login />} />
        <Route path='/ManageUsers' element={<ManageUsers />} />

      </Routes>
      </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App