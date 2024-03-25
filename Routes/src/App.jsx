import React from 'react'
import {NavLink, Route,Routes} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Labs from './components/Labs'
import Support from './components/Support'
import NotFound from './components/NotFound';
import './App.css'
import MainHeader from './components/MainHeader';
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <div className='NavBar'>
        <ul className='list'>
          {/* <a></a> = <Link></Link> */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="labs">Labs</NavLink>
          <NavLink to="support">Support</NavLink>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<MainHeader/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/labs" element={<Labs/>}/>
          <Route path="/support" element={<Support/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
