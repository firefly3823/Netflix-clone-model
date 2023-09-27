import React, { useEffect, useState } from 'react'
import './Nav.css'
import netflixIcon from '../icons/Netflix-Logo.wine.svg'
function Nav() {
  const [navVisible, setNavVisible] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setNavVisible(true)
      } else {
        setNavVisible(false)
      }
    })
  })
  console.log(navVisible)
  return (
    <div className={`navBar ${navVisible && 'navShow'}`}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
      style={{
        width: "9rem",
        padding:"10px 0px 10px 10px",
        zIndex: '1'
      }} 
      alt="" />
    </div>
  )
}

export default Nav