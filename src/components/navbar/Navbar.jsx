import React, { useState } from 'react'
import './navbar.scss'
import { userData } from '../../simpleData/testData';
import { Link } from 'react-router-dom';

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const user = true;

  return (
    <nav>
        <div className="left">
          <a href="/" className='logo'>
            <img src="./logo.png" alt="logo" />
            <span>ReactEstate</span>
          </a>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
        </div>
        <div className="right">
        {user ? (
          <div className='user'>
            <img src={userData.img} alt="image"/>
            <span>Zane Wang</span>
            <Link to="/profile">Profile</Link>
          </div>
         ) : (<>
          <a href="/">Log in</a>
          <a href="/" className='register'>Sign up</a>
          </>)}
        <div className='menuIcon'>
          <img src='/menu.png' alt='menu button' onClick={()=>setOpenMenu((prev) => !prev)}/>
        </div>
        <div className={openMenu ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Log in</a>
          <a href="/">Sign up</a>
        </div>
        </div>
    </nav>
  )
}

export default Navbar
