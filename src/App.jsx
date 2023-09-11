import React from 'react'
import MyNavbar from './Components/MyNavbar'
import Posts from './Components/Posts'
import Home from './pages/Home'
import "./app.css"

const App = () => {
  return <>
  <MyNavbar/>
  <Home/>
  <Posts/>
  </>
}

export default App