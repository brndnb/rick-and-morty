import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div className='header-container'>
     <div className='header-links'>
        <a href='/'>Home</a>
        <a href='/about'>About</a>
     </div>
    </div>
  )
}

export default Header