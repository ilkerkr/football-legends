import React from 'react'
import logo from "../../assets/logo.png"
import "./Header.css"


const Header = () => {
  return (
    <div className='header'>
        <img src={logo} alt="" className='img' />
        <h1 className='title'>Football LEGENDS</h1>
    </div>
  )
}

export default Header