import React from 'react'
import MyNavbar from './Components/MyNavbar'
import Home from './pages/Home'
import "./app.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from './pages/SignUp'
import Login from './pages/Login'

const App = () => {
  return <>
  <BrowserRouter>
  <MyNavbar/>
  <Routes>
    <Route path="/" element={<Home/>}>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  </>
}

export default App