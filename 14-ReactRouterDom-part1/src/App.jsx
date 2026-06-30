import React from 'react'
import {Route,Routes}  from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <h2>Hello Application....</h2>

      <div id='pages'>  
        <Routes>
          <Route path='/'  element = { <Home /> }  />
          <Route path='/about'  element = {<About />}  />
          <Route path='/Contact'  element = {<Contact />}  />
        </Routes>
      </div>


    </div>
  )
}

export default App
