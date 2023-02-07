import React, {useContext} from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { UserContext } from '../../contexts/UserContext'
import "./Header.css"

function Header() {
  //extract values from global context
  //NOTE USE { } not []
  const {userName, setUserName} = useContext(UserContext)
  console.log(userName)
  //extract theme values
  const {darkMode, setDarkMode} = useContext(ThemeContext)


const handleTheme = () => {

  setDarkMode(!darkMode)
  localStorage.setItem("darkMode", !darkMode)


}

  return (
    <div className={darkMode?'header-container header-dark' : "header-container"}>
     <div className='header-links'>
        <a href='/'>Home</a>
        <a href='/about'>About</a>
     </div>
     <div className='message'>
      <p>Welcome, {userName}</p>
      <button onClick={handleTheme}>{darkMode?"Light Mode" : "Dark Mode"}</button>
      </div>
    </div>
  )
}

export default Header